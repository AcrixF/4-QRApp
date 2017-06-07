import { Component } from '@angular/core';
import {  ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public constructor(private barcodeScanner: BarcodeScanner,
                     public toastCtrl: ToastController,
                     private platform: Platform,
                     private _hs : HistorialProvider) {
  }

  public scan(){
    //Se define el scanner y la funcion cuando realiza la operacion y que pasa cuando hay un error, si existe un error se utiliza un TOAST

    if(!this.platform.is( 'cordova')){
      //this._hs.agregarHistorial( "http://google.com.mx");
      //this._hs.agregarHistorial( "geo:19.4083232,-99.17228339999997");
      this._hs.agregarHistorial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      return;
    }

    this.barcodeScanner.scan().then(
      (barcode) => {
        console.log("Data: " + barcode.text );
        console.log("Format: " + barcode.format);
        console.log("Cancelled: " + barcode.cancelled);

        //Se valida si la informacion del QR es valida
        if (barcode.cancelled == false && barcode.text != null){
          this._hs.agregarHistorial( barcode.text );
        }
      },
      (err) => {
        this.mostrarError( err );
      }
    )
  }


  public mostrarError (mensaje : string){
    let toats = this.toastCtrl.create ( { message: mensaje , duration: 3000,showCloseButton: true, closeButtonText: 'Cierra esta madre' } );
    toats.present();
  }

}

