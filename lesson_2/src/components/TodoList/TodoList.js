import todo from "../../resource/todo.js";
import TodoItem from "../TodoItem/TodoItem.js";
import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: todo.list,
    };
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(id) {
    this.setState({
      list: this.state.list.filter((task) => task.id !== id),
    });
  }

  render() {
    const { list } = this.state;
    const { task } = this.props;
    return (
      <div>
        <span>New task: {task}</span>
        <ul className="list">
          {list.map((task, i) => (
            <TodoItem
              key={task.id}
              taskId={task.id}
              title={task.title}
              completed={task.completed}
              handleRemove={this.removeTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
