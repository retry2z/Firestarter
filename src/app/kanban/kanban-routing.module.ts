import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardListComponent } from './board-list/board-list.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '', component: BoardListComponent,
    canActivate: [AngularFireAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
