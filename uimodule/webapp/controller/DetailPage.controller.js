sap.ui.define([
    "./BaseController",
    "sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library) {
        "use strict";

        return Controller.extend("cv.cv.controller.DetailPage", {
            onInit() { },

            pressCloseDetail() {
                this.getModel("layout").setProperty("/layout", "OneColumn");
            },

            companyClick(oEvent) {
                let sLink = oEvent.getSource().getBindingContext().getProperty("link");

                this.openInNewTab(sLink);
            },

            openInNewTab(sUri) {
                library.URLHelper.redirect(sUri, true);
            }
        });
    }
);
