describe('hello-proctractor', function() {
   var ptor = protractor.getInstance();

    describe('main', function() {
       it('should display the correct title', function() {
          ptor.get('/#');
          expect(ptor.getTitle()).toBe('FoodBetter');
       });
    });
});