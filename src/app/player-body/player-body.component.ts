import { Component, OnInit } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-body',
  templateUrl: './player-body.component.html',
  styleUrls: ['./player-body.component.css']
})
export class PlayerBodyComponent implements OnInit {
  constructor(private sceneService: SceneDataService) { }

  ngOnInit() {
  	this.sceneService.getAll().subscribe((sceneData) => {
      this.sceneService.selectedScenes.push(sceneData.scenes);
      this.sceneService.mergeScenes(this.sceneService.selectedScenes[0]);
  	})
  }
}
