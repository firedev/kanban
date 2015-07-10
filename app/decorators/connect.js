import React from 'react';

export default (Component, store) => {
  return class Connect extends React.Component {
    constructor(props) {
      super(props);
      this.state = store.getState();
      this.storeChanged = this.storeChanged.bind(this);
    }

    componentDidMount() {
      store.listen(this.storeChanged);
    }

    componentWillUnmount() {
      store.unlisten(this.storeChanged);
    }

    storeChanged() {
      this.setState(store.getState());
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};
