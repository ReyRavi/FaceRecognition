import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ConfirmComponent } from '../confirm/confirm.component';
import { NonconfirmComponent } from '../nonconfirm/nonconfirm.component';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  // attendanceForm: FormGroup;
  attendanceList: any;
  attendanceList1:any

  constructor(
    public loadingController: LoadingController,
    public camera: Camera,
    public router: Router,
    private modalCtrl: ModalController,
    public httpClient: HttpClient,
    public actionSheetController: ActionSheetController,
    private formBuilder: FormBuilder,
    private modalController: ModalController, public toastController: ToastController

  ) {
  
  }



  ngOnInit() {

  }

  async capture(isEntry: boolean) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // allowEdit: true
    }
    const imageData = await this.camera.getPicture(options);
    let body: any = { photo: imageData, isEntry };
    this.httpClient.post('http://15.207.71.113:3000/login/search_face', body).subscribe(data => {
      // if (data != null) {
        this.attendanceList = data;
        if (this.attendanceList.code == 200) {
          this.httpClient.post('http://15.207.71.113:3000/users/attendance', body).subscribe(data => {
            // if (data != null) {
              this.attendanceList1=data;
              // alert(JSON.stringify(this.attendanceList1))

              if(this.attendanceList1.code == 200){
                this.goToConfirmcomponent();
              }else if((this.attendanceList1.code == 404)){
                this.goToConfirmcomponent();
              }
            // }else {

            // }
          });
        } else if (this.attendanceList.code == 404) {
          this.goToNonConfirmcomponent();
        }
      // } else {

      // }
    });
    return imageData;

  }
  async goToConfirmcomponent() {
    const modal = await this.modalController.create({
      component: ConfirmComponent,
      cssClass: 'ConfirmComponent',
      componentProps: {
        message: this.attendanceList1.message,
        code: this.attendanceList1.code,
        // searchfacecode:this.attendanceList.code,
        // searchfacemessge:this.attendanceList.message


      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data != null) {

      }
    });
    return await modal.present();
  }

  async goToNonConfirmcomponent() {
    const modal = await this.modalController.create({
      component: NonconfirmComponent,
      cssClass: 'ConfirmComponent',
      componentProps: {
        searchfacecode:this.attendanceList.code,
        searchfacemessge:this.attendanceList.message
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data != null) {

      }
    });
    return await modal.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This Face Is Not Available',
      duration: 2000,
    });
    toast.present();
  }
  // async presentToast1() {
  //   const toast = await this.toastController.create({
  //     message: 'User Not Found',
  //     duration: 2000,
  //   });
  //   toast.present();
  // }
}
