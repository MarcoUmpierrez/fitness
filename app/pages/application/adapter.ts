import DS from 'ember-data';
import { v4 } from 'uuid';
import StoreService from 'ember-data/store';
import { openDB, IDBPDatabase } from 'idb';
import { models, databaseName, databaseVersion } from 'efitness/utils/constants';

export default class ApplicationAdapter extends DS.Adapter {

  generateIdForRecord(store: StoreService, type: typeof DS.Model, inputProperties: Object): string | number {
    return v4();
  }

  async createRecord(store: StoreService, type: typeof DS.Model, snapshot: DS.Snapshot): Promise<any> {
    let db = await this.openDatabase();
    let data = this.serialize(snapshot, { includeId: true });
    let modelName = type.modelName.toString();
    await db
      .transaction(modelName, 'readwrite')
      .objectStore(modelName)
      .add(data);
    db.close();
    return data;
  }

  async findRecord(store: StoreService, type: typeof DS.Model, id: string | number): Promise<any> {
    let db = await this.openDatabase();
    let modelName = type.modelName.toString();
    let record = await db
      .transaction(modelName)
      .objectStore(modelName)
      .get(id);
    db.close();
    return record;
  }

  async findAll(store: StoreService, type: typeof DS.Model) {
    let db = await this.openDatabase();
    let data: Array<any> = [];
    let modelName = type.modelName.toString();
    let cursor = await db.transaction(modelName).store.openCursor();

    while (cursor) {
      data.push(cursor.value);
      cursor = await cursor.continue();
    }

    db.close();
    return data;
  }

  async updateRecord(store: StoreService, type: typeof DS.Model, snapshot: DS.Snapshot): Promise<any> {
    let db = await this.openDatabase();
    let data = this.serialize(snapshot, { includeId: true });
    let modelName = type.modelName.toString();
    let objectStore = db
      .transaction(modelName, 'readwrite')
      .objectStore(modelName);
    let record = await objectStore.get(snapshot.id);
    // Check the record exists in the db
    if (record) {
      await objectStore.put(data);
    }

    db.close();
    return data;
  }

  async deleteRecord(store: StoreService, type: typeof DS.Model, snapshot: DS.Snapshot): Promise<any> {
    let db = await this.openDatabase();
    let data = this.serialize(snapshot, { includeId: true });
    let modelName = type.modelName.toString();
    await db
      .transaction(modelName, 'readwrite')
      .objectStore(modelName)
      .delete(snapshot.id);
    db.close();
    return data;
  }

  async queryRecord(store: StoreService, type: typeof DS.Model, query: any): Promise<any> {
    let db = await this.openDatabase();
    let modelName = type.modelName.toString();
    let queryKeys = Object.keys(query);
    let cursor = await db
      .transaction(modelName)
      .objectStore(modelName)
      .openCursor();

    if (cursor) {
      while (cursor) {
        let queryKeyMatchCount = 0;

        queryKeys.forEach((key: string) => {
          if (cursor.value[key] === query[key]) {
            queryKeyMatchCount++;
          }
        });

        if (queryKeyMatchCount === queryKeys.length) {
          db.close();
          return cursor.value;
        } else {
          cursor = await cursor.continue();
        }
      }
    } else {
      db.close();
      return null;
    }
  }

  async query(store: StoreService, type: typeof DS.Model, query: any): Promise<any> {
    let db = await this.openDatabase();
    let data: Array<any> = [];
    let modelName = type.modelName.toString();
    let queryKeys = Object.keys(query);
    let cursor = await db
      .transaction(modelName)
      .objectStore(modelName)
      .openCursor();

    if (cursor) {
      while (cursor) {
        let queryKeyMatchCount = 0;

        queryKeys.forEach(key => {
          if (cursor.value[key] === query[key]) {
            queryKeyMatchCount++;
          }
        });

        if (queryKeyMatchCount === queryKeys.length) {
          data.push(cursor.value);
        }

        cursor = await cursor.continue();
      }
    } else {
      db.close();
    }

    return data;
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
