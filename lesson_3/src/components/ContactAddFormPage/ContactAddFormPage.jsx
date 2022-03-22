import React from "react";
import API from "../../api/service";

export default class ContactAddFormPage extends React.Component {
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
  }

  

  save(form) {
    API.setContact(form).then(() => this.props.save());
    console.log(form);
  }

  handleChange(event) {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value,
      },
    }));
  }

  componentDidMount() {
    console.log("ContactAddFormPage");
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
          <input type="button" value="Отмена" onClick={this.props.cancel} />
        </form>
      </>
    );
  }
}
