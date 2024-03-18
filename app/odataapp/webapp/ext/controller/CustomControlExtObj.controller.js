sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('odataapp.ext.controller.CustomControlExtObj', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf odataapp.ext.controller.CustomControlExtObj
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			// editFlow:
			// {
			// 	onBeforeSave: function () {
			// 		debugger
			// 						alert("Enter valid company name!");						
			// 		// MessageBox.confirm("its confirm");
			// 	},

			// 	onAfterSave : function(){
			// 		alert(" company name saved successfully!");	
			// 	}
			// },

			routing:{
				onAfterBinding : function(oBindingContext){
					debugger
					// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(false)
					this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[5].setEnabled(false)	
				}
			 }
		}
	});
});
