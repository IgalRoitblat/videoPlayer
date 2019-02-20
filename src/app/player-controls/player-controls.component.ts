import { Component, OnInit } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.css']
})
export class PlayerControlsComponent implements OnInit {
  public interval: any = null;
  constructor(private sceneService: SceneDataService) { }

  onPlay(e) {
    this.sceneService.selectedScenes[0].forEach(scene => {
      this.sceneService.updateElapsedTimeWatcher(this.sceneService.timeElapsed);
      this.sceneService.showClip(scene.elements);
    })
  	this.interval = setInterval(() => {
  		this.sceneService.timeElapsed = this.sceneService.timeElapsed + 100;
      this.sceneService.updateElapsedTimeWatcher(this.sceneService.timeElapsed);
      this.sceneService.selectedScenes[0].forEach(scene => {
        this.sceneService.showClip(scene.elements);
        this.sceneService.hideClip(scene.elements);
      })
      if (this.sceneService.timeElapsed === this.sceneService.totalVideoDuration) {
        this.rewind();
      }
	  }, 100);
  }

  onPause(e) {
    clearInterval(this.interval)
  }

  rewind() {
    clearInterval(this.interval);
    this.sceneService.timeElapsed = 0;
  }

  ngOnInit() {
  }

}
