const todoList = () => ({
  scope: {
    todos: '=',
    onUpdate: '&',
    onSave: '&',
    onDestroy: '&'
  },
  template: `
    <ul class="todo-list">
      <li ng-repeat="todo in ctrl.todos track by todo.id">
        <todo-item todo="todo"
                   on-update="ctrl.handleUpdate(todo)"
                   on-save="ctrl.handleSave(todo)"
                   on-destroy="ctrl.handleDestroy(todo)" />
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
  controllerAs: 'ctrl'
});

export default todoList;
