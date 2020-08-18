sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.routing-sample.controller.ViewFrom", {
		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetViewTo", {} );
		},
		onPressWithParameter: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var fname = this.getView().byId("input").getValue();
			var json = {
				"fname": fname,
				"lname": "Soni"
			};
			oRouter.navTo("TargetViewToParameter", { parameter: JSON.stringify(json)} );
		}
	});
});