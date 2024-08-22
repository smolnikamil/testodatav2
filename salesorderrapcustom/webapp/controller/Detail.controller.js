sap.ui.define(
	["sales/order/rap/salesorderrapcustom/controller/BaseController"],
	function (BaseController) {
		"use strict";

		return BaseController.extend(
			"sales.order.rap.salesorderrapcustom.controller.Detail",
			{
				onInit: function () {
					var oRouter = this.getRouter();
					oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
				},

				_onRouteMatched: function (oEvent) {
					let oArguments = oEvent.getParameter("arguments");
					let documentGuid = oArguments.salesDocumentGuid;
					let sPath = "/SalesHeader(guid'" + documentGuid + "')";
					let oSmartForm = this.byId("smartFormColumn");
					oSmartForm.bindElement(sPath);
				},
				onEmployeeUpdate: function () {
					this.getView().getModel().submitChanges();
					//       var path = this.getView().byId("smartFormColumn").getElementBinding().getPath();
					//       var boundItem = this.getView().getModel().getProperty(path);
					//       var msg = this.getView().getModel("i18n").getResourceBundle().getText("employeeUpdated", boundItem.Guid);

					//       let salesOrderPrice = this.getView().byId('SmartField4').getValue()
					//       let postData = {}
					//       postData.Price = salesOrderPrice

					//       this.getView().getModel().update(path, postData, {
					//             success: function(){
					//                   // MessageBox.success(msg); // update does not return anything
					//             },
					//             error: function(oError){
					//                   // MessageBox.error(oError.responseText);
					//             }
					//       });
				},
			}
		);
	}
);
