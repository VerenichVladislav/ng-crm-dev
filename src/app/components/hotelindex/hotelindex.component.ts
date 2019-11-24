import { Component, OnInit } from '@angular/core';
import { GapiSession } from 'src/app/google-service/GapiSession';

@Component({
  selector: 'app-hotelindex',
  templateUrl: './hotelindex.component.html',
  styleUrls: ['./hotelindex.component.css']
})
export class HotelindexComponent implements OnInit {

  constructor() {
   
  }
  uploadFile(){
    var fileMetadata = {
      'name': 'photo.jpg'
    };
    var fs = require('file-system');
    var media = {
      mimeType: 'pexels-photo-373893.jpeg',
      body: fs.createReadStream('assets/img/pexels-photo-373893.jpeg')
    };
   gapi.client.drive.files.create({
      resource: fileMetadata,
      fields: 'id'
    },)
  }
  ngOnInit() {
   this.uploadFile();
  }

}
