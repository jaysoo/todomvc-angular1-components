const todoItem = () => ({
  scope: {
    todo: '=',
    onDone: '&'
  },
  template: `
    <div class="view">
      <input class="toggle" type="checkbox" ng-model="ctrl.todo.done" ng-change="ctrl.handleDone(ctrl.todo)" />
      <label>{{ctrl.todo.title}}</label>
      <button class="destroy"></button>
    </div>
  `,
  controller: class {
    handleDone(todo) {
      this.onDone({ todo: todo });
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoItem;