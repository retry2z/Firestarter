import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [DetailPageComponent, ListPageComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class CustomersModule { }
