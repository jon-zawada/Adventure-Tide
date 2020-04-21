/* eslint-disable arrow-parens */
import React from 'react';
import JournalEntry from './JournalEntry.jsx'

const Journal = ({ journalEntries, updateEntry }) => (
  <div className="journalList">
    {journalEntries.map(entry => (
      <JournalEntry entry={entry} key={entry.id} updateEntry={updateEntry} />
    ))}
  </div>
);

export default Journal;
