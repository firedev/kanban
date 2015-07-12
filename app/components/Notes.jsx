import React from 'react';
import Note from './Note';

class Notes extends React.Component {
  constructor(props: {
    items: Array;
    onEdit: Function;
  }) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <ul className="notes">
        {this.props.items.map((note, i) =>
          <li className="note" key={'note' + i}>
            <Note
              value={note.task}
              onEdit={this.props.onEdit.bind(null, i)}
            />
          </li>
        )}
      </ul>
    );
  }
}

export default Notes;
