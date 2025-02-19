// Type definitions for Apache Cordova FileTransfer plugin
// Project: https://github.com/sitewaerts/cordova-plugin-file-opener2
// Definitions by: Microsoft Open Technologies Inc. <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license

interface Callbacks{
    success?: ()=>void
    error?: (error?:any)=>void
}

/**
 *
 */
interface FileOpener2 {
    /**
     * Open file with system default application
     * @param fileURL  Filesystem URL representing the file on the device.
     * @param mimeType
     * @param callbacks
     */
    open(
        fileURL: string,
        mimeType: string | null,
        callbacks?: Callbacks
    )
}



// plugin available at window.cordova.plugins.email
interface CordovaPlugins {
    fileOpener2: FileOpener2
}
