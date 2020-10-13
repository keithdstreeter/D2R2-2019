import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { registerElement } from "nativescript-angular/element-registry";
//import { CardView } from "nativescript-cardview";
import { CardView } from '@nstudio/nativescript-cardview';
registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})



export class HomeComponent implements OnInit {
    buttonroutes = [];

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    onTappedFun(item):void {
        //let button = buttonName;
        //console.log("Hey i was tapped");
        //console.log(item.title);
        // if(item.title = "Ride"){
            if(item.title == "Settings"){
                this.router.navigate(["settings"]);
            } else if (item.title == "Ride"){
                this.router.navigate(["course"]);
            } else if (item.title == "Cue"){
                this.router.navigate(["ride"]);
            } else if (item.title == "Map"){
                this.router.navigate(["map"]);
            }
            else {
                this.router.navigate(["flub"]);
            }
     
        // }
    }
  
//     onTappedHome(){
//         console.log("Hey i was HOME");
//     }
//     onTappedDroplet(){
//         console.log("Hey i was DROPLET");
//         //const nextroute:string = "flub";
// let nextroute = "flub";
// this.router.navigate([nextroute]);

//         //this.router.navigate(["flub"]);
//     }

    ngOnInit(): void {
        // Init the CardView Action Buttons
        // ################################
        
        this.buttonroutes.push({title: "Ride", route: "ride", iconname: "gear"});
        this.buttonroutes.push({title: "Map", route: "map", iconname: "map"});
        this.buttonroutes.push({title: "Settings", route: "settings", iconname: "equalizer"});
        this.buttonroutes.push({title: "Emergency", route: "flub", iconname: "home3"});
        //this.buttonroutes.push({title: "Here We Go", route: "", iconname: ""});
        //this.buttonroutes.push({title: "Button NA", route: "flub", iconname: ""});

    }
}
