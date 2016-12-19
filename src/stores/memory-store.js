function memoryStore() {
  const records = {};

  return {
    create: (record) => {
      records[record.id] = record;

      return record;
    },
    find: (id) => {
      return records[id];
    }
  }
}

module.exports = memoryStore;
