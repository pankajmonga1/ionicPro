import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-homescreen',
  templateUrl: 'homescreen.html'
})
export class HomescreenPage {

  constructor(public navCtrl: NavController , private statusBar: StatusBar) {
          
          this.statusBar.backgroundColorByHexString('#103F68');
  }

}

