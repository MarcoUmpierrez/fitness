import DS from 'ember-data';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  /*  
    @method findRecord
    @param {DS.Store} store
    @param {DS.Model} type
    @param {String} id
    @param {DS.Snapshot} snapshot
    @return {Promise} promise
  */
  findRecord(store, type, id, snapshot) {
    let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
    let query = this.buildQuery(snapshot);

    return this.ajax(url, 'GET', { data: query });
  }

  /*
    @method findAll
    @param {DS.Store} store
    @param {DS.Model} type
    @param {String} sinceToken
    @param {DS.SnapshotRecordArray} snapshotRecordArray
    @return {Promise} promise
  */
  findAll(store, type, sinceToken, snapshotRecordArray) {
    let query = this.buildQuery(snapshotRecordArray);
    let url = this.buildURL(
      type.modelName,
      null,
      snapshotRecordArray,
      'findAll'
    );

    if (sinceToken) {
      query.since = sinceToken;
    }

    return this.ajax(url, 'GET', { data: query });
  }

  /*
    @method query
    @param {DS.Store} store
    @param {DS.Model} type
    @param {Object} query
    @return {Promise} promise
  */
  query(store, type, query) {
    let url = this.buildURL(type.modelName, null, null, 'query', query);

    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }

    return this.ajax(url, 'GET', { data: query });
  }

  /*
    @method queryRecord
    @param {DS.Store} store
    @param {DS.Model} type
    @param {Object} query
    @return {Promise} promise
  */
  queryRecord(store, type, query) {
    let url = this.buildURL(type.modelName, null, null, 'queryRecord', query);

    if (this.sortQueryParams) {
      query = this.sortQueryParams(query);
    }

    return this.ajax(url, 'GET', { data: query });
  }

  /*
    @method findMany
    @param {DS.Store} store
    @param {DS.Model} type
    @param {Array} ids
    @param {Array} snapshots
    @return {Promise} promise
  */
  findMany(store, type, ids, snapshots) {
    let url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
    return this.ajax(url, 'GET', { data: { ids: ids } });
  }

  /*
    @method findHasMany
    @param {DS.Store} store
    @param {DS.Snapshot} snapshot
    @param {String} url
    @param {Object} relationship meta object describing the relationship
    @return {Promise} promise
  */
  findHasMany(store, snapshot, url, relationship) {
    let id = snapshot.id;
    let type = snapshot.modelName;

    url = this.urlPrefix(url, this.buildURL(type, id, snapshot, 'findHasMany'));

    return this.ajax(url, 'GET');
  }

  /*
    @method findBelongsTo
    @param {DS.Store} store
    @param {DS.Snapshot} snapshot
    @param {String} url
    @param {Object} relationship meta object describing the relationship
    @return {Promise} promise
  */
  findBelongsTo(store, snapshot, url, relationship) {
    let id = snapshot.id;
    let type = snapshot.modelName;

    url = this.urlPrefix(
      url,
      this.buildURL(type, id, snapshot, 'findBelongsTo')
    );
    return this.ajax(url, 'GET');
  }

  /*
    @method createRecord
    @param {DS.Store} store
    @param {DS.Model} type
    @param {DS.Snapshot} snapshot
    @return {Promise} promise
  */
  createRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    let url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    return this.ajax(url, 'POST', { data: data });
  }

  /*
    @method updateRecord
    @param {DS.Store} store
    @param {DS.Model} type
    @param {DS.Snapshot} snapshot
    @return {Promise} promise
  */
  updateRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    let id = snapshot.id;
    let url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PUT', { data: data });
  }

  /*
    @method deleteRecord
    @param {DS.Store} store
    @param {DS.Model} type
    @param {DS.Snapshot} snapshot
    @return {Promise} promise
  */
  deleteRecord(store, type, snapshot) {
    let id = snapshot.id;

    return this.ajax(
      this.buildURL(type.modelName, id, snapshot, 'deleteRecord'),
      'DELETE'
    );
  }
}
