import _ from 'lodash';

class NavbarController {
  constructor($location) {
    let initial = 'home';

    if (_.includes($location.path(), 'photo')) {
      initial = 'photos';
    }

    this.initialNav = initial;
  }
}

NavbarController.$inject = ['$location'];

export default NavbarController;
