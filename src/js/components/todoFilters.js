const todoFilters = () => ({
  scope: {
    types: '=',
    selected: "=",
    onFilter: '&'
  },
  template: `
    <ul class="filters">
      <li ng-repeat="type in todoFilters.types">
        <a href="#"
           ng-click="todoFilters.handleFilter(type)"
           ng-class="{'selected': todoFilters.selected == type}">
          {{type}}
        </a>
      </li>
    </ul>
  `,
  controller: class {
    constructor() {
    }

    handleFilter(filter) {
      this.onFilter({ filter });
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'todoFilters'
});

export default todoFilters;
