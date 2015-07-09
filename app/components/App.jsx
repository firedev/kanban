import React from 'react';
import Notes from './Notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { task: 'Crush' },
        { task: 'Kill1' },
        { task: 'Destroy' }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={ () => this.addNote() }>
          Add New
        </button>
        <Notes notes={ this.state.notes }
          onEdit={(i, task) => this.itemEdited(i, task)}/>
        <div>
        </div>
      </div>
    );
  }

  addNote() {
    this.setState({
     notes: [{ task: 'new' }].concat(this.state.notes)
    });
  }

  itemEdited(i, task) {
    var notes = this.state.notes;
    if(task) {
      notes[i].task = task;
    } else {
      notes = notes.slice(0, i).concat(notes.slice(i + 1));
    }
    this.setState({
      notes: notes
    });
  }
}

export default App;
