import React from "react";
import API from "../../api/service";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        sername: "",
        phone: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  save(contact) {
    const promise = API.setContact(contact);
    promise.then(() => this.props.setPage("list"));
  }

  cancel() {
    this.props.setPage("list");
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
