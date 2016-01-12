describe('protractor-extensions', function () {

    require('../../index.js')

    var theElement,
        theInputElement;

    beforeEach(function () {
        browser.get('extension.html');
        theElement = element(by.id('theElement'));
        theInputElement = element(by.id('theInputElement'))
    });

    it('should have the given class present', function () {
        expect(theElement.hasClass('a')).toBeTruthy();
    });

    it('should have the given classes present', function() {
        expect(theElement.hasClasses(['a', 'c'])).toBeTruthy();
    });

    it('should not have the given class present', function() {
        expect(theElement.hasClass('x')).toBeFalsy();
    });

    it('should not have the given classes present', function() {
        expect(theElement.hasClasses(['a', 'x'])).toBeFalsy();
    });

    it('should focus and blur', function() {
        expect(theInputElement.hasFocus()).toBeFalsy();
        theInputElement.sendKeys('');
        expect(theInputElement.hasFocus()).toBeTruthy();
        theInputElement.blur();
        expect(theInputElement.hasFocus()).toBeFalsy();
    });
});