import JSONAPISerializer from '@ember-data/serializer/json-api';
import { camelize } from '@ember/string';
import Store from '@ember-data/store';


export default class Application extends JSONAPISerializer {
  keyForAttribute(key: string) {
    return camelize(key);
  }

  normalizeResponse(store: Store, primaryModelClass: any, payload:any, id:string, requestType:string) {
    if (Array.isArray(payload)) {
      payload = payload.map(obj => {
        let id = obj.id;
        delete obj.id;

        let attributes = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && key !== "type") {
            attributes[key] = obj[key];
          }
        }
        
        return {
          id,
          attributes,
          type: obj.type || primaryModelClass.name
        }
      });
    }

    payload = { data: payload };
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

  serialize(snapshot: any, options: Object) {
    return Object.assign(snapshot.attributes(), { id: snapshot.id, type: snapshot.modelName });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application': Application;
  }
}
