import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={() => this.addItem()}>+</button>
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

  itemDeleted(i) {
    var notes = this.state.notes;
    notes = notes.slice(0, i).concat(notes.slice(i + 1));
    this.setState({ notes: notes });
  }

}

export default App;
