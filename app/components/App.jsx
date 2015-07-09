import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import storage from '../libs/storage';

class App extends React.Component {
  constructor(props) {
    super(props);
    NoteActions.init(storage.get('notes'));
    this.state = NoteStore.getState();
    this.storeChanged = this.storeChanged.bind(this);
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    storage.set('notes', state);
    this.setState(NoteStore.getState());
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={this.addItem.bind(this)}>+</button>
        <Notes notes={this.state.notes}
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

export default App;
