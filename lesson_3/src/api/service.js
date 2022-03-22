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
        'Content-Type': 'application/json'        
      }
    }).then((res) => res.json());
  }

  //Редактирование контакта по id
  async updateContact(id) {
    // return await fetch(this.url).then((res) => res.json());
  }
}

export default new API();
