const mongoose = require('mongoose');

const deleteDatabase = async (date) => {
    try {
      
      await mongoose.connection.db.dropDatabase();
      // console.log('Database deleted successfully.');
      return {status: 'success', message: 'Database deleted successfully.'};
    } catch (error) {
      // console.error('Error deleting database:', error.message);
      return {status: 'error', message: 'Error deleting database.'};
    } finally {
      mongoose.connection.close();
    }
  };
  
  module.exports = deleteDatabase ;