import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import persist from '../decorators/persist';
import connect from '../decorators/connect';
import storage from '../libs/storage';

const noteStorageName = noteStorageName;

class App extends React.Component {
  constructor(props: {
    notes: Array;
  }) {
    super(props);
  }

  render() {
    var notes = this.props.notes;
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.addItem.bind(this)}>+</button>
        <Notes notes={notes}
          onDelete={this.itemDeleted.bind(this)}
          onEdit={this.itemEdited.bind(this)}/>
      </div>
    );
  }

  addItem() {
    NoteActions.create('New task');
  }

  itemEdited(id, task) {
    if(task) {
      NoteActions.update({id, task});
    } else {
      NoteActions.remove(id);
    }
  }

  itemDeleted(id) {
    NoteActions.remove(id);
  }

}

export default persist(
  connect(App, NoteStore),
  storage,
  noteStorageName,
  () => NoteStore.getState(),
  NoteActions.init()
);
