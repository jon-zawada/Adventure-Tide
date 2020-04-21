import React, {useState} from 'react';


const JournalEntry = ({ entry, updateEntry }) => {
  const [updateClicked, setUpdateClicked] = useState(false);
  const [value, updateValue] = useState(entry.entry);

  return (
    <div className="entries">
      <div>
        <div className="locationDate">
          {`${entry.location} ${entry.date.slice(5, 7)}/${entry.date.slice(8, 10)}/${entry.date.slice(0, 4)}:`}
        </div>
        {!updateClicked ? <div className="entryScript">
          {value}
        </div> : <div><textarea value={value} onChange={(e) => {updateValue(e.target.value)}}></textarea><button>submit</button></div>}
      </div>
      <button className="updateBtn" 
      type="button" onClick={() => {
        setUpdateClicked(!updateClicked);
        if(updateClicked) {
          updateEntry(value, entry.id);
        }
        }}>update</button>
    </div>
  );
};

export default JournalEntry;
