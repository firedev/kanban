import React from 'react';
import Note from './Note';

class App extends React.Component {
  render() {
    var notes = [{
      task: 'Crush'
    }, {
      task: 'Kill'
    }, {
      task: 'Destroy'
    }];

    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map((note, i) =>
            <li key={'note' + i}>
              <Note value={note.task} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
