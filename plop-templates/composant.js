(function (angular) {
    'use strict';
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
            templateUrl: './{{dashCase name}}.html',
            controller: function () {
                var vm = this;
				vm.{{camelCase name}} = '{{sentenceCase name}}';
            },
            controllerAs: '{{camelCase name}}Ctrl'
        };
    });

})(angular);