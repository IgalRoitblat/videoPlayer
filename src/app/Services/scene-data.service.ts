import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SceneDataService {
  public getSceneData: string = "../assets/clip.json";
  public selectedScenes: any = [];
  public allScences: any = [];
  public timeElapsed: number = 0;
  public sceneStartTime: number = 0;
  public totalVideoDuration: number = 0;
  public currentTimeElapsed:string = "";
  public elapsedTimeWatcher = new Subject<number>();
  constructor(private http:HttpClient) { }

  getAll() {
  	return this.http.get<{scenes}>(this.getSceneData);
  }

  updateElapsedTimeWatcher(val) {
    this.elapsedTimeWatcher.next(val);
  }

  convertMStoMS(clip) {
  	let day, hour, minute, seconds;
  	seconds = Math.floor(clip.duration / 1000);
  	minute = Math.floor(seconds / 60);
  	seconds = seconds % 60;
  	hour = Math.floor(minute / 60);
  	minute = minute % 60;
  	day = Math.floor(hour / 24);
  	hour = hour % 24;
  	return {minute: String(minute), seconds: String(seconds)};
  };

  calculateTotalSceneDuration(scene) {
    let sceneDuration = 0;
    scene.forEach(clip => (clip.startTime + clip.duration > sceneDuration) ? sceneDuration = sceneDuration + (clip.startTime + clip.duration - sceneDuration) : "");
    return sceneDuration;
  }

  mergeScenes(selectedScences) {
    this.timeElapsed = 0;
    this.sceneStartTime = 0;
    selectedScences.forEach((clip, index) => {
      selectedScences[index] = {...clip, totalSceneDuration: this.calculateTotalSceneDuration(clip.elements)}
    });

    selectedScences.forEach((scene, sceneIndex) => {
      scene.elements.forEach((element, elementIndex) => {
        selectedScences[sceneIndex].elements[elementIndex] = this.addClipDisplayProps(selectedScences[sceneIndex].elements[elementIndex]);
        sceneIndex > 0 ? selectedScences[sceneIndex].elements[elementIndex].modifiedStartTime = element.startTime + this.sceneStartTime : selectedScences[sceneIndex].elements[elementIndex].modifiedStartTime = element.startTime;
      });
      this.sceneStartTime = this.sceneStartTime + scene.totalSceneDuration;
    });
    this.totalVideoDuration = selectedScences.reduce((acc, scene) => acc + scene.totalSceneDuration, 0);
    this.currentTimeElapsed = String((this.timeElapsed / this.totalVideoDuration) * 100) + "%";
  }

  showClip(clip) {
    console.log(clip)
    clip.forEach(element => {
      if (this.timeElapsed === element.modifiedStartTime || this.timeElapsed < (element.modifiedStartTime + element.duration)) {
        element.display = "block";
        element.visible = true;
      };
    })
  }

  hideClip(clip) {
    clip.forEach(element => {
      if (this.timeElapsed > (element.modifiedStartTime + element.duration) || this.timeElapsed === (element.modifiedStartTime + element.duration) || this.timeElapsed < element.modifiedStartTime ) {
        element.display = "none";
        element.visible = false;
      }
    })
  }

  addClipDisplayProps(clip) {
    return {...clip, display: "none", visible: false, position: "absolute", modifiedStartTime: 0}
  }
}
