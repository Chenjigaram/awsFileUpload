import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import MaterialModules from '../material.modules';
import { UploadComponent } from './upload/upload.component';
import { AWSService } from './services/aws.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,routing,
    BrowserAnimationsModule,MaterialModules
  ],
  providers: [AWSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
