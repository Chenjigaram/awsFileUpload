import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules }from '../material.modules';
import { UploadComponent } from './upload/upload.component';
import { AWSService } from './services/aws.service';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,routing,FormsModule,
    BrowserAnimationsModule,MaterialModules
  ],
  providers: [AWSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
