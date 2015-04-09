const todoFilters = () => ({
  scope: {
    types: '=',
    filterCallback: '&onFilter'
  },
  template: `
    <ul class="filters">
      <li ng-repeat="type in ctrl.types">
        <a
          href="#" ng-click="ctrl.handleFilter(type)"
          ng-class="{'selected': ctrl.filter == type}">
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
      this.filterCallback({filter: filter});
    }
  },
  restrict: 'E',
  bindToController: true,
  controllerAs: 'ctrl'
});

export default todoFilters;