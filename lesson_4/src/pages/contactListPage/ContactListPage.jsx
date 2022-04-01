import React from "react";
import ContactTable from "../../components/contactTable/ContactTable";
import NewButton from "../../components/newButton/NewButton";

export default function ContactListPage(props) {
  return (
    <>
      <ContactTable
        passEditData={props.passEditData}
        contacts={props.contacts}
        deleteContact={props.deleteContact}
      />
      <NewButton
        onButtonClick={props.onButtonClick}
        title={props.buttonTitle}
      ></NewButton>
    </>
  );
}
