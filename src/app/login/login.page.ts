import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
// import { Api } from '../providers/api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;
  showPass: boolean = false;
  passwordType: any = 'password';
  loginList: any;
  constructor(private router: Router, private fb: FormBuilder, public httpClient: HttpClient, public toastController: ToastController
    ) {
    this.login = new FormGroup({
      employeeNumber: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
  }
  onLogin() {
    let body: any = { employeeNumber: this.login.value.employeeNumber, password: this.login.value.password };
    this.httpClient.post('http://15.207.71.113:3000/login/', body).subscribe(data => {
      if (data != null) {
        this.loginList = data
        // this.login.reset();
        if (this.loginList.code == 200) {
          this.presentToast();
          console.log("Login Successful")
          this.router.navigate(['/home'])
        } else if (this.loginList.code == 404) {
          this.presentToast1();
          console.log("Invalid credentials")
        }
      }
    });
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Successful',
      duration: 2000,


    });
    toast.present();
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Invalid credentials',
      duration: 2000,
    });
    toast.present();
  }
}
