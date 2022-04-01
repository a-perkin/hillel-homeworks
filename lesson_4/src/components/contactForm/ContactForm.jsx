import { Component, useEffect, useState } from "react";

export default function ContactForm(props) {
  const formObj = () => {
    return {
      id: "",
      name: "",
      surname: "",
      phone: "",
    };
  };
  const [form, setForm] = useState(formObj);

  useEffect(() => {
    if (Object.keys(props.editData).length !== 0) {
      setForm(props.editData);
    }
  }, [props.editData]);

  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const { name, surname, phone } = form;
  return (
    <>
      <form>
        <label>
          Имя:
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        <label>
          Фамилия:
          <input
            type="text"
            value={surname}
            name="surname"
            onChange={handleChange}
          />
        </label>
        <label>
          Телефон:
          <input
            type="phone"
            value={phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        <input
          type="button"
          value="Сохранить"
          onClick={() => props.saveForm(form)}
        />
        <input type="button" value="Отмена" onClick={props.cancel} />
      </form>
    </>
  );
}
