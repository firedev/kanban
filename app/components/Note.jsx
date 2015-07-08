import React from 'react';

class Note extends React.Component {
  render () {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default Note;
