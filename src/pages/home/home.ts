import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Options : CameraOptions = {
    quality: 100, // picture quality
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  capturedImage:any;

  constructor(public navCtrl: NavController, private camera: Camera) {}

  captureImage(){
    this.camera.getPicture(this.Options) .then((imageData) => {
      this.capturedImage = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log('Error Meaasge',err);
    });
  }
}
