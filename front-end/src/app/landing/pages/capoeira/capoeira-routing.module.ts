import { RouterModule, Routes } from '@angular/router';
import { CapoeiraModule } from './capoeira-module';
import { NgModule } from '@angular/core';
import { CapoeiraComponent } from './components/capoeira/capoeira.component';

const route: Routes = [{ path: '', component: CapoeiraComponent }];

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class CapoeiraRoutingModule {}