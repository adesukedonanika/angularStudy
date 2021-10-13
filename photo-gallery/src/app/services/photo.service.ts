import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {



  constructor() { }


  add(a:number, b:number):number{
    console.log(a*b)
    return a*b;
  }


public async addNewToGallery() {
  // 写真撮影
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100 
  });
}



}
