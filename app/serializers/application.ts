import JSONAPISerializer from '@ember-data/serializer/json-api';
import { dasherize } from '@ember/string';
import StoreService from 'ember-data/store';


export default class Application extends JSONAPISerializer {
  normalizeResponse(store: StoreService, primaryModelClass: any, payload:any, id:string, requestType:string) {
    if (Array.isArray(payload)) {
      payload = payload.map(obj => {
        let id = obj.id;
        delete obj.id;

        let attributes = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            attributes[dasherize(key)] = obj[key];
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

}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'application': Application;
  }
}
