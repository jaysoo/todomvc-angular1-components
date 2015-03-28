const todoCount = () => ({
  scope: {
    todos: '='
  },
  template: `
    <span class="todo-count">
      <strong>{{ctrl.todos.length}}</strong>
      <ng-pluralize count="ctrl.todos.length" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
    </span>
  `,
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoCount;