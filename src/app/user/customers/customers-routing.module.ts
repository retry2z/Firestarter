import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes: Routes =
    [
        {
            path: '',
            canActivate: [
                AuthGuard
            ],
            data: {
                isLogged: true,
            },
            children: [
                {
                    path: 'profile',
                    pathMatch: 'full',
                    component: ProfileComponent,
                },
                {
                    path: 'logout',
                    component: LogoutComponent,
                },
            ],
        }

    ];


export const CustomersRoutingModule = RouterModule.forChild(routes);
