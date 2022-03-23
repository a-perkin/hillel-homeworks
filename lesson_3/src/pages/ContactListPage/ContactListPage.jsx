import React from "react";
import ContactTable from "../../components/ContactTable/ContactTable";

export default class ContactListPage extends React.Component {
  render() {
    return (
      <>
        <ContactTable passEditData={this.props.passEditData}/>
        <button onClick={this.props.setPage.bind(this, "form")}>
          Добавить контакт
        </button>
      </>
    );
  }
}
