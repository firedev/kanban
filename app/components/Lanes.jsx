import React from 'react';

export default class Lanes extends React.Component {
  constructor(props: {
    items: Array;
  }) {
    super(props);
  }

  render() {
    return (
      <div className="lanes">
        ... Lanes ...
      </div>
    );
  }
}
