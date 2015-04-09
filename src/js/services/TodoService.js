import uuid from 'node-uuid';
import _ from 'lodash';

export default class TodoService {
  constructor(todoStorage) {
    this._storage = todoStorage;

    this._todos = this._storage.read();
  }

  all() {
    return this._todos;
  }

  create(todo) {
    const todo = _.extend({
      id: uuid.v4()
    }, todo);

    this._todos.push(todo);

    this._updateStorage();
  }

  update(todo) {
    const stored = _.find(this._todos, {id: todo.id});

    _.extend(stored, todo);

    this._updateStorage();
  }

  destroy(todo) {
    const toDestroy = _.find(this._todos, {id: todo.id});

    this._todos = _.without(this._todos, toDestroy);

    this._updateStorage();
  }

  _updateStorage() {
    this._storage.write(this._todos);
  }
}
