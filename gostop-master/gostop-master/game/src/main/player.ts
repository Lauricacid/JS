import {Card} from './card';
import {GamePlay} from './gamePlay';

export class Player{
  private name:string;
  private money:number;
  private gamePlay:GamePlay;
  // Lazy Init
  private cardsInHand:Array<Card> = [];
  private acquiredCards:Array<Card> = [];

  constructor(name, money, gamePlay){
    this.name = name;
    this.money = money;
    this.gamePlay = gamePlay;
  }

  handACard(card:Card){
    this.cardsInHand.push(card);
  }

  getCardsInHand():Array<Card>{
    return this.cardsInHand;
  }
}
