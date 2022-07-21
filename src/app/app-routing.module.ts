import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { NavController } from '@ionic/angular';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './User/profile/profile.module#ProfilePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'addems', loadChildren: './addems/addems.module#AddemsPageModule' },
  { path: 'attendance', loadChildren: './attendance/attendance.module#AttendancePageModule' },
  { path: 'projectmanagement', loadChildren: './projectmanagement/projectmanagement.module#ProjectmanagementPageModule' },
  { path: 'leavemanagement', loadChildren: './leavemanagement/leavemanagement.module#LeavemanagementPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private navCtrl: NavController, private router: Router) {
    this.navCtrl.navigateRoot(['/login']);
  }
}
