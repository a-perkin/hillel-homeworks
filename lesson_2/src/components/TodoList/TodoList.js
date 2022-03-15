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
    return (
      <div>
        <ul className="list">
          <p>
            {list.map((task, i) => (
              <TodoItem
                key={task.id}
                TaskID={task.id}
                Title={task.title}
                Complited={task.completed}
                _handleRemove={this.removeTask}
              />
            ))}
          </p>
        </ul>
      </div>
    );
  }
}

export default TodoList;
