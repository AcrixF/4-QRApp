import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { GuardadosPage } from '../pages/guardados/guardados';
import { TabsPage } from '../pages/tabs/tabs';

//Servicio para utilizar el Scan y el Buscador
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../providers/historial/historial';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    GuardadosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6TrZJWefjacldS774CGzBWuc39tXNeSk'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    GuardadosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
