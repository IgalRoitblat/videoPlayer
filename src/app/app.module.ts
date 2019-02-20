import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SceneGridComponent } from './scene-grid/scene-grid.component';
import { SceneComponent } from './scene/scene.component';
import { ProgramComponent } from './program/program.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipComponent } from './clip/clip.component';
import { PlayerBodyComponent } from './player-body/player-body.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { SeekBarComponent } from './seek-bar/seek-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    SceneGridComponent,
    SceneComponent,
    ProgramComponent,
    ClipComponent,
    PlayerBodyComponent,
    PlayerControlsComponent,
    SeekBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
