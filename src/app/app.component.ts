import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Video } from 'src/app/models/video';
import { YouTubeSearchService } from './youtube-search/youtube-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public postForm: FormGroup;
  
  title = 'IT255-DZ09';
  searchText: string = '';

  public videos: Video[] = [];
  private _links: string[] = [
    'YiUQE5bJKFU',
    'B32yjbCSVpU',
    'yG0oBPtyNb0',
    'f7McpVPlidc',
    'qhZULM69DIw',
    'wvUQcnfwUUM'
  ];


  constructor(private youTubeSearchService: YouTubeSearchService){
    for(let i = 0; i < 6; i++) {
      this.videos.push(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[i], this._generateLength()))
    }
  }

  private _generateString(length: any) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 private _generateLength() : number {
   let random = Math.floor((Math.random() * 29) + 1);
    return random;
 }

  public deleteVideo(video: Video) {
    this.videos = this.videos.filter(item => { 
      return item.title !== video.title
    })
  }

  public updateVideo(video: Video) {
    let index = this.videos.findIndex(i => i.title === video.title);
    this.videos[index].title = this._generateString(6);
  }

  public addVideo(video: Video) {
    this.videos.push(video);
  }

  sortedByTimeDesc() {
    let length = this.videos.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        let temp;
        if (this.videos[j].duration > this.videos[i].duration) {
          temp = this.videos[i];
          this.videos[i] = this.videos[j];
          this.videos[j] = temp;
        }
      }
    }
  
    return this.videos;
  }

  sortedByTimeAsc() {
    let length = this.videos.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        let temp;
        if (this.videos[j].duration < this.videos[i].duration) {
          temp = this.videos[i];
          this.videos[i] = this.videos[j];
          this.videos[j] = temp;
        }
      }
    }
  
    return this.videos;
  }

  public findVideo(title: string) {
    this.youTubeSearchService.search(title).subscribe((items: any) => {
      this.videos = items.map(item => {
        return {
          title: item.snippet.title,
          link: item.snippet.thumbnails.high.url,
          description: item.snippet.description,
          duration: this._generateLength()
        }
      })
    })
  }

  public initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }

}
