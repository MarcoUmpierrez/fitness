import DS from 'ember-data';
import { v4 } from 'uuid';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  @service storage;

  ajax(url, requestType, data) {
    return this.storage.add(url, requestType, data);
  }

  generateIdForRecord(store, inputProperties) {
    return v4();
  }
}
