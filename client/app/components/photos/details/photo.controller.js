import _ from 'lodash';

class PhotoController {
  constructor($stateParams, $state, $mdDialog, $mdToast, gallery) {
    "ngInject";

    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.gallery = gallery;

    this.id = _.toInteger($stateParams.id);
    const item = _.find(this.gallery.items, (i) => i.id === this.id);

    _.isEmpty(item) && $state.go('photos');

    this.item = _.clone(item);
  }

  save = () => {
    const index = _.findIndex(this.gallery.items, ['id', this.id]);

    if (index === -1) {
      return;
    }

    this.gallery.items = [
      ...this.gallery.items.slice(0, index),
      this.item,
      ...this.gallery.items.slice(index + 1),
    ];

    this.$state.go('photos');

    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Item was updated!')
        .position('top right')
        .hideDelay(2000)
    );
  };

  delete = (e) => {
    const confirm = this.$mdDialog.confirm()
      .title('Delete Confirmation')
      .textContent('Would you like to delete this item?')
      .targetEvent(e)
      .ok('Delete')
      .cancel('Cancel');

    this.$mdDialog.show(confirm).then(() => {
      const index = _.findIndex(this.gallery.items, ['id', this.id]);

      if (index === -1) {
        return;
      }

      this.gallery.items = [
        ...this.gallery.items.slice(0, index),
        ...this.gallery.items.slice(index + 1),
      ];

      this.$state.go('photos');

      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent('Item was deleted!')
          .position('top right')
          .hideDelay(2000)
      );
    });
  };
}

export default PhotoController;
