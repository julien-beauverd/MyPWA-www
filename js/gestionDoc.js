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

        var a = document.createElement("a");
        a.setAttribute("href","pdf/cdc-pe.pdf");
        a.setAttribute("download","cdc-pe");
        a.setAttribute("type","button");
        a.setAttribute("class","btn btn-light");
        a.textContent = "download cdc-pe.pdf";
        document.getElementById("downloadFile").appendChild(a);

        var a = document.createElement("a");
        a.setAttribute("href","pdf/cdc-tb.pdf");
        a.setAttribute("download","cdc-tb");
        a.setAttribute("type","button");
        a.setAttribute("class","btn btn-light");
        a.textContent = "download cdc-tb.pdf";
        document.getElementById("downloadFile").appendChild(a);

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