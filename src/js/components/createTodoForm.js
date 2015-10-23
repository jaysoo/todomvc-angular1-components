const createTodoForm = () => ({
  scope: {
    onAdd: '&'
  },
  template: `
    <form ng-submit="createTodoForm.handleOnAdd(createTodoForm.todoForm)">
      <input class="new-todo"
             type="text"
             ng-model="createTodoForm.todoForm.title"
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
      this.onAdd({ todo });
      this.todoForm = {};
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'createTodoForm'
});

export default createTodoForm;
