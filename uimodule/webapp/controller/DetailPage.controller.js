sap.ui.define([
    "./BaseController",
    "sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library) {
        "use strict";

        let oModel = {
            work: [
                {
                    company: "Hitech",
                    link: "https://www.hi-tech.org/",
                    title: "Frontend Developer",
                    logo: "/static/hitech_logo.jpg",
                    description: "Currently working in dashboard project (monitoring of MCU servers and other videoconference infrastructure): Vue.js + Vuetify.",
                    date: "Date(1633035600000)",
                    showDate: "10.2021 - now",
                    order: 1
                },
                {
                    company: "K2 Consult",
                    link: "https://www.k2consult.ru/",
                    title: "Web Developer",
                    logo: "/static/k2_logo.png",
                    description: "I mainly made applications on the SAP Business Technologies Platform (ex-SCP), stack: Neo, xsjs, xsodata, hdbdd, SAP Fiori Client, SAPUI5. In that projects I worked as Full-Stack Developer, later I became Team Lead:\n\n1. Application for storing information about wagons, tracking location and checking their current status. Application had integration with SAP Analytics Cloud. This application was awarded at SAP Coder comptetition in 2018;\n\n2. Survey application with different response controls (dropdown, checkbox, segmentedbutton, etc.), email notifications and the ability to attach a photo to the response. This application was certified by SAP in 2020.\n\nOther projects I have worked on:\n\n1. SPA for analyzing and aggregating information about user accounts from severalsystems: SAP, AD, Mail Exchange, Service Desk system, Lansweeper. Mainly worked onfrontend (Vue.js + Vuetify);\n\n2. Classifier of the Service Desk system tickets (Python Flask, algorithm - RandomForest);\n\n3. Middleware for synchronizing worklogs from the Service Desk system to Jira (Python Flask in Docker container);\n\n4. Application for parsing and analyzing tickets from the Service Desk system for making mail notifications and reports (РНР in Docker container);\n\n5. Scripts for processing tickets in Service Desk system: mass creation, mass modification, etc. (РНР).",
                    date: "Date(1525122000000)",
                    showDate: "05.2018 - 10.2021",
                    order: 2
                },
                {
                    company: "K2 Consult",
                    link: "https://www.k2consult.ru/",
                    title: "Second Line Support Assistant (SAP BCM)",
                    logo: "/static/k2_logo.png",
                    description: "Call-centre support with 20+ operators and 10k+ calls per day",
                    date: "Date(1504213200000)",
                    showDate: "09.2017 - 05.2018",
                    order: 3
                },
            ],

            education: [{
                company: "Peter The Great St. Petersburg Polytechnic University",
                link: "https://english.spbstu.ru/",
                logo: "/static/spbstu_logo.png",
                title: "Information Systems and Technologies",
                description: "Graduation works:\n\n• Application for monitoring devices in the network (Bachelor);\n• Application for visual modeling of solid body heating (Master).",
                showDate: "09.2011 - 07.2017",
            }]
        };

        return Controller.extend("cv.cv.controller.DetailPage", {
            onInit() {
                // @ts-ignore
                this.setModel(new sap.ui.model.json.JSONModel(oModel));

                // console.log(this.getModel("detail"));
            },

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
