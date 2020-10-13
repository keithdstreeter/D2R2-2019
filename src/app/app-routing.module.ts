import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { SettingsComponent } from "./settings/settings.component";
import { CourseComponent } from "./course/course.component";
import { MapComponent } from "./map/map.component";

// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from "./home/home.component";

// List every new Page to be Routed to here !
// ##########################################
export const COMPONENTS = [BrowseComponent, SettingsComponent, CourseComponent, MapComponent];

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    //{ path: "item/:id", component: ItemDetailComponent }
    { path: "flub", component: BrowseComponent },
    { path: "settings", component: SettingsComponent },
    { path: "course", component: CourseComponent},
    { path: "map", component: MapComponent},
    { path: "maploaded", loadChildren: "./map/map.module#MapModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
