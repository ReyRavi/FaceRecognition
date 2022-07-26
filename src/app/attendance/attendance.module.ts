import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttendancePage } from './attendance.page';
import { ConfirmComponent } from '../confirm/confirm.component';
import { NonconfirmComponent } from '../nonconfirm/nonconfirm.component';

const routes: Routes = [
  {
    path: '',
    component: AttendancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [AttendancePage,ConfirmComponent,NonconfirmComponent],
  entryComponents: [ConfirmComponent,NonconfirmComponent],
})
export class AttendancePageModule {}
