import { API_URL } from "../constants/constants";

class API {
  url = API_URL;

  //Получение всех контактов
  async getContacts() {
    return await fetch(this.url).then((res) => res.json());
  }

  //Добавление нового контакта
  async setContact(data) {
    return await fetch(this.url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json());
  }

  //Удаление контакта по id
  async deleteContact(id) {
    const url = this.url + "/" + id;
    return await fetch(url, {
      method: "delete",
    }).then((res) => res.json());
  }

  //Редактирование контакта по id
  async updateContact(data) {
    const url = this.url + "/" + data.id;
    return await fetch(url, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json());
  }
}

export default new API();
