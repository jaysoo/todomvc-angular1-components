const todoFilters = () => ({
  scope: {
    types: '=',
    onFilter: '&'
  },
  template: `
    <ul class="filters">
      <li ng-repeat="type in todoFilters.types">
        <a
          href="#" ng-click="todoFilters.handleFilter(type)"
          ng-class="{'selected': todoFilters.filter == type}">
          {{type}}
        </a>
      </li>
    </ul>
  `,
  controller: class {
    constructor() {
      this.filter = this.types[0];
    }

    handleFilter(filter) {
      this.filter = filter;
      this.onFilter({ filter });
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'todoFilters'
});

export default todoFilters;
