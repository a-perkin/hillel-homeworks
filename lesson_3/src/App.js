import React from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "",
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(pageName) {
    this.setState({ activePage: pageName });
  }

  renderPage(page) {
    switch (page) {
      case "form":
        return <ContactFormPage setPage={this.setPage}></ContactFormPage>;
      default:
        return <ContactListPage setPage={this.setPage}></ContactListPage>;
    }
  }

  render() {
    const { activePage } = this.state;
    return this.renderPage(activePage);
  }
}
