import { Component, OnInit } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scene-grid',
  templateUrl: './scene-grid.component.html',
  styleUrls: ['./scene-grid.component.css']
})
export class SceneGridComponent implements OnInit {

  constructor(private sceneService: SceneDataService) { }

  ngOnInit() {
  	this.sceneService.getAll().subscribe(sceneData => {
  		console.log(sceneData.scenes)
  		this.sceneService.allScences = sceneData.scenes;

  	})
  }

}
