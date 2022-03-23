import React from "react";
import API from "../../api/service";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: "",
        name: "",
        sername: "",
        phone: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.editData).length !== 0) {
      this.setState({ form: this.props.editData });
    }
  }

  save(contact) {
    let promise = contact.id
      ? API.updateContact(contact)
      : API.setContact(contact);

    promise.then(() => this.props.setPage("list"), this.props.resetEditData());
  }

  cancel() {
    this.props.setPage("list");
    this.props.resetEditData();
  }

  handleChange(event) {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value,
      },
    }));
  }

  render() {
    const { form } = this.state;
    const { name, sername, phone } = form;
    return (
      <>
        <form>
          <label>
            Имя:
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Фамилия:
            <input
              type="text"
              value={sername}
              name="sername"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Телефон:
            <input
              type="phone"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
          </label>
          <input
            type="button"
            value="Сохранить"
            onClick={() => this.save(form)}
          />
          <input type="button" value="Отмена" onClick={this.cancel} />
        </form>
      </>
    );
  }
}
