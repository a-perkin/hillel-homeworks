import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

export default class ContactFormPage extends React.Component {
  render() {
    return <ContactForm setPage={this.props.setPage} />;
  }
}
