import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Network } from '@ionic-native/network/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,

    Camera,
    FileChooser,
    DatePipe,
    DatePicker,
    Sim,
    Toast,
    Network,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
