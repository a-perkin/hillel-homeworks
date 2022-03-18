import TodoItem from "../TodoItem/TodoItem.js";
import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(taskId) {
    this.props.parentHandleRemove(taskId);
  }

  render() {
    const { taskList } = this.props;
    return (
      <div>
        <ul className="list">
          {taskList.map((task, i) => (
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
