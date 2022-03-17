import "./App.css";
import TodoList from "./components/TodoList/TodoList.js";
import Input from "./components/Input/Input.js";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempTask: "",
    };

    this.transitTask = this.transitTask.bind(this);
  }

  transitTask(task) {
    this.setState({
      tempTask: task,
    });
  }

  render() {
    const { tempTask } = this.state;
    return (
      <>
        <h1>Добавить задание:</h1>
        <Input addTask={this.transitTask}></Input>
        <h1>Список заданий:</h1>
        <TodoList task={tempTask}></TodoList>
      </>
    );
  }
}

export default App;
