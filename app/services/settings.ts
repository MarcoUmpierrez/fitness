import Service from '@ember/service';
import { openDB, IDBPDatabase } from 'idb';

export default class SettingsService extends Service {
  version!: number;
  store!: string;
  dbName!: string;

  constructor() {
    super(...arguments);
    this.version = 1;
    this.store = 'user';
    this.dbName = 'SettingsStorage';
  }

  async save(user: UserSettings) {
    let db = await this.openDatabase();
    let objectStore = await db
      .transaction(this.store, 'readwrite')
      .objectStore(this.store);

    let record = await objectStore.get(user.id);
    if (record) {
      await objectStore.put(user);
    } else {
      await objectStore.add(user);
    }

    db.close();
  }

  async load(id: string): Promise<UserSettings | null> {
    let db = await this.openDatabase();
    let record: UserSettings = await db
      .transaction(this.store)
      .objectStore(this.store)
      .get(id);
    db.close();
    if (record) {
      return record;
    } else {
      return null;
    }
  }

  openDatabase(): Promise<IDBPDatabase> {
    const store = this.store;
    return openDB(this.dbName, this.version, {
      upgrade(db) {
        db.createObjectStore(store, { keyPath: 'id' });
      }
    });
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'settings': SettingsService;
  }
}