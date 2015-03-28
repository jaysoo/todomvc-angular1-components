const todoList = () => ({
  scope: {
    todos: '=',
    onDone: '&'
  },
  template: `
    <ul class="todo-list">
      <li ng-repeat="todo in ctrl.todos">
        <todo-item todo="todo" on-done="ctrl.onDone(todo)" />
      </li>
    </ul>
  `,
  controller: class {
    constructor() {
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoList;