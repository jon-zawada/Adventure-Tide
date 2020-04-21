/* eslint-disable arrow-parens */
import React from 'react';
import JournalEntry from './JournalEntry.jsx';

const Journal = ({ journalEntries, updateEntry, homePage }) => (
  <div className="journalList">
    {journalEntries.map(entry => (
      <JournalEntry entry={entry} key={entry.id} updateEntry={updateEntry} />
    ))}
    <div id="homePage">
      <button className="homePageBtn" type="button" onClick={(event) => { homePage(event); }}>Home Page</button>
    </div>
  </div>
);

export default Journal;
