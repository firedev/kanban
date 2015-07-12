import React from 'react';

class Note extends React.Component {
  constructor(props: {
    value: string;
    onEdit: Function;
  }) {
    super(props);
    this.state = {
      edited: false
    };
  }

  render () {
    const { value, onEdit, ...props } = this.props;
    var edited = this.state.edited;

    return (
      <div {...props}>
        {edited
        ? <input autoFocus
            type='text'
            defaultValue={value}
            onBlur={(e) => this.finishEdit(e)}
            onKeyPress={(e) => this.checkEnter(e)}
          />
        :
          <div>
            <span onClick={() => this.edit()}>
              {value}
            </span>
          </div>
        }
      </div>
    );
  }

  edit() {
    this.setState({ edited: true });
  }

  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    this.props.onEdit(e.target.value);
    this.setState({ edited: false });
  }
}

export default Note;
