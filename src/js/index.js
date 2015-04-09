import angular from 'angular';

const m = angular.module('app', []);

import todoApp from './directives/todo-app';
import todoList from './directives/todo-list';
import todoItem from './directives/todo-item';
import createTodoForm from './directives/create-todo-form';
import todoCount from './directives/todo-count';
import todoFilters from './directives/todo-filters';
import TodoService from './services/TodoService';
import TodoLocalStorage from './storage/TodoLocalStorage';

m.directive('todoApp', todoApp);
m.directive('todoList', todoList);
m.directive('todoItem', todoItem);
m.directive('createTodoForm', createTodoForm);
m.directive('todoCount', todoCount);
m.directive('todoFilters', todoFilters);

m.service('todoService', TodoService);
m.service('todoStorage', TodoLocalStorage);

angular.bootstrap(document.body, [m.name]);

export default m;
