import React from 'react';
import Note from './Note';

class Notes extends React.Component {
  constructor(props: {
    notes: Array;
    onEdit: Function;
    onDelete: Function;
  }) {
    super(props);
  }

  render() {
    return (
      <ul className="notes">
        {this.props.notes.map((note, i) =>
          <li className="note" key={'note' + i}>
            <Note
              value={note.task}
              onEdit={this.props.onEdit.bind(null, i)}
              onDelete={this.props.onDelete.bind(null, i)}
            />
          </li>
        )}
      </ul>
    );
  }
}

export default Notes;
