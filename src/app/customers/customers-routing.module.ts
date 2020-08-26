import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: ':id', component: DetailPageComponent }
];

export const CustomersRoutingModule = RouterModule.forChild(routes);