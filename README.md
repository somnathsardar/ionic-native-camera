# ionic-3 native camera
This is a simple ionic app implemented using ionic native plugin for learning purpose. 

<br>

### First add the corova platform to your project
To add android platform run `ionic cordova platform add android` and to add ios platform run `ionic cordova platform add ios`

### Install the following cordova native camera plugin

`ionic cordova plugin add cordova-plugin-camera`

### Now run the following npm install command for native camera

`npm install @ionic-native/camera@4.20.0`

### Now in `app.module.ts` file include the following line-

`import { Camera } from '@ionic-native/camera'`

Also add the following code `providers: [Camera]` in providers array in `app.module.ts` file

### Now in your componet's ts file add the following code-

```
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
```

### Now in your componet's html file add the following code-

```
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Ionic Camera
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <button ion-button (click)="captureImage()" full>Take Photo</button>
  <img src="{{capturedImage}}" alt="Image" *ngIf="capturedImage">
</ion-content>
```
