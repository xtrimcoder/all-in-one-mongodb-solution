const mongoose = require('mongoose');

const restoreDatabase = async (backupData) => {
    for (const collectionName in backupData) {
      const collectionData = backupData[collectionName];
      await mongoose.connection.db.collection(collectionName).insertMany(collectionData);
    }
  };

module.exports = restoreDatabase ;