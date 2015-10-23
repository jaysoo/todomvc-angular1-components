const todoList = () => ({
  scope: {
    todos: '=',
    onUpdate: '&',
    onSave: '&',
    onDestroy: '&'
  },
  template: `
    <ul class="todo-list">
      <li ng-repeat="todo in todoList.todos track by todo.id">
        <todo-item todo="todo"
                   on-update="todoList.handleUpdate(todo)"
                   on-save="todoList.handleSave(todo)"
                   on-destroy="todoList.handleDestroy(todo)" />
      </li>
    </ul>
  `,
  controller: class {
    handleUpdate(todo) {
      this.onUpdate({todo: todo});
    }

    handleSave(todo) {
      this.onSave({todo: todo});
    }

    handleDestroy(todo) {
      this.onDestroy({todo: todo});
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'todoList'
});

export default todoList;
