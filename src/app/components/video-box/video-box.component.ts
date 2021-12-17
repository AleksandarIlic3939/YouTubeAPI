import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/models/video';
import { YouTubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.css']
})

export class VideoBoxComponent implements OnInit {

  @Output() videoToDelete: EventEmitter<Video>;
  @Output() updateVideo: EventEmitter<Video>;
  
  public link: any;
  @Input() video: any;

  constructor(private _sanitizer: DomSanitizer, private _youtubeService: YouTubeService) { 
    this.videoToDelete = new EventEmitter();
    this.updateVideo = new EventEmitter();
   }

  ngOnInit() {
    this.embedUrl();
  }

  public embedUrl() {
    this.link = this._sanitizer.bypassSecurityTrustResourceUrl(this._youtubeService.getEmbedLink(this.video.link));
  }

  public deleteVideo(): void {
    this.videoToDelete.emit(this.video);
  }

  public changeContent(): void {
    this.updateVideo.emit(this.video);
  }

}