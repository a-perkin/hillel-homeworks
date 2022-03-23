import React from "react";
import API from "../../api/service";
import "./ContactTable.css";

export default class ContactTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    const promise = API.getContacts();
    promise.then((res) => this.setState({ contacts: res }));
  }

  deleteContact(id) {
    const promise = API.deleteContact(id);
    promise.then((res) =>
      this.setState({
        contacts: this.state.contacts.filter((res) => res.id !== id),
      })
    );
  }

  // editContact(contact) {
  //   this.props.passEditData(contact)
  // }

  render() {
    const { contacts } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th style={{ display: "none" }}>id</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr key={item.id}>
              <td style={{ display: "none" }}>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.sername}</td>
              <td>{item.phone}</td>
              <th>
                <button onClick={this.props.passEditData.bind(this, item)}>
                  Редактировать
                </button>
              </th>
              <th>
                <button onClick={() => this.deleteContact(item.id)}>
                  Удалить
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
