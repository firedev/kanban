import React from 'react';
import Note from './Note';

class Notes extends React.Component {
  render() {
    return (
      <ul className="notes">
        {this.props.notes.map((note, i) =>
          <li className="note" key={'note' + i}>
            <Note value={note.task} />
          </li>
        )}
      </ul>
    );
  }
}

export default Notes;
