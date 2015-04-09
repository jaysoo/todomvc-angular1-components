import angular from 'angular';

import todoApp from './directives/todo-app';
import todoList from './directives/todo-list';
import todoItem from './directives/todo-item';
import createTodoForm from './directives/create-todo-form';
import remainingTodoCount from './directives/remaining-todo-count';
import TodoService from './services/TodoService';
import TodoLocalStorage from './storage/TodoLocalStorage';

const app = angular.module('app', []);

app.directive('todoApp', todoApp);
app.directive('todoList', todoList);
app.directive('todoItem', todoItem);
app.directive('createTodoForm', createTodoForm);
app.directive('remainingTodoCount', remainingTodoCount);

app.service('todoService', TodoService);
app.service('todoStorage', TodoLocalStorage);

angular.bootstrap(document.body, [app.name]);

export default app;
