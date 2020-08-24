import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes =
    [
        {
            path: '',
            canActivate: [
               // AuthGuard
            ],
            data: {
                isLogged: true,
            },
            children: [
                {
                    path: 'profile',
                    component: ProfileComponent,
                },
            ],
        }

    ];


export const CustomersRoutingModule = RouterModule.forChild(routes);
