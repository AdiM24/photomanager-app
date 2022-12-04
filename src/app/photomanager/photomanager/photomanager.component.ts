import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photomanager',
  templateUrl: './photomanager.component.html',
  styleUrls: ['./photomanager.component.css'],
})
export class PhotomanagerComponent {
  shouldComponentUpdate = false;

  uploadedPhoto(event: any) {
    console.log('here');
    this.shouldComponentUpdate = true;
    // this.shouldComponentUpdate = false;
  }
}
