import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleRemove(id) {
    this.props._handleRemove(id);
  }

  render() {
    console.log(this.props);
    return (
      <li
        className={
          (this.props.Complited ? "complited" : "notComplited") + " " + "item"
        }
      >
        <span>{this.props.Title}</span>
        <button onClick={this._handleRemove.bind(this, this.props.TaskID)}>
          remove
        </button>
      </li>
    );
  }
}

export default TodoItem;
