import _ from 'lodash';

const todoItem = () => ({
  scope: {
    todo: '=',
    onUpdate: '&',
    onSave: '&',
    onDestroy: '&'
  },
  template: `
    <div ng-class="{'editing': todoItem.todoForm}">
      <div class="view">
        <input class="toggle"
               type="checkbox"
               ng-model="todoItem.todo.completed"
               ng-change="todoItem.handleUpdate()" />
        <label ng-dblclick="todoItem.edit()">
          {{todoItem.todo.title}}
        </label>
        <button class="destroy"
                ng-click="todoItem.handleDestroy()"></button>
      </div>
      <form ng-submit="todoItem.handleSave()">
        <input name="title"
               class="edit"
               ng-model="todoItem.todoForm.title"
               ng-blur="todoItem.cancelEdit()"
               ng-keyup="todoItem.handleKeyUp($event)" />
      </form>
    </div>
  `,
  controller: class {
    constructor($element) {
      this.editInput = $element.find('input')[1];
    }

    edit() {
      this.todoForm = _.extend({}, this.todo);
      setTimeout(() => this.editInput.focus(), 0);
    }

    cancelEdit() {
      this.todoForm = null;
    }

    handleUpdate() {
      this.onUpdate({todo: this.todo});
    }

    handleSave() {
      this.onSave({todo: this.todoForm});
      this.todoForm = null;
    }

    handleDestroy() {
      this.onDestroy({todo: this.todo});
    }

    handleKeyUp(evt) {
      if (evt.keyCode === 27) {
        this.cancelEdit();
      }
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'todoItem'
});

export default todoItem;
