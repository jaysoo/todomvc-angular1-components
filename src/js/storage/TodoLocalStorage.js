export default class TodoLocalStorage {
  read() {
    return JSON.parse(window.localStorage.getItem('todos')) || [];
  }

  write(todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
}