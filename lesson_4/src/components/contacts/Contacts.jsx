import { Component, useEffect, useState } from "react";
import API from "../../api/service";
import ContactListPage from "../../pages/contactListPage/ContactListPage";
import ContactFormPage from "../../pages/contactFormPage/ContactFormPage";

export default function Contacts() {
  const [activePage, setActivePage] = useState("list");
  const [editData, setEditData] = useState({});
  const [contacts, setContacts] = useState([]);

  const resetEditData = () => {
    setEditData({});
  };

  const passEditData = (contact) => {
    setEditData(contact);
    setActivePage("form");
  };

  const deleteContact = (id) => {
    const promise = API.deleteContact(id);
    promise.then((res) => setContacts(contacts.filter((res) => res.id !== id)));
  };

  const saveForm = (contact) => {
    if (contact.id) {
      let promise = API.updateContact(contact);
      promise.then((res) => {
        let updateContacts = contacts.map((item) =>
          item.id === contact.id ? contact : item
        );
        setContacts(updateContacts);
      });
    } else {
      let promise = API.setContact(contact);
      promise.then((res) => {
        let updateContacts = [...contacts];
        updateContacts.push(res);
        setContacts(updateContacts);
      });
    }
    closeForm();
  };

  const closeForm = () => {
    setActivePage("list");
    resetEditData();
  };

  const setListPage = () => {
    setActivePage("form");
  };

  useEffect(() => {
    const promise = API.getContacts();
    promise.then((res) => setContacts(res));
  }, []);

  const renderPage = (page) => {
    switch (page) {
      case "form":
        return (
          <ContactFormPage
            saveForm={saveForm}
            cancel={closeForm}
            editData={editData}
          ></ContactFormPage>
        );
      default:
        return (
          <ContactListPage
            contacts={contacts}
            onButtonClick={setListPage}
            passEditData={passEditData}
            deleteContact={deleteContact}
            buttonTitle="Добавить контакт"
          ></ContactListPage>
        );
    }
  };

  return renderPage(activePage);
}
