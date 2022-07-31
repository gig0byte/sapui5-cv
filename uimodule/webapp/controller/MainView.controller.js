sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cv.cv.controller.MainView", {
            onInit() {},

            onAfterRendering() {
                console.log(this.getModel("layout"));
            }
        });
    }
);
