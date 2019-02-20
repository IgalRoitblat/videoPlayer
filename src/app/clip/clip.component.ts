import { Component, OnInit, Input } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {
  @Input() clip: any;
  @Input() sceneType: string;
  @Input() sceneId: string;
  public imageWillLoad: boolean = true;
  public clipDuration: object = {};
  public style: object = null;
  public clipRemoved: boolean = false;

  constructor(private sceneService: SceneDataService) { }

  clipHasPreviewImage() {
  	return this.clip.type !== "text" ? true : false;
  }

  previewElementSwap(e) {
  	this.imageWillLoad = false;
  }

  shouldVideoAutoplay() {
    return this.sceneType === "playable" ? true : false
  }

  onClick(e, clipId) {
    if (this.sceneType === "preview") {
      this.clipRemoved === false ? this.removeClip(clipId) : this.addClip(clipId)
    }
  }

  removeClip(clipId) {
    let sceneToRemoveFromIndex = null;
    let clipToRemoveIndex = null;
    sceneToRemoveFromIndex = this.sceneService.selectedScenes[0].map(scene => scene.id).indexOf(this.sceneId);
    clipToRemoveIndex = this.sceneService.selectedScenes[0][sceneToRemoveFromIndex].elements.map(clip => clip.id).indexOf(clipId);
    this.sceneService.selectedScenes[0][sceneToRemoveFromIndex].elements.splice(clipToRemoveIndex, 1);
    this.clipRemoved = true;
  }

  addClip(clipId) {
    let sceneToAddToIndex = null;
    let clipToAddIndex = null;

    sceneToAddToIndex = this.sceneService.allScences.map(scene => scene.id).indexOf(this.sceneId);
    clipToAddIndex = this.sceneService.allScences[sceneToAddToIndex].elements.map(clip => clip.id).indexOf(clipId);
    this.sceneService.allScences[sceneToAddToIndex].elements[clipToAddIndex] = this.sceneService.addClipDisplayProps(this.sceneService.allScences[sceneToAddToIndex].elements[clipToAddIndex]);
    this.sceneService.selectedScenes[0][sceneToAddToIndex].elements.push(this.sceneService.allScences[sceneToAddToIndex].elements[clipToAddIndex]);
    this.sceneService.mergeScenes(this.sceneService.selectedScenes[0]);
    console.log(this.sceneService.selectedScenes[0]);
    this.clipRemoved = false;
  }

  ngOnInit() {
    this.clipDuration = this.sceneService.convertMStoMS(this.clip);
    this.sceneType === 'playable' ? this.style = this.clip : "";
    this.imageWillLoad = this.clipHasPreviewImage();
  }

}
