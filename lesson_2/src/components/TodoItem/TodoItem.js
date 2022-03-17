import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  handleRemove(id) {
    this.props.handleRemove(id);
  }

  render() {
    const { taskId, title, completed } = this.props;
    return (
      <li className={(completed ? "complited" : "notComplited") + " item"}>
        <span>{title}</span>
        <button onClick={this.handleRemove.bind(this, taskId)}>remove</button>
      </li>
    );
  }
}

export default TodoItem;
