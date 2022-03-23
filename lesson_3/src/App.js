import React from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "",
      editData: {},
    };

    this.setPage = this.setPage.bind(this);
    this.passEditData = this.passEditData.bind(this);
    this.resetEditData = this.resetEditData.bind(this);
  }

  setPage(pageName) {
    this.setState({ activePage: pageName });
  }

  resetEditData() {
    this.setState({ editData: {} });
  }

  passEditData(contact) {
    this.setState({ editData: contact });
    this.setPage("form");
  }

  renderPage(page) {
    switch (page) {
      case "form":
        return (
          <ContactFormPage
            setPage={this.setPage}
            editData={this.state.editData}
            resetEditData={this.resetEditData}
          ></ContactFormPage>
        );
      default:
        return (
          <ContactListPage
            setPage={this.setPage}
            passEditData={this.passEditData}
          ></ContactListPage>
        );
    }
  }

  render() {
    const { activePage } = this.state;
    return this.renderPage(activePage);
  }
}
