const todoCount = () => ({
  scope: {
    todos: '='
  },
  template: `
    <span class="todo-count">
      <strong>{{todoCount.todos.length}}</strong>
      <ng-pluralize count="todoCount.todos.length" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
    </span>
  `,
  controller: class {
    constructor() {
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'todoCount'
});

export default todoCount;
