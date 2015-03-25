import angular from 'angular';
import _ from 'lodash';

const m = angular.module('app', []);

m.directive('app', () => ({
  restrict: 'E',
  bindToController: true,
  controllerAs: 'self',
  template: `
    <div>
      <create-todo-form on-add="self.addTodo(todo)"></create-todo-form>
      <todo-list todos="self.todos" on-done="self.updateTodos()"></todo-list>
      <span>Remaining: {{self.remainingCount()}}
      <todo-filters types="['all', 'active', 'completed']" on-filter="self.updateFilter(filter)"></todo-filters>
    </div>
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

    remainingCount() {
      return _.filter(this.allTodos, t => !t.done).length;
    }

    addTodo(todo) {
      this.allTodos.push(todo);
      this.updateTodos();
    }

    updateFilter(filter) {
      this.filter = filter;
      this.updateTodos();
    }
  }
}));

m.directive('todoList', () => ({
  restrict: 'E',
  bindToController: true,
  controllerAs: 'self',
  template: `
    <ul>
      <li ng-repeat="todo in self.todos">
        <todo-item todo="todo" on-done="self.onDone(todo)" />
      </li>
    </ul>
  `,
  scope: {
    todos: '=',
    onDone: '&'
  },
  controller: class {
    constructor() {
    }
  }
}));

m.directive('todoItem', () => ({
  restrict: 'E',
  bindToController: true,
  controllerAs: 'self',
  template: `
    <span>
      <label>
        {{self.todo.title}}
        <input type="checkbox" ng-model="self.todo.done" ng-change="self.handleDone(self.todo)" />
      </label>
    </span>
  `,
  scope: {
    todo: '=',
    onDone: '&'
  },
  controller: class {
    handleDone(todo) {
      this.onDone({ todo: todo });
    }
  }
}));

m.directive('createTodoForm', () => ({
  restrict: 'E',
  bindToController: true,
  controllerAs: 'self',
  template: `
    <form ng-submit="self.handleOnAdd(self.todoForm)">
      <label>
        Title:
        <input type="text" ng-model="self.todoForm.title" placeholder="What needs to be done?" autofocus />
      </label>
      <button>Add</button>
    </form>
  `,
  scope: {
    onAdd: '&'
  },
  controller: class {
    constructor() {
      this.todoForm = {};
    }

    handleOnAdd(todo) {
      this.onAdd({todo: todo});
      this.todoForm = {};
    }
  }
}));

m.directive('todoFilters', () => ({
  restrict: 'E',
  bindToController: true,
  controllerAs: 'self',
  template: `
    <div>
      <a ng-repeat="type in self.types" href="#" ng-click="self.handleFilter(type)" ng-class="{'is-active': self.filter == type}">
        {{type}}
      </a>
    </div>
  `,
  scope: {
    types: '=',
    onFilter: '&'
  },
  controller: class {
    constructor() {
      this.filter = this.types[0];
    }

    handleFilter(filter) {
      this.filter = filter;
      this.onFilter({filter: filter});
    }
  }
}));

angular.bootstrap(document.body, [m.name]);

export default m;
