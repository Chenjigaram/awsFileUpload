
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';


const appRoutes: Routes = [
    { path: 'upload', component: UploadComponent },

    // otherwise redirect to upload
    { path: '**', redirectTo: 'upload' }
];

export const routing = RouterModule.forRoot(appRoutes);
