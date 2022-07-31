sap.ui.define([], function () {
    "use strict";
    return {
        i18nDynamicKey(sPath, sKey) {
            // console.log(sPath, sKey);
            let returnText = "";

            if (this && this.getOwnerComponent) {
                returnText = sKey ? this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sPath + sKey) : "";
            }
            return returnText;
        },
    };
});
