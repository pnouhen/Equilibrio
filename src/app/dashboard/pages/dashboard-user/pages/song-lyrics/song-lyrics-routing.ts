import { RouterModule, Routes } from "@angular/router";
import { SongLyricsComponent } from "./song-lyrics/song-lyrics.component";
import { NgModule } from "@angular/core";


const route: Routes =[
    {path: '', component: SongLyricsComponent}
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class SongLyricsRoutingModule {}