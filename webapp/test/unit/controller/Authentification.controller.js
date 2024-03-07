/*global QUnit*/

sap.ui.define([
	"hrplatform/controller/Authentification.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Authentification Controller");

	QUnit.test("I should test the Authentification controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
