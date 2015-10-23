import angular from 'angular';

const m = angular.module('app', []);

import todoApp from './containers/todoApp';

import todoList from './components/todoList';
import todoItem from './components/todoItem';
import createTodoForm from './components/createTodoForm';
import todoCount from './components/todoCount';
import todoFilters from './components/todoFilters';

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
