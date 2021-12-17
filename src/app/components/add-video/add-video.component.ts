import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  public videoForm: FormGroup;
    
  @Output() videoToAdd: EventEmitter<Video>;
  
  constructor() {
    this.videoToAdd = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.videoForm = new FormGroup({
      'title': new FormControl(null, [
        Validators.required
      ]),
      'link': new FormControl(null, [
        Validators.required
      ]),
      'description': new FormControl(null, [
        Validators.required
      ]),
      'duration': new FormControl(null, [
        Validators.required
      ])
    });
  }

  public submitForm() {
    let title = this.videoForm.get('title').value;
    let link = this.videoForm.get('link').value;
    let description = this.videoForm.get('description').value;
    let duration = this.videoForm.get('duration').value;
    let video = new Video(title, description, link, duration);
    this.videoToAdd.emit(video);
  }

  get title() {
    return this.videoForm.get('title');
  }

  get link() {
    return this.videoForm.get('link');
  }

  get description() {
    return this.videoForm.get('description');
  }

  get duration() {
    return this.videoForm.get('duration');
  }

}
