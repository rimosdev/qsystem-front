import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage/manage.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';
import { ManageReadComponent } from './manage-read/manage-read.component';
import { DataTablesService } from './services/data-tables.service';
import { HttpService } from '../services/http.service';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    CommonsModule,
    FormsModule
  ],
  providers: [DataTablesService, HttpService],
  declarations: [ManageComponent, ManageEditComponent, ManageReadComponent]
})
export class ManageModule { }
