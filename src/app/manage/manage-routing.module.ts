import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageEditComponent } from './manage-edit/manage-edit.component';
import { ManageReadComponent } from './manage-read/manage-read.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {path: '', redirectTo: 'view/all', pathMatch: 'full'},
  {path: 'view/all', component: ManageComponent},
  {path: ':action/:id', component: ManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
