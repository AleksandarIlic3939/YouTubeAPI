import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  constructor() { }

  public getEmbedLink(link: any) {
    let ID = '';
    link = link.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(link[2] !== undefined) {
      ID = link[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = link;
    }
    return 'https://www.youtube.com/embed/' + ID;
  }
    
}