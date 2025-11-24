import { RouterModule, Routes } from '@angular/router';
import { LegalesMentionsComponent } from './components/legales-mentions/legales-mentions.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: LegalesMentionsComponent }];

@NgModule ({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class LegalesMentionsRoutingModule {}