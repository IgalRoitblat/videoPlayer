import { Component, OnInit, Input } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() scene: any;
  @Input() sceneType: string;
  @Input() index: number;
  public timeElapsed: number = 0;
  public sceneDuration: number = 0;
  constructor(private sceneService: SceneDataService) { }

  ngOnInit() {
  }

}
