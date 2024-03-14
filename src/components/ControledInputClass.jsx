import React from'react'

class ControledInputClass extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.updateValue = this.updateValue.bind(this);

  }
  onChangeHandler(e) {
    this.setState({
      value: e.target.value
    });
    console.log(this.state.value);
  }
  updateValue(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder={this.state.value} onChange={this.onChangeHandler} />
      </div>
    );
  }
}

export default ControledInputClass