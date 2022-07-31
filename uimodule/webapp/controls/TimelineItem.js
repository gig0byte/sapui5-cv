sap.ui.define([
    "sap/suite/ui/commons/TimelineItem",
    "sap/suite/ui/commons/TimelineItemRenderer",
], function (TimelineItem, TimelineItemRenderer) {
    "use strict";

    let renderer = TimelineItemRenderer,
        _getFormatedDateTime = renderer._getFormatedDateTime;


    renderer._getFormatedDateTime = (t, A) => {
        if (t._getShowDate()) {
            return t._getShowDate();
        } else {
            return _getFormatedDateTime(t, A);
        }
    };

    return TimelineItem.extend("cv.cv.controls.Select", {
        metadata: {
            properties: {
                showDate: {
                    type: "any"
                }
            }
        },

        renderer,

        init() {
            TimelineItem.prototype.init.apply(this, arguments);
        },

        _getShowDate() {
            return this.getProperty("showDate");
        }

    });
});