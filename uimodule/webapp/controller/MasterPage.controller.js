sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("cv.cv.controller.MasterPage", {
            onInit() { },

            pressShowDetal() {
                this.getModel("layout").setProperty("/layout", "TwoColumnsMidExpanded");
            }
        });
    }
);
