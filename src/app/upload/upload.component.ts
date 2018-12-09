import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as AWS from 'aws-sdk';
import { AWSService } from '../services/aws.service';
import {BUCKET_NAME} from '../services/aws.constants';
import { int } from 'aws-sdk/clients/datapipeline';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  image:any;
  color:string="jjj";
  s3:any;
  progressBar:int=0;
  uploadStart:boolean = false;
  uploadedFile:any;
  constructor(private awsService:AWSService,public dialog: MatDialog) { 
    this.s3 = this.awsService.createAWS();
    
  }

  ngOnInit() {
  }

  fileEvent(fileInput: any) {
    
    this.progressBar = 0;
     this.uploadedFile = fileInput.target.files[0];
    if(this.uploadedFile){
      this.readURL(this.uploadedFile)
    }
  }
  uploadImage(){
    this.uploadStart = true;
    this.s3.putObject({ Key: new Date().valueOf()+this.uploadedFile.name, Bucket: BUCKET_NAME, Body: this.uploadedFile}).on('httpUploadProgress',  (progress) => 
        this.progressBar = Math.ceil((progress.loaded/progress.total)*100)).send( (err, data) => {
          this.uploadStart = false;
          if (err) {
            console.log(err);
            this.dialog.open(DialogComponent, {
              width: '300px',
              data: "Sorry, error occured we are working on it"
            });
          } else {
            this.dialog.open(DialogComponent, {
              width: '300px',
              data: "Image Uploaded Sucessfully"
            });
            this.image = null;
          }
      });
  }
  readURL(file) {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.image = reader.result;
        }
        reader.readAsDataURL(file);
  }
}
