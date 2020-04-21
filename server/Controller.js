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
  Models.updateEntry(entry, (err, data) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.end();
    }
  });
};

module.exports = { getJournalEntries, updateEntry };
