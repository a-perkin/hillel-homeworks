import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  }

  addTask(task) {
    console.log("task: " + this.state.inputValue);
    this.props.addTask(task);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addTask.bind(this, inputValue)}>
          add
        </button>
      </div>
    );
  }
}

export default Input;
