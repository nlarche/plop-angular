describe('{{dashCase name}}', function () {

	beforeEach(module('{{dotCase (concat module name) }}'));

	var element;
	var scope;	

	beforeEach(inject(function ($rootScope, $compile) {
		element = angular.element('<{{dashCase name}}></{{dashCase name}}>');

		scope = $rootScope;
		$compile(element)(scope);

		scope.$digest();
	}));

	describe('title', function () {
		it('should be rendered', function () {			
			expect(element.find('h1')[0].innerHTML).toBe('{{camelCase name}} is working !');
		});
    });


	describe('click button', function () {

		beforeEach(function () {
			var event = document.createEvent("MouseEvent");		
			
			event.initMouseEvent("click", true, true);			
			
			element.find('button')[0].dispatchEvent(event);
			
			element.find('button')[1].dispatchEvent(event);
			
		});

		it('should increment counter', function () {
			
			expect(element.scope().{{camelCase name}}Ctrl.clickCount.myFunction).toBe(1);
			expect(element.scope().{{camelCase name}}Ctrl.clickCount.myOtherFunction).toBe(1);
						
			
		});
    });


});