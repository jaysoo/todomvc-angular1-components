import uuid from 'node-uuid';
import _ from 'lodash';

class TodoService {
  constructor($q) {
    this._todos = [];
    this.q = $q;
  }

  all() {
    return this._todos;
  }

  create(todo) {
    const todo = _.extend({
      id: uuid.v4()
    }, todo);

    this._todos.push(todo);
  }

  update(todo) {
    const stored = _.find(this._todos, {id: todo.id});
    _.extend(stored, todo);
  }

  destroy(todo) {
    const toDestroy = _.find(this._todos, {id: todo.id});
    this._todos = _.without(todos, toDestroy);
  }
}

export default TodoService;