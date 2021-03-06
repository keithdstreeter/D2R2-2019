import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable as RxObservable } from "rxjs";

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: "Ride",
    moduleId: module.id,
    templateUrl: "./ride.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RideComponent {
    
    public myItems: RxObservable<Array<DataItem>>;

    constructor() {
        let items = [];
        for (let i = 0; i < 3; i++) {
            items.push(new DataItem(i, "data item " + i));
        }

        let subscr;
        this.myItems = RxObservable.create(subscriber => {
            subscr = subscriber;
            subscriber.next(items);
            return function () {
                //console.log("Unsubscribe called!");
            };
        });

        let counter = 2;
        let intervalId = setInterval(() => {
            counter++;
            items.push(new DataItem(counter + 1, "data item " + (counter + 1)));
            subscr.next(items);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 15000);
    }
}
