import Service from '@ember/service';
import { openDB, deleteDB, wrap, unwrap } from 'idb';

export default class StorageService extends Service {
  async InitDatabase() {
    const db = await openDB('fitness', 1, {
      upgrade(db) {
        // Create a store of objects
        db.createObjectStore('measures', { keyPath: 'id' });
      }
    });

    // return db.add('measures', data.data.data);
    return db;
    //db.close();
  }

  async add(url, requestType, data) {
    if (!this.db) {
      this.db = await this.InitDatabase();
    }

    let obj = data.data.data;
    let store = url.replace('/', '');
    switch (requestType) {
      case 'GET':
        this.db.get(store, obj.id);
        break;
      case 'POST':
        this.db.add(store, obj);
        break;
      case 'PUT':
        this.db.put(store, obj);
        break;
      case 'DELETE':
        this.db.delete(store, obj.id);
        break;
    }
  }
}
