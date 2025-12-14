/*global QUnit*/

sap.ui.define([
	"org/index/it/employeedata/controller/Validation_Screenlayout.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Validation_Screenlayout Controller");

	QUnit.test("I should test the Validation_Screenlayout controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
