import _ from 'lodash';

class PhotosController {
  constructor(gallery) {
    'ngInject';

    this.items = gallery.items;
    this.filteredItems = gallery.items;
    this.filter = {
      name: '',
      author: ''
    };
  }

  changeFilter() {
    this.filteredItems = _.filter(this.items, (i) =>
      _.includes(i.name.toLowerCase(), this.filter.name.toLowerCase()) &&
      _.includes(i.author.toLowerCase(), this.filter.author.toLowerCase()));
  };
}

export default PhotosController;
