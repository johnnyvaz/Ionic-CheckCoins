import { injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CriptoCoin, CryptoCoin } from '../classes/cryptocoin';
import { AllCoins } from '../classes/allcoins';

@Injectable ()
export class HttpSender{
    query = "https://min-api.cryptocompare.com/data/price?fsym=";

    contructor(private http:Http, private allCoins:AllCoins){}
    
    getSingleData(coinType: CryptoCoin){
        if (coinType != null)
        return this.http.get(this.query + coinType.shortName + '&tsyms=,USD,EUR,BRL')
        else
        return this.http.get(this.query + 'BTC&tsyms=,USD,EUR,BRL')
    }
}