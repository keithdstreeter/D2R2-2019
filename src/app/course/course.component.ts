import { Component, OnInit } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
import { CueService } from "./180k.service";

@Component({
    selector: "Course",
    moduleId: module.id,
    templateUrl: "./course.component.html",
    styleUrls: ['./course.component.css'],
    providers: [CueService]
})
export class CourseComponent implements OnInit {

    //data = Cuesheet;
    data: Array<any>;
    public ridelength: string = "";

    constructor(cueService: CueService) {

        this.ridelength = appSettings.getString("ridelength", "");
        //console.log("Passing in " + this.ridelength);
        this.data = cueService.cuedata(this.ridelength);
        // console.log("DATA IS " + this.data);
    } 

    ngOnInit(): void {

        this.ridelength = appSettings.getString("ridelength", "");
        //console.log("Just read in value for ridelength " + this.ridelength);

        // console.log("Passing in " + this.ridelength);
        // this.data = cueService.cuedata(this.ridelength);
        // console.log("DATA IS " + this.data);
    }

    public onTapSetSelected(item) {
        //console.log("Item TAP");
        item.isSelected = !item.isSelected;
        // Refresh? - Not Required


    }

    public templateSelector(item) {
        return item.itemType;
    }
}



// // >> course-code
// import { Component, ChangeDetectionStrategy } from "@angular/core";
// import { Observable as RxObservable } from "rxjs";

// export class DataItem {
//     constructor(public id: number, public name: string) { }
// }

// @Component({
//     moduleId: module.id,
//     styleUrls: ["./course.component.css"],
//     templateUrl: "./course.component.html",
//     changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class CourseComponent {
//     public myItems: RxObservable<Array<DataItem>>;

//     constructor() {
//         let items = [];
//         for (let i = 0; i < 3; i++) {
//             items.push(new DataItem(i, "data item " + i));
//         }

//         let subscr;
//         this.myItems = RxObservable.create(subscriber => {
//             subscr = subscriber;
//             subscriber.next(items);
//             return function () {
//                 console.log("Unsubscribe called!");
//             };
//         });

//         let counter = 2;
//         let intervalId = setInterval(() => {
//             counter++;
//             items.push(new DataItem(counter + 1, "data item " + (counter + 1)));
//             subscr.next(items);
//         }, 1000);

//         setTimeout(() => {
//             clearInterval(intervalId);
//         }, 15000);
//     }
// }
// // << course-code


// // import { Component, OnInit } from "@angular/core";

// // @Component({
// //     selector: "Course",
// //     moduleId: module.id,
// //     templateUrl: "./Course.component.html"
// // })
// // export class CourseComponent implements OnInit {
// //     constructor() {
// //         // Use the component constructor to inject providers.
// //     }

// //     ngOnInit(): void {
// //         // Use the "ngOnInit" handler to initialize data for the view.
// //     }
// // }
