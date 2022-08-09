sap.ui.define(
    ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     *
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     *
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel() {
                const oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            createLayoutModel() {
                const oModel = new JSONModel({
                    layout: Device.system.phone ? "OneColumn" : "TwoColumnsMidExpanded"
                });

                return oModel;
            },

            fetchData(that) {
                let oDataModel = that.getModel("data");

                // ивент, вызываемый после загрузки данных в модель
                oDataModel.attachRequestCompleted((oData) => {
                    that.getModel("data").setData(oDataModel.getData());
                });

                oDataModel.loadData("/data.json");
            }
        };
    }
);
