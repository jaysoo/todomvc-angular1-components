import _ from 'lodash';

const todoApp = () => ({
  template: `
    <section class="todoapp">
      <header class="header">
				<h1>todos</h1>
        <create-todo-form on-add="ctrl.addTodo(todo)"></create-todo-form>
      </header>

			<section class="main">
        <todo-list todos="ctrl.todos" on-done="ctrl.updateTodos()"></todo-list>
      </section>
      <footer class="footer">
			  <todo-count todos="ctrl.todos"></todo-count>
        <todo-filters types="['all', 'active', 'completed']" on-filter="ctrl.updateFilter(filter)"></todo-filters>
      </footer>
    </section>
  `,
  controller: class {
    constructor() {
      this.allTodos = [];
      this.filter = 'all';
      this.updateTodos();
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

    addTodo(todo) {
      this.allTodos.push(todo);
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