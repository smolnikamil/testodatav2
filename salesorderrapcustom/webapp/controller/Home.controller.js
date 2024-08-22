sap.ui.define(
	[
		"sales/order/rap/salesorderrapcustom/controller/BaseController",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend(
			"sales.order.rap.salesorderrapcustom.controller.Home",
			{
                        onListItemPressed: function (oEvent) {
                              let oItem;
                              oItem = oEvent.getSource().getBindingContext().getProperty("Guid");
                              // let path = oItem
                              //       .getBindingContext("/SalesHeader")
                              //       .getProperty("SOrderNo");
                              this.getRouter().navTo("detail", {
                                    salesDocumentGuid: oItem,
                              });
                        },
			}
		);
	}
);
