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

  addNote() {
    this.setState({
     notes: [{ task: 'new' }].concat(this.state.notes)
    });
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={ () => this.addNote() }>
          Add New
        </button>
        <Notes notes={ this.state.notes }/>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
