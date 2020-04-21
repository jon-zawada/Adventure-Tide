/* eslint-disable no-unused-vars */
const Models = require('./Models.js');

const getJournalEntries = (req, res) => {
  Models.getJournalEntries((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const updateEntry = (req, res) => {
  let entry = req.body;
  // console.log(entry);
  // eslint-disable-next-line no-unused-vars
  Models.updateEntry(entry, (err, data) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.end();
    }
  });
};

const postDefault = (req, res) => {
  let entry = req.body;
  Models.postDefault(entry, (err, data) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.end();
    }
  });
};

module.exports = { getJournalEntries, updateEntry, postDefault };
