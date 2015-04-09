const createTodoForm = () => ({
  scope: {
    createCallback: '&onCreate'
  },
  template: `
    <form ng-submit="ctrl.handleCreate(ctrl.todoForm)">
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
      this.reset();
    }

    reset() {
      this.todoForm = {};
    }

    handleCreate(todo) {
      this.createCallback({todo: todo});
      this.reset();
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default createTodoForm;