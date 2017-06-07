import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GuardadosPage } from '../guardados/guardados';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1 : any;
  public tab2 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = HomePage;
    this.tab2 = GuardadosPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
