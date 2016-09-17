import _ from 'lodash';

class PhotosController {
  constructor($scope, gallery) {
    'ngInject';

    this.$scope = $scope;
    this.items = gallery.items;

    this.query = {
      order: 'id',
      limit: 10,
      page: 1
    };

    this.filter = {
      name: '',
      author: ''
    };

    $scope.$watch(() => this.filter.name, this.resetQuery);
    $scope.$watch(() => this.filter.author, this.resetQuery);
  }

  resetQuery = () => {
    this.query = {
      ...this.query,
      page: 1
    };
  };

  changeOrder = () => {
    let ascending = 'asc';
    let field = this.query.order;

    if (_.startsWith(this.query.order, '-')) {
      ascending = 'desc';
      field = this.query.order.slice(1);
    }

    this.items = _.orderBy(this.items, field, ascending);
  };
}

export default PhotosController;
