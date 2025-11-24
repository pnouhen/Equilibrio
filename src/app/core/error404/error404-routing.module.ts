import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./components/error404/error404.component";
import { NgModule } from "@angular/core";


const route: Routes = [
      { path: '', component: Error404Component },
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class Error404RoutingModule {}