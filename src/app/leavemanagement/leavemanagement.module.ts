import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeavemanagementPage } from './leavemanagement.page';

const routes: Routes = [
  {
    path: '',
    component: LeavemanagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeavemanagementPage]
})
export class LeavemanagementPageModule {}
