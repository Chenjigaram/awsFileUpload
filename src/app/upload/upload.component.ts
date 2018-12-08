import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { AWSService } from '../services/aws.service';
import {BUCKET_NAME} from '../services/aws.constants';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  image:any;
  s3:any;
  constructor(private awsService:AWSService) { 
    this.s3 = this.awsService.createAWS();
  }

  ngOnInit() {
  }

  fileEvent(fileInput: any) {
    const file = fileInput.target.files[0];
    if(file){
      this.image = file.name;
      this.s3.upload({ Key: file.name, Bucket: BUCKET_NAME, Body: file, ACL: 'public-read'}, function (err, data) {
        if (err) {
          console.log(err, 'there was an error uploading your file');
        }
      });
    }
  }


}
