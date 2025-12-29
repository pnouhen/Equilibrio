import { ManageResourcesModule } from './manage-resources-module';
import { RouterModule, Routes } from "@angular/router";
import { ManageResourcesComponent } from "./components/manage-resources/manage-resources.component";
import { NgModule } from "@angular/core";


const route: Routes = [{
    path: '',
    component: ManageResourcesComponent
}]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class ManageResourcesRoutingModule {}