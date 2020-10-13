import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

//import { HomeRoutingModule } from "./home-routing.module";
import { MapComponent } from "./map.component";
//import { FloatLabel } from "~/float-label/float-label.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        //HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MapComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule { }