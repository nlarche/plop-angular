'use strict';
var angular = require('angular');

var template = require('./{{dashCase name}}.html');

/**
 *  {{description}}
 * 
 */
angular.module('{{dotCase (concat module name) }}', [])

    .directive('{{camelCase name}}', function () {

        return {
            scope: true,
            bindToController: {
                data: '='
            },
            restrict: 'E',
            template: template,
            controller: function () {
                var vm = this;

                vm.{{camelCase name}} = '{{sentenceCase name}}';
                vm.myFunction = myFunction;
                vm.myOtherFunction = myOtherFunction
                vm.clickCount = {
                    myFunction: 0,
                    myOtherFunction: 0
                }

                function myFunction() {
                    // todo
                    vm.clickCount.myFunction += 1;
                    return false;
                }

                function myOtherFunction() {
                    // todo
                    vm.clickCount.myOtherFunction += 1;
                    return false;
                }
            },
            controllerAs: '{{camelCase name}}Ctrl'
        };
    });
