import _ from 'lodash';

const todoItem = () => ({
  scope: {
    todo: '=',
    onDone: '&',
    onSave: '&'
  },
  template: `
    <div ng-class="{'editing': ctrl.todoForm}">
      <div class="view">
        <input class="toggle"
               type="checkbox"
               ng-model="ctrl.todo.done"
               ng-change="ctrl.markComplete(ctrl.todo)" />
        <label ng-dblclick="ctrl.editTodo(ctrl.todo)">
          {{ctrl.todo.title}}
        </label>
        <button class="destroy"></button>
      </div>
      <form ng-submit="ctrl.saveEdit(ctrl.todo)">
        <input class="edit" ng-model="ctrl.todoForm.title"
               ng-blur="ctrl.cancelEdit()"
               ng-keyup="ctrl.handleKeyUp($event)" />
      </form>
    </div>
  `,
  controller: class {
    constructor($element) {
      this.editInput = $element.find('input')[1];
    }

    editTodo(todo) {
      this.todoForm = _.extend({}, this.todo);

      setTimeout(() => this.editInput.focus(), 100);
    }

    markComplete(todo) {
      this.onDone({ todo: todo });
    }

    saveEdit(todo) {
      this.todoForm = null;
      this.onSave({ todo: todo });
    }

    cancelEdit() {
      this.todoForm = null;
    }

    handleKeyUp(evt) {
      if (evt.keyCode === 27) {
        this.cancelEdit();
      }
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoItem;