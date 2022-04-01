import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "default_",
    };
    this.updateValue = this.updateValue.bind(this);
    this.updateValuePrevState = this.updateValuePrevState.bind(this);
  }

  updateValue() {
    this.setState({
      value: this.state.value + "not_prev",
    });
  }

  updateValuePrevState() {
    this.setState((prevState) => ({
      value: prevState.value + "prev",
    }));
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div>{value}</div> <button onClick={this.updateValue}>not_prev</button>{" "}
        <button onClick={this.updateValuePrevState}>prev</button>
      </>
    );
  }
}

export default Main;
