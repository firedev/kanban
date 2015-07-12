import React from 'react';
import Editable from './Editable';

class Notes extends React.Component {
  constructor(props: {
    items: Array;
    onEdit: Function;
  }) {
    super(props);
  }

  render() {
    return (
      <ul className="notes">
        {this.props.items.map((note, i) =>
          <li className="note" key={'note' + i}>
            <Editable
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
