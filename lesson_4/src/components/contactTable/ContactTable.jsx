import "./ContactTable.css";

export default function ContactForm(props) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ display: "none" }}>id</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Телефон</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((item) => (
          <tr key={item.id}>
            <td style={{ display: "none" }}>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.phone}</td>
            <th>
              <button onClick={() => props.passEditData(item)}>
                Редактировать
              </button>
            </th>
            <th>
              <button onClick={() => props.deleteContact(item.id)}>
                Удалить
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
