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
          <todo-list todos="ctrl._filteredTodos"
                on-update="ctrl.handleUpdate(todo)"
                on-save="ctrl.handleSave(todo)"
                on-destroy="ctrl.handleDestroy(todo)">
          </todo-list>
        </section>
        <footer class="footer">
          <todo-count todos="ctrl._activeTodos"></todo-count>
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
      this._todos = todoService.all();
      this.updateState();
    }

    updateState() {
      this._activeTodos = _.filter(this._todos, t => !t.completed);

      switch (this.filter) {
        case 'active':
          this._filteredTodos = _.filter(this._todos, t => !t.completed);
          break;
        case 'completed':
          this._filteredTodos = _.filter(this._todos, t => t.completed);
          break;
        default:
          this._filteredTodos = this._todos;
      }
    }

    handleAdd(todo) {
      this.todoService.create(todo);
      this._todos = this.todoService.all();
      this.updateState();
    }

    handleUpdate(todo) {
      this.todoService.update(todo);
      this._todos = this.todoService.all();
      this.updateState();
    }

    handleSave(todo) {
      this.todoService.update(todo);
      this._todos = this.todoService.all();
      this.updateState();
    }

    handleDestroy(todo) {
      this.todoService.destroy(todo);
      this._todos = this.todoService.all();
      this.updateState();
    }

    updateFilter(filter) {
      this.filter = filter;
      this.updateState();
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoApp;
