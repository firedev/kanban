import React from 'react';
import Notes from './Notes';

class App extends React.Component {
  render() {
    var notes = [{
      task: 'Crush'
    }, {
      task: 'Kill'
    }, {
      task: 'Destroy'
    }];

    return (
      <div>
        <h1>Notes</h1>
        <Notes notes={notes}/>
      </div>
    );
  }
}

export default App;
