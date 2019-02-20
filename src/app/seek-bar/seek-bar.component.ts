import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SceneDataService } from '../Services/scene-data.service';

@Component({
  selector: 'app-seek-bar',
  templateUrl: './seek-bar.component.html',
  styleUrls: ['./seek-bar.component.css']
})
export class SeekBarComponent implements OnInit {
  @ViewChild('progress') progress: ElementRef;
  @ViewChild('seekBar') seekBar: ElementRef;

  constructor(private sceneService: SceneDataService) { }

  onClick(e) {
  	let offset = this.seekBar.nativeElement.offsetLeft;
  	let left = e.pageX - offset;
  	let totalWidth = this.seekBar.nativeElement.offsetWidth;
  	let percentage = ( left / totalWidth );
  	let vidTime = this.sceneService.totalVideoDuration * percentage;
  	vidTime = (~~((vidTime + 99) / 100) * 100)
  	console.log(vidTime)
  	this.sceneService.timeElapsed = vidTime;
  }

  ngOnInit() {
  	this.sceneService.elapsedTimeWatcher.subscribe(timeElapsed => {
  		let percentage = (timeElapsed / this.sceneService.totalVideoDuration) * 100;
  		this.progress.nativeElement.style.width = percentage + "%";
  	})
  }
}
