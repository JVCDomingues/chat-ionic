import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import{ AngularFireDatabaseModule} from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalaService } from './sala.service';

export const firebaseConfig = {
    apiKey: "AIzaSyDVFBiVgfQZZFDT9ZO4WryBugitnSRcRfc",
    authDomain: "chat-ionic-firebase-467b2.firebaseapp.com",
    databaseURL: "https://chat-ionic-firebase-467b2.firebaseio.com",
    projectId: "chat-ionic-firebase-467b2",
    storageBucket: "chat-ionic-firebase-467b2.appspot.com",
    messagingSenderId: "651748690690",
    appId: "1:651748690690:web:3048e72c84b15cfb"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
