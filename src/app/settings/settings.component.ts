import { Component, OnInit } from "@angular/core";
//import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

//import { FloatLabel } from "../float-label/float-label.component";

import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";
import { EventData } from "tns-core-modules/data/observable/observable";
import { Button } from "tns-core-modules/ui/button/button";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
//import { Kinvey } from 'kinvey-nativescript-sdk';
//import { Observable2 } from 'rxjs/Observable';
//import { Observable } from "../../node_modules/rxjs";
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";

let rideoptionList = ["180K", "160K", "115K", "100K", "Mystery", "DPR2 50-mile Paved", "40-mile Green River Tour", "12-mile Family Ride"];
    
@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    public rideoptions: Array<string>;
    public picked: string;
    public ridelength: string = "";
    public rideselectedindex: number = 0;
    public firstname: string = "";
    public lastname: string = "";

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
        this.rideoptions = [];

        // Load the Pick List with Ride Options
        for (let i = 0; i < rideoptionList.length; i++) {
            this.rideoptions.push(rideoptionList[i]);
            //console.log("Pokemon = " + rideoptionList[i]);

        }

        // navigateBack() {
        //     this.router.back();
        // }
    

    }

    // Handle Text field changes
    public onTextChangeFirst(args) {
        let textField = <TextField>args.object;

        //if(textField.id == "first") {
            this.firstname = textField.text;
        // } else {
        //     this.lastname = textField.text;
        // }
        //console.log("onTextChange FIRST");
        //console.log(args)
        
    }

    // Handle Text field changes
    public onTextChangeLast(args) {
        let textField = <TextField>args.object;

        // if(textField.id == "first") {
        //     this.firstname = textField.text;
        // } else {
            this.lastname = textField.text;
        //}
        //console.log("onTextChange LAST");
        //console.log(args)
        
    }


    public selectedIndexChanged(args) {
        // Connect to the List Picker object
        let picker = <ListPicker>args.object;
        //console.log("picker selection: " + picker.selectedIndex);
        // Save the values for later storage if SAVE selected
        // Picked is the Text of what was chosen
        this.picked = this.rideoptions[picker.selectedIndex];
        // Put picked text into ridelength
        this.ridelength = this.picked;
        // Put the selected index into a variable - best to save it for re-entry
        this.rideselectedindex = picker.selectedIndex;

    }

    // SAVE BUTTON
    //######################################
    onTap(args: EventData) {
        let button = <Button>args.object;

        //this.counter++;
        //alert("Tapped save times! F:" + this.firstname + "L:" + this.lastname);

        // Place the data into Local Storage within the device
        appSettings.setString("firstname",this.firstname);
        appSettings.setString("lastname",this.lastname);
        appSettings.setString("ridelength",this.ridelength);
        //console.log("Saved Ridelenght as " + this.ridelength);
        appSettings.setNumber("rideselectedindex", this.rideselectedindex);


        // Update Kinvey Cloud data values (Update the active users data)
        // Promise.resolve(Kinvey.User.getActiveUser())
        //     .then((user: Kinvey.User) => {
        //     if (user) {
        //         return user.update({
        //         last: this.lastname,
        //         first: this.firstname,
        //         ridelength: this.ridelength
        //         });
        //     }
        //         // If we get a result from Kinvey, Save it locally
        //         appSettings.setString("username", user.username);
        //         appSettings.setString("user_id", user._id);
        //         return user;
        //     })
        //         .then((user: Kinvey.User) => {
        //             // ...
        //             console.log("KINSEY USER EXISTS or FAIL???");
        //             //this.router.navigate(["home"]);
        //             console.log("After Router..")
        //     })
        //         .catch((error: Kinvey.BaseError) => {
        //         // ...
        //         console.log("Kinsey Error " + error);
        //     });

        //console.log("USER IS ::::" + Kinvey.User);

        // Take us back to The Main Page - Home
        //this.router.navigate(["home"]);
        this.router.back();
        //console.log("After SAVE");
    }


    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.

        //console.log("#########################################################");

        this.firstname = appSettings.getString("firstname", "");
        this.lastname = appSettings.getString("lastname", "");
        this.ridelength = appSettings.getString("ridelength", "");
        this.rideselectedindex = appSettings.getNumber("rideselectedindex", 0);

        //console.log("ALL DATA = " + this.firstname + "~" + this.lastname + "~" + this.ridelength + "~" + this.rideselectedindex);

        
    }
}
