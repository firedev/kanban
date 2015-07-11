import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import persist from '../decorators/persist';
import storage from '../libs/storage';

const noteStorageName = 'notes';

@persist(storage, noteStorageName, () => NoteStore.getState())

export default class App extends React.Component {
  constructor(props) {
    super(props);
    NoteActions.init(storage.get(noteStorageName));
  }

  render() {
    var notes = this.props.notes;
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.addItem.bind(this)}>+</button>
        <AltContainer stores={[NoteStore]}
          inject={{notes: () => NoteStore.getState().notes || [] }}
        >
          <Notes notes={notes}
            onDelete={this.itemDeleted.bind(this)}
            onEdit={this.itemEdited.bind(this)}/>
        </AltContainer>
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
