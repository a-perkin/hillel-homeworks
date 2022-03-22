import React from "react";
import ContactListPage from "./components/ContactListPage/ContactListPage";
import ContactAddFormPage from "./components/ContactAddFormPage/ContactAddFormPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAddContactForm = this.showAddContactForm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  state = {
    showForm: false,
  };

  save() {
    this.setState({ showForm: false });
  }

  cancel() {
    this.setState({ showForm: false });
  }

  showAddContactForm() {
    this.setState({ showForm: true });
  }

  render() {
    const showForm = this.state.showForm;
    const contactAddFormPage = (
      <ContactAddFormPage
        save={this.save}
        cancel={this.cancel}
      ></ContactAddFormPage>
    );
    const contactListPage = (
      <ContactListPage
        showAddContactForm={this.showAddContactForm}
      ></ContactListPage>
    );

    return <>{showForm ? contactAddFormPage : contactListPage}</>;
  }
}
