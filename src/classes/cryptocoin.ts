export class CryptoCoin {
    name: string = '';
    shortName: string = '';
    euroValue: number = 0;
    usdValue: number = 0;
    brlValue: number = 0;

    constructor(shorName: string, name:string){
        this.name = name;
        this.shortName = shorName;
    }
}