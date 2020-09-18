import Service from '@ember/service';
import { openDB, IDBPDatabase } from 'idb';
import { models, databaseName, databaseVersion } from 'efitness/utils/constants';



export default class BatchOperationsService extends Service {
  async saveAll(backup: BackUp) {
    let db = await this.openDatabase();
    
    for (let property in backup) {
      let models = backup[property] as BackUpModel[];
      if (property !== 'settings' && models && Array.isArray(models) && models.length > 0) {
        let model: BackUpModel;
        let objectStore;
        for (model of models) {
          if (!objectStore) {
            objectStore = await db.transaction(model.type, 'readwrite').objectStore(model.type);
          }

          let record = await objectStore.get(model.id);

          if (record) {
            await objectStore.put(model);
          } else {
            await objectStore.add(model);
          }
        }
      }
    }

    db.close();
  }

  openDatabase(): Promise<IDBPDatabase> {
    return openDB(databaseName, databaseVersion, {
      upgrade(db) {
        // store list of models or find their names somewhere else?
        models.forEach((modelName: string) => {
          if (!db.objectStoreNames.contains(modelName)) {
            db.createObjectStore(modelName, { keyPath: 'id' });
          }
        });
      }
    });
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'batch': BatchOperationsService;
  }
}