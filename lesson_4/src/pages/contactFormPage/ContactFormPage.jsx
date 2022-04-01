import ContactForm from "../../components/contactForm/ContactForm";

export default function ContactFormPage(props) {
  return (
    <ContactForm
      saveForm={props.saveForm}
      editData={props.editData}
      cancel={props.cancel}
    />
  );
}
