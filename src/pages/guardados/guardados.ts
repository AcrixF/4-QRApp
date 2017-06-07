import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  public historial : ScanData[] = [];

 public constructor(public navCtrl: NavController, public navParams: NavParams,private _hs: HistorialProvider) {
 }

  public ionViewDidLoad( ) {
    this.historial = this._hs.cargarHistorial();
  }

  public abrir_scan( idx : number){
    this._hs.abrir_scan( idx );
  }

}
