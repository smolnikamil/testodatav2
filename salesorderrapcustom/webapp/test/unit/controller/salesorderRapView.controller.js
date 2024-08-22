/*global QUnit*/

sap.ui.define([
	"salesorderrap/salesorderrapcustom/controller/salesorderRapView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("salesorderRapView Controller");

	QUnit.test("I should test the salesorderRapView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
