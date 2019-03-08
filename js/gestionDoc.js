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

        document.getElementById("importFile").addEventListener("click", function () {
        });

        document.getElementById("exportFile").addEventListener("click", function () {

            let pdfPath = 'pdf/cdc.pdf'

            let permissions = cordova.plugins.permissions;
            permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, checkPermissionCallback, null);

            // Checking for permissions
            function checkPermissionCallback(status) {
                console.log('checking permissions');
                console.log(status);
                if (!status.hasPermission) {
                    var errorCallback = function () {
                        console.warn('Storage permission is not turned on')
                    }
                    // Asking permission to the user
                    permissions.requestPermission(
                        permissions.READ_EXTERNAL_STORAGE,
                        function (status) {
                            if (!status.hasPermission) {
                                errorCallback()
                            } else {
                                // proceed with downloading
                                downloadFile()
                            }
                        },
                        errorCallback)
                } else {
                    downloadFile();
                }
            }

            function downloadFile() {
                let filePath = cordova.file.externalRootDirectory + 'download/' + 'my_file.pdf'
                let fileTransfer = new window.FileTransfer()
                let uri = encodeURI(decodeURIComponent(pdfPath))

                // Downloading the file
                fileTransfer.download(uri, filePath,
                    function (entry) {
                        console.log('Successfully downloaded file, full path is ' + entry.fullPath)
                        console.log(entry)
                    },
                    function (error) {
                        console.log('error')
                        console.log(error)
                    },
                    false
                )
            }
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