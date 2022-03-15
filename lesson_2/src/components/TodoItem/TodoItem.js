import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleRemove(id) {
    this.props._handleRemove(id);
  }

  render() {
    const { TaskID, Title, Complited } = this.props;
    return (
      <li className={(Complited ? "complited" : "notComplited") + " " + "item"}>
        <span>{Title}</span>
        <button onClick={this._handleRemove.bind(this, TaskID)}>remove</button>
      </li>
    );
  }
}

export default TodoItem;