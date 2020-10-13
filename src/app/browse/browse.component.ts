import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
// import { WebView, LoadEventData } from "tns-core-modules/ui/web-view/web-view";
// import { Page } from "tns-core-modules/ui/page/page";
// import { TextField } from "tns-core-modules/ui/text-field/text-field";
// import { Label } from "tns-core-modules/ui/label/label";

import * as TNSPhone from 'nativescript-phone';

@Component({
    selector: "Web",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements AfterViewInit {
    //public webViewSrc: string = "camp.html";

    public input: any;    
    public firstname: string = "";
    public lastname: string = "";
    // @ViewChild("myWebView") webViewRef: ElementRef;
    // @ViewChild("urlField") urlFieldRef: ElementRef;
    // @ViewChild("labelResult") labelResultRef: ElementRef;

    public constructor() {

        this.firstname = appSettings.getString("firstname", "");
        this.lastname = appSettings.getString("lastname", "");
        //console.log("Passing in " + this.lastname);

        this.input = {
            recipient: "413-522-7356", 
            message: "From: " + this.firstname + " " + this.lastname + "  Msg: "
            // Sandy 413-687-7665 Mary 4135227356
        }
    }

    ngAfterViewInit() {
        // let webview: WebView = this.webViewRef.nativeElement;
        // let label: Label = this.labelResultRef.nativeElement;
        // label.text = "WebView is still loading...";

        // webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
        //     let message;
        //     if (!args.error) {
        //         message = "WebView finished loading of " + args.url;
        //     } else {
        //         message = "Error loading " + args.url + ": " + args.error;
        //     }

        //     label.text = message;
        //     console.log("WebView message - " + message);
        // });
    }

    public send() {
        if(this.input.recipient != "" && this.input.message != "") {
            TNSPhone.sms([this.input.recipient], this.input.message).then(result => {
                    console.dir(result);
                    this.input.recipient = "";
                    this.input.message = "";
                }, error => {
                    console.dir(error);
                });
        }
    }

    // goBack() {
    //     let webview: WebView = this.webViewRef.nativeElement;
    //     if (webview.canGoBack) {
    //         webview.goBack();
    //     }
    // }

    // submit(args: string) {
    //     let textField: TextField = this.urlFieldRef.nativeElement;

    //     if (args.substring(0, 4) === "http") {
    //         this.webViewSrc = args;
    //         textField.dismissSoftInput();
    //     } else {
    //         alert("Please, add `http://` or `https://` in front of the URL string");
    //     }
    // }
}


// import { Component, OnInit } from "@angular/core";
// import * as appSettings from "tns-core-modules/application-settings/application-settings";

// @Component({
//     selector: "Browse",
//     moduleId: module.id,
//     templateUrl: "./browse.component.html",
//     styleUrls: ['./browse.component.css']
// })
// export class BrowseComponent implements OnInit {

//     rideLength: string = "";


//     constructor() {
//         // Use the component constructor to inject providers.
//     }

//     ngOnInit(): void {
//         // Use the "ngOnInit" handler to initialize data for the view.

//         this.rideLength = appSettings.getString("rideLength","Nada");
//     }

// }
