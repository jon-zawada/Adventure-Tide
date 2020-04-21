const db = require('../db/index.js');

const getJournalEntries = (callback) => {
  db.query('SELECT * FROM JournalEntries', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const updateEntry = (entry, callback) => {
  // console.log(entry);
  db.query(`UPDATE JournalEntries Set entry = '${entry.entry}' WHERE id = ${entry.id}`, (err, data) => {
    if (err) {
      callback(err);
      console.log(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { getJournalEntries, updateEntry };
