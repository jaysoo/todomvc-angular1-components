import _ from 'lodash';

const todoApp = () => ({
  template: `
    <div>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <create-todo-form on-create="ctrl.handleCreate(todo)"></create-todo-form>
        </header>

        <section class="main">
          <todo-list
                todos="ctrl.state.todos"
                on-update="ctrl.handleUpdate(todo)"
                on-save="ctrl.handleSave(todo)"
                on-destroy="ctrl.handleDestroy(todo)">
          </todo-list>
        </section>
        <footer class="footer">
          <remaining-todo-count todos="ctrl.state.todos"></remaining-todo-count>
        </footer>
      </section>
      <footer class="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  `,
  controller: class {
    constructor(todoService) {
      this.todoService = todoService;
      this.state = {};
      this.updateTodos();
    }

    updateTodos() {
      this.state.todos = this.todoService.all();
    }

    handleCreate(todo) {
      this.todoService.create(todo);
      this.updateTodos();
    }

    handleUpdate(todo) {
      this.todoService.update(todo);
      this.updateTodos();
    }

    handleSave(todo) {
      this.todoService.update(todo);
      this.updateTodos();
    }

    handleDestroy(todo) {
      this.todoService.destroy(todo);
      this.updateTodos();
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoApp;