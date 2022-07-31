/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["cv/cv/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
