import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  { path: '', redirectTo: '/request', pathMatch: 'full'},
  { path: 'manage',    loadChildren: 'app/manage/manage.module#ManageModule' },
  { path: 'request',    loadChildren: 'app/requests/requests.module#RequestsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
