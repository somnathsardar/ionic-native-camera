# ionic-3 native camera
This is a simple ionic app implemented using ionic native plugin for learning purpose. 

* For this project install the following cordova native camera plugin

`ionic cordova plugin add cordova-plugin-camera`

* But run the following npm install command for native camera

`npm install @ionic-native/camera@4.20.0`

* Now in ### app.module.ts file include the following line-

`import { Camera } from '@ionic-native/camera'`

Also add the following code ### providers[Camera] in providers array
