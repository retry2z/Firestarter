import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes =
    [
        {
            path: '',
            children: [
                {
                    path: 'profile',
                    component: ProfileComponent,
                },
                {
                    path: 'upload',
                    component: ImageUploadComponent,
                },
            ],
        }

    ];


export const CustomersRoutingModule = RouterModule.forChild(routes);
