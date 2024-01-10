const mongoose = require("mongoose");

const backupDatabase = async () => {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const backupData = {};
  
    for (const collection of collections) {
      const collectionName = collection.name;
      const collectionData = await mongoose.connection.db.collection(collectionName).find().toArray();
      backupData[collectionName] = collectionData;
    }
  
    // console.log(backupData);
    return backupData;
  };
  
module.exports = backupDatabase ;