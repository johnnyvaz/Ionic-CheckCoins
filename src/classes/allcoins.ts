import {CryptoCoin} from './cryptocoin';

export class AllCoins {
    [x: string]: any;

    coins: CryptoCoin[] = [];

    constructor(){
        this.coins.push(new CryptoCoin('ETH', 'Ethereum'));
        this.coins.push(new CryptoCoin('BTC', 'BitCoin'));
        this.coins.push(new CryptoCoin('LTC', 'LitCoin'));
    }

    GetCoins(){
        return this.coin;
    }
}