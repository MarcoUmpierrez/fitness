import Service from '@ember/service';
import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { debug } from '@ember/debug';

export default class StorageService extends Service {
  async InitDatabase() {
    const db = await openDB('fitness', 1, {
      upgrade(db) {
        // Create a store of objects
        db.createObjectStore('measures', { keyPath: 'id' });
      }
    });

    return db;
  }

  destroy() {
    if (this.db) {
      this.db.close();
    }

    super.destroy();
  }

  async request(url, requestType, data) {
    if (!this.db) {
      this.db = await this.InitDatabase();
    }

    let obj = data.data.data;
    let splittedURL = url.split('/');
    let store, objId;

    if (splittedURL) {
      if (splittedURL.length > 1) {
        store = splittedURL[1];
      }

      if (splittedURL.length > 2) {
        objId = splittedURL[2];
      }
    } else {
      debug(`No handler for URL ${url}`);
      return;
    }

    switch (requestType) {
      case 'GET':
        return this.getRequest(store, objId);
      case 'POST':
        return this.postRequest(store, obj);
      case 'PUT':
        return this.putRequest(store, obj);
      case 'DELETE':
        return this.deleteRequest(store, objId);
    }
  }

  getRequest(store, objId) {
    if (objId) {
      return this.db.get(store, objId);
    }
    else {
      return this.db.getAll(store);
    }
  }

  postRequest(store, obj) {
    return this.db.add(store, obj);
  }

  putRequest(store, obj) {
    return this.db.put(store, obj);
  }

  deleteRequest(store, objId) {
    return this.db.delete(store, objId);
  }
}
