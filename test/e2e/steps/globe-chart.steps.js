"use strict";

module.exports = function() {
    this.setDefaultTimeout(60000);
    this.Given(/^I am using the weather app$/, function (callback) {
        browser.get('http://127.0.0.1:8080/app/#/d3-globe-chart').then(function() {
            callback();
        });

    });

    this.Then(/^the globe chart is rendered$/, function (callback) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf($('.globe')), 5000).then(function() {
           callback();
        });
    });
};