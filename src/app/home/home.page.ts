import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  managements: any = [];
  routeParams: any;
  background = "/assets/imgs/eat.gif";

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
        this.managements = [
          { name: 'Employee Master', description: 'Here you can see the customer information who have subsribed your business.', icon: 'assets/icon/master.svg', url: 'addems' },
          { name: 'Attendance', description: 'Here you can put your food items to the menu of the shop.', icon: 'assets/icon/attendance.svg', url: 'attendance' },
          { name: 'Project Management', description: 'Here you can assign the delivery person and can view about the order.', icon: 'assets/icon/project.svg', url: 'projectmanagement' },
          { name: 'Leave Management', description: 'Here you can put when the order is ready and so that user can self pick-up.', icon: 'assets/icon/leave.svg', url: 'leavemanagement' },
          // { name: 'Reports', description: 'Here you can see the review or complaint about the food and the delivery.', icon: 'assets/icon/report.svg', url: 'reports' },
          // { name: 'Dashboard', description: 'Here you can change the settings of the business you run.', icon: 'assets/icon/dashboard.svg', url: 'editbusinesssettings' },
        ];
  }

  // ionViewWillLeave() {
  //   this.routeParams.unsubscribe();
  // }

  goToPage(url) {
    this.router.navigate([url])
  }

 



}