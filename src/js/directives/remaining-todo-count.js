const remainingTodoCount = () => ({
  scope: {
    todos: '='
  },
  template: `
    <span class="todo-count">
      <strong>{{ctrl.remainingCount()}}</strong>
      <ng-pluralize count="ctrl.remainingCount()" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
    </span>
  `,
  controller: class {
    remainingCount() {
      return this.todos.filter(t => !t.completed).length;
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default remainingTodoCount;