sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        let oModel = {
            img: {
                photo: "/static/photo.png"
            },

            contacts: [{
                name: "email",
                link: "mailto:gig0byte26@gmail.com",
                value: "gig0byte26@gmail.com",
                icon: "email"
            },
            {
                name: "phone",
                link: "tel:+79052584362",
                value: "+7 905 258 43 62",
                icon: "call"
            }, {
                name: "city",
                value: "Saint-Petersburg, Russia",
                icon: "map"
            }, {
                name: "linkedin",
                icon: "arobase",
                link: "https://www.linkedin.com/in/pavel-mazharov/",
                value: "pavel-mazharov",
            }],

            assets: [{
                name: "skills",
                items: [{
                    name: "SAPUI5",
                    value: 100
                },
                {
                    name: "Vue 2",
                    value: 100
                }, {
                    name: "JavaScript",
                    value: 80
                }, {
                    name: "Python",
                    value: 70
                }, {
                    name: "Docker",
                    value: 70
                }]
            },
            {
                name: "languages",
                items: [{
                    name: "Russian",
                    value: 100
                }, {
                    name: "English",
                    value: 80
                }]
            }]
        };

        return Controller.extend("cv.cv.controller.MasterPage", {
            onInit() {
                this.setModel(new sap.ui.model.json.JSONModel(oModel, "detail"));
            },

            pressShowDetal() {
                this.getModel("layout").setProperty("/layout", "TwoColumnsMidExpanded");
            }
        });
    }
);
