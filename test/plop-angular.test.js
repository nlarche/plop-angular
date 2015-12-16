var mockery = require('mockery')
var fs = require('fs')

describe('Test plop-angular generator', function () {

  beforeEach(function () {

    process.argv.splice(2, 0, 'component');

    require('plop');


  });

  before(function () {

    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });

    var data = {
      'module': 'testModule',
      name: 'test component',
      decription: 'decription',
      'package': true,
      demo: true
    }
    
    // Mock the real prompt with answers in data Object
    mockery.registerMock('inquirer', {
      prompt: function (args, fn) {
        fn(data);
      }
    });
  });

  it('create component file', function (done) {
    
    // wait 50 ms before call callback
    setTimeout(function () {
      done();
    }, 50);
  }); 
  

});