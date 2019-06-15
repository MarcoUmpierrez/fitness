import DS from 'ember-data';
import { v4 } from 'uuid';
import StoreService from 'ember-data/store';
import { openDB } from 'idb';

export default class ApplicationAdapter extends DS.Adapter {
  // Database name
  dbName: string = 'FitnessAdapter';

  // models
  models: Array<string> = [
    'measure',
    'exercise',
    'training-day',
    'training-routine'
  ];

  // Database version number. Newer versions upgrade the schema if it's available
  version: number = 1;

  generateIdForRecord(
    store: StoreService,
    type: typeof DS.Model,
    inputProperties: Object
  ): string | number {
    return v4();
  }

  async createRecord(
    store: StoreService,
    type: typeof DS.Model,
    snapshot: DS.Snapshot
  ): Promise<any> {
    let db = await this.openDatabase();
    let data = this.serialize(snapshot, { includeId: true });
    let modelName = type.modelName.toString();
    await db
      .transaction(modelName, 'readwrite')
      .objectStore(modelName)
      .add(data);
    db.close();
    return new Promise((resolve, reject) => resolve(data));
  }

  async findRecord(
    store: StoreService,
    type: typeof DS.Model,
    id: string | number
  ): Promise<any> {
    let db = await this.openDatabase();
    let modelName = type.modelName.toString();
    let record = await db
      .transaction(modelName)
      .objectStore(modelName)
      .get(id);
    db.close();
    return new Promise((resolve, reject) => resolve(record));
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
    return new Promise((resolve, reject) => resolve(data));
  }

  async updateRecord(
    store: StoreService,
    type: typeof DS.Model,
    snapshot: DS.Snapshot
  ) {
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
    return new Promise((resolve, reject) => resolve(data));
  }

  async deleteRecord(
    store: StoreService,
    type: typeof DS.Model,
    snapshot: DS.Snapshot
  ): Promise<any> {
    let db = await this.openDatabase();
    let data = this.serialize(snapshot, { includeId: true });
    let modelName = type.modelName.toString();
    await db
      .transaction(modelName, 'readwrite')
      .objectStore(modelName)
      .delete(snapshot.id);
    db.close();
    return new Promise((resolve, reject) => resolve(data));
  }

  async queryRecord(store: StoreService, type: typeof DS.Model, query: any) {
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
          return new Promise((resolve, reject) => resolve(cursor.value));
        } else {
          cursor = await cursor.continue();
        }
      }
    } else {
      db.close();
      return new Promise((resolve, reject) => resolve(null));
    }
  }

  async query(store: StoreService, type: typeof DS.Model, query: any) {
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

    return new Promise((resolve, reject) => resolve(data));
  }

  openDatabase(): Promise<any> {
    const models = this.models;
    return openDB(this.dbName, this.version, {
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
