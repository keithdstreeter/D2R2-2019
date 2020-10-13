import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application/application";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
import { MapService } from "./map.service";


// ADDED FOR MAPPING
import { registerElement } from "nativescript-angular/element-registry";
import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";
//import { AddressOptions, Directions } from "nativescript-directions";
import { RouterExtensions } from "nativescript-angular";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
  selector: "Map",
  moduleId: module.id,
  templateUrl: "./map.component.html",
  styleUrls: ["map.component.css"],
  providers: [MapService]
})
export class MapComponent implements OnInit {

  private map: MapboxViewApi;
  data: Array<any>;
  public ridelength: string = "";


//   constructor() {
// //super(appComponent, routerExtensions);
// //this.directions = new Directions();
// }
  constructor(private mapService: MapService) {
    // Use the component constructor to inject providers.
    //this.ridelength = appSettings.getString("ridelength", "");
    //console.log("Passing in " + this.ridelength);
    //this.data = mapService.mapdata(this.ridelength);
    // console.log("DATA IS " + this.data);

  }

  ngOnInit(): void {
    // Init your component properties here.
    this.ridelength = appSettings.getString("ridelength", "");
        //console.log("Just read in value for ridelength " + this.ridelength);

  }

//   onDrawerButtonTap(): void {
//     const sideDrawer = <RadSideDrawer>app.getRootView();
//     sideDrawer.showDrawer();
//   }

  //latitude="42.6444499"
  //longitude="-72.5876527"

  onMapReady(args): void {
    this.map = args.map;
    this.data = this.mapService.mapdata(this.ridelength);
    this.map.trackUser({mode: "FOLLOW_WITH_COURSE", animated:false});

    console.log("RIGHT BEFORE DOWNLOAD");
  
    this.map.getViewport().then(function(viewport) {
      this.map.downloadOfflineRegion(
        {
          name: "D2R2Viewport", // anything you like really
          sources: {
            "mapbox-streets": {
              "url": "mapbox://mapbox.mapbox-streets-v7",
              "type": "vector"
            }
          },
          style: "mapbox://styles/mapbox/navigation-guidance-day-v2",//this.map.MapStyle.Outdoors,
          //minZoom: viewport.zoomLevel,
          //maxZoom: viewport.zoomLevel + 2, // higher zoom level is lower to the ground
          //bounds: viewport.bounds,
          minZoom: 9,
      maxZoom: 15,
      bounds: {
        north: 42.89019,
        east: -72.46283,
        south: 42.37562,
        west: -72.97377
      },
          onProgress: function (progress) {
            console.log("Download %: " + progress.percentage);
          }
        }
      );
    });

  //   args.map.downloadOfflineRegion({      
  //     accessToken: "pk.eyJ1Ijoia2RzMTAwIiwiYSI6ImNqNXRtcG5hbjFqeGwyd21rYjVkOHZ2M3cifQ.UjT55NR3hZnaSPZa-Kq3Iw",
  //     name: "D2R2All", // this name can be used to delete the region later
  //     style: "mapbox://styles/mapbox/light-v9",
  //     minZoom: 9,
  //     maxZoom: 15,
  //     bounds: {
  //       north: 42.89019,
  //       east: -72.46283,
  //       south: 42.37562,
  //       west: -72.97377
  //     },
  //     // this function is called many times during a download, so
  //     // use it to show an awesome progress bar!
  //     onProgress: function (progress) {
  //       //console.log("Download progress: " + JSON.stringify(progress));
  //     }
  //   }
  // ).then(
  //   function() {
  //     console.log("Offline region downloaded");
  //   },
  //   function(error) {
  //     console.log("Download error: " + error);
  //   });


    this.map.addPolyline({
      id: 1, // optional, can be used in 'removePolylines'
      color: '#FF0303', // Set the color of the line (default black)
      width: 6, // Set the width of the line (default 5)
      opacity: 0.2, //Transparency / alpha, ranging 0-1. Default fully opaque (1).
      points: this.data
    
    });


    this.map.addMarkers([
      {
        id: 1,
        lat: 42.524277,
        lng: -72.613643,
        title: 'D2R2 Headquarters',
        subtitle: 'Mill Village Rd. & Childs Cross Rd.',
        onTap: () => {
          //console.log("Barton Abbey Location was tapped");
        },
        onCalloutTap: () => {
          //console.log("Barton Abbey callout tapped");
        }
      },


    ]
    );
  }
}
