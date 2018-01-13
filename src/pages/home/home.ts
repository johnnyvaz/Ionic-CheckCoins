import { CryptoCoin } from './../../classes/cryptocoin';
import { Component, Output } from '@angular/core';
import { HttpSender } from '../../services/HttpSender';
import { NavController } from 'ionic-angular';
import { CryptoCoin } from '../../classes/cryptocoin';
import { AllCoins } from '../../classes/allcoins';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Output() currentCoin: CryptoCoin = new CryptoCoin('BTC','BitCoin');

  coins: CryptoCoin[] = [];

  constructor(public navCtrl: NavController, private http:HttpSender) {

  }

  UpdatePage(){
    this.http.getSingleData(this.currentCoin).subscribe((response) => {
      const data = response.json();
      if (data != ''){
        this.currentCoin.euroValue = data['EUR'];
        this.currentCoin.usdValue = data['USD'];
        this.currentCoin.brlValue = data['BRL'];
      }
    },(error) => {});
  }

  refreshPage(){
    this.UpdatePage();
  }
}
