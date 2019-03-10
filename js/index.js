/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        var btn = document.createElement("button");
        btn.setAttribute("id", "cdc-pe");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "btn btn-light");
        btn.textContent = "open cdc-pe.pdf";
        document.getElementById("openFile").appendChild(btn);

        var btn = document.createElement("button");
        btn.setAttribute("id", "cdc-tb");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "btn btn-light");
        btn.textContent = "open cdc-tb.pdf";
        document.getElementById("openFile").appendChild(btn);

        //afficher un PDF-----------------------------------------------------------------------
        document.getElementById("cdc-pe").addEventListener("click", function () {

            switch (cordova.platformId) {
                case "android":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-pe.pdf");
                    return;
                case "windows":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-pe.pdf");
                    return;
                case "ios":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-pe.pdf");
                    return;
                case "browser":
                    window.open('pdf/cdc-pe.pdf', '_blank', 'fullscreen=yes');
                    return;
            }
        });
        document.getElementById("cdc-tb").addEventListener("click", function () {

            switch (cordova.platformId) {
                case "android":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-tb.pdf");
                    return;
                case "windows":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-tb.pdf");
                    return;
                case "ios":
                    cordova.plugins.SitewaertsDocumentViewer.viewDocument("./pdf/cdc-tb.pdf");
                    return;
                case "browser":
                    window.open('pdf/cdc-tb.pdf', '_blank', 'fullscreen=yes');
                    return;
            }
        });
        document.getElementById("impExpFile").addEventListener("click", function () {
            document.location.href = "./gestionDoc.html";
        });

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();