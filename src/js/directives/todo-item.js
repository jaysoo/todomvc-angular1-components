import _ from 'lodash';

const todoItem = () => ({
  scope: {
    todo: '=',
    doneCallback: '&onDone',
    saveCallback: '&onSave',
    destroyCallback: '&onDestroy'
  },
  template: `
    <div ng-class="{'editing': ctrl.todoForm}">
      <div class="view">
        <input class="toggle"
               type="checkbox"
               ng-model="ctrl.todo.done"
               ng-change="ctrl.handleDone()" />
        <label ng-dblclick="ctrl.edit()">
          {{ctrl.todo.title}}
        </label>
        <button class="destroy"
                ng-click="ctrl.handleDestroy()"></button>
      </div>
      <form ng-submit="ctrl.handleSave()">
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

    edit() {
      this.todoForm = _.extend({}, this.todo);
      setTimeout(() => this.editInput.focus(), 0);
    }

    cancelEdit() {
      this.todoForm = null;
    }

    handleDone() {
      this.doneCallback({todo: this.todo});
    }

    handleSave() {
      this.saveCallback({todo: this.todoForm});
      this.todoForm = null;
    }

    handleDestroy() {
      this.destroyCallback({todo: this.todo});
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