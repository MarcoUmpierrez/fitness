import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';
import StoreService from 'ember-data/store';
import DS from 'ember-data';


export default class Application extends JSONAPISerializer {
  keyForAttribute(key: string) {
    return camelize(key);
  }

  normalizeResponse(store: StoreService, primaryModelClass: any, payload:any, id:string, requestType:string) {
    if (Array.isArray(payload)) {
      payload = payload.map(obj => {
        let id = obj.id;
        delete obj.id;

        let attributes = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            attributes[key] = obj[key];
          }
        }

        return {
          id,
          attributes,
          type: primaryModelClass.name
        }
      });
    }

    payload = { data: payload };
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

  serialize(snapshot: DS.Snapshot, options: Object) {
    return Object.assign(snapshot.attributes(), { id: snapshot.id, type: snapshot.modelName });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application': Application;
  }
}
