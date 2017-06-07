import { Component } from '@angular/core';
import { NavController , NavParams , ViewController } from 'ionic-angular';
/**
 * Generated class for the MapaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  private lat: number;
  private lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    let coordsArray = this.navParams.get('coords').split(",");

    this.lat = Number(coordsArray[0].replace("geo:",""));
    this.lng = Number(coordsArray[1]);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  public cerrarModal(){
     this.viewCtrl.dismiss();
  }

}
