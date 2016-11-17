'use strict';

describe('myApp.volunteers module', function() {

  beforeEach(module('myApp.volunteers'));

  describe('volunteers controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var volunteersCtrl = $controller('VolunteersCtrl');
      expect(volunteersCtrl).toBeDefined();
    }));

  });
});