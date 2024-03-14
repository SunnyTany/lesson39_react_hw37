import React from 'react'

class ControledInputClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  
  onChangeHandler(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentDidMount() {
    this.setState({
      value: ""
    });
  }

  componentDidUpdate() {
    console.log(this.state.value);
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <input type="text" value={this.state.value} placeholder={this.state.value} onChange={this.onChangeHandler} />
    );
  }
}

export default ControledInputClass