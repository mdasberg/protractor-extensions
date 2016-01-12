(function () {
    'use strict';

    var ElementFinder = require('protractor').ElementFinder;

    /**
     * Blur the element by tabbing.
     * @return promise The promise.
     */
    ElementFinder.prototype.blur = function () {
        return this.sendKeys(protractor.Key.TAB);
    };

    /**
     * Indicates if the given element has focus.
     * @return <code>true</code> if has focus, else <code>false</code>.
     */
    ElementFinder.prototype.hasFocus = function () {
        return this.getInnerHtml().then(function (expected) {
            return browser.driver.switchTo().activeElement().getInnerHtml().then(function (actual) {
                return expected === actual;
            });
        });
    };

    /**
     * Indicates if the given style class is present on the current element.
     * @param classToMatch The class that need to be present.
     * @return <code>true</code> if present, else <code>false</code>.
     */
    ElementFinder.prototype.hasClass = function (classToMatch) {
        return this.getAttribute('class').then(function (classes) {
            return classes.indexOf(classToMatch) > -1;
        });
    };

    /**
     * Indicates if the given style classes are present on the current element.
     * @param classesToMatch The classes that need to be present.
     * @return <code>true</code> if present, else <code>false</code>.
     */
    ElementFinder.prototype.hasClasses = function (classesToMatch) {
        return this.getAttribute('class').then(function (classes) {
            for(var i in  classesToMatch) {
                if (classes.indexOf(classesToMatch[i]) === -1) {
                    return false;
                }
            }
            return true;
        });
    }

})();
