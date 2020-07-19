import { Component, OnInit, Input } from '@angular/core';
import reframe from 'reframe.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() videoId: string;
  @Input() addVideo: Function;

  public reframed: Boolean = false;

  ngOnInit() {
    this.addVideo({
      videoId: this.videoId,
      events: {
        'onError': (e) => {
          this.onPlayerError(e);
        },
        'onReady': (e) => {
          if (!this.reframed) {
            this.reframed = true;
            reframe(e.target.A);
            document.getElementById(`design-video-${this.videoId}`).classList.remove('hidden');
          }
        }
      }
    })
  }

  onPlayerError = (event) => {
    console.error(`Error playing video: ${this.videoId}`);
    console.error('Error event: ', event);
  };
}
