import React from "react";
import API from "../../api/service";

export default class ContactListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    const contacts = API.getContacts().then((res) =>
      this.setState({ contacts: res }, console.log(res))
    );

    console.log("ContactListPage");
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ul>
          {contacts.map((item, i) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
