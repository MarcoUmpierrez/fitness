import Service from '@ember/service';
import { openDB, IDBPDatabase } from 'idb';
import { models, databaseName, databaseVersion } from 'efitness/utils/constants';



export default class BatchOperationsService extends Service {
  async saveAll(models: BackUp) {
    let db = await this.openDatabase();

    for (let property in models) {
      let array = models[property] as BackUpModel[];
      if (property !== 'settings' && array && Array.isArray(array) && array.length > 0) {
        let model: BackUpModel;
        let objectStore;
        for (model of (models[property] as BackUpModel[])) {
          if (!objectStore) {
            objectStore = await db.transaction(model.type, 'readwrite').objectStore(model.type);
          }

          let obj = Object.assign(model.attributes, { id: model.id });
          let record = await objectStore.get(model.id);

          if (record) {
            await objectStore.put(obj);
          } else {
            await objectStore.add(obj);
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