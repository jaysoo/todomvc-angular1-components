const createTodoForm = () => ({
  scope: {
    onAdd: '&'
  },
  template: `
    <form ng-submit="ctrl.handleOnAdd(ctrl.todoForm)">
      <input class="new-todo"
             type="text"
             ng-model="ctrl.todoForm.title"
             placeholder="What needs to be done?"
             autofocus />
      </label>
    </form>
  `,
  controller: class {
    constructor() {
      this.todoForm = {};
    }

    handleOnAdd(todo) {
      this.onAdd({todo: todo});
      this.todoForm = {};
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default createTodoForm;