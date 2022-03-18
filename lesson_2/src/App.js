import "./App.css";
import TodoList from "./components/TodoList/TodoList.js";
import Input from "./components/Input/Input.js";
import React from "react";
import todo from "./resource/todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: todo.list,
    };

    this.transitTask = this.transitTask.bind(this);
    this.removeTaskParent = this.removeTaskParent.bind(this);
  }

  transitTask(task) {
    if (task) {
      var newTaskObj = {
        id: (this.state.taskList.length + 1).toString(),
        title: task,
        completed: false,
      };

      var tempArr = this.state.taskList;
      tempArr.push(newTaskObj);
      console.log(tempArr);
      this.setState({
        taskList: tempArr,
      });
    } else {
      alert("Завдання не може бути пустим!");
    }
  }

  removeTaskParent(taskId) {
    console.log(taskId);
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id !== taskId),
    });
  }

  render() {
    const { taskList } = this.state;
    return (
      <>
        <h1>Добавить задание:</h1>
        <Input addTask={this.transitTask}></Input>
        <h1>Список заданий:</h1>
        <TodoList
          taskList={taskList}
          parentHandleRemove={this.removeTaskParent}
        ></TodoList>
      </>
    );
  }
}

export default App;
