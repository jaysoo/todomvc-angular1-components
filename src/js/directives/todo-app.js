import _ from 'lodash';

const todoApp = () => ({
  template: `
    <div>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <create-todo-form on-add="ctrl.handleAdd(todo)"></create-todo-form>
        </header>

        <section class="main">
          <todo-list todos="ctrl.todos"
                on-done="ctrl.handleDone(todo)"
                on-save="ctrl.handleSave(todo)"
                on-destroy="ctrl.handleDestroy(todo)">
          </todo-list>
        </section>
        <footer class="footer">
          <todo-count todos="ctrl.allTodos"></todo-count>
          <todo-filters types="['all', 'active', 'completed']" on-filter="ctrl.updateFilter(filter)"></todo-filters>
        </footer>
      </section>
      <footer class="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  `,
  controller: class {
    constructor(todoService) {
      this.filter = 'all';
      this.todoService = todoService;
      this.updateTodos();

      this.allTodos = todoService.all();
    }

    updateTodos() {
      switch (this.filter) {
        case 'active':
          this.todos = _.filter(this.allTodos, t => !t.done);
          break;
        case 'completed':
          this.todos = _.filter(this.allTodos, t => t.done);
          break;
        default:
          this.todos = this.allTodos;
      }
    }

    handleAdd(todo) {
      this.todoService.create(todo);
      this.allTodos = this.todoService.all();
      this.updateTodos();
    }

    handleDone(todo) {
      todo.done = true;
      this.todoService.update(todo);
      this.allTodos = this.todoService.all();
      this.updateTodos();
    }

    handleSave(todo) {
      this.todoService.update(todo);
      this.allTodos = this.todoService.all();
      this.updateTodos();
    }

    handleDestroy(todo) {
      this.todoService.destroy(todo);
      this.allTodos = this.todoService.all();
      this.updateTodos();
    }

    updateFilter(filter) {
      this.filter = filter;
      this.updateTodos();
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoApp;