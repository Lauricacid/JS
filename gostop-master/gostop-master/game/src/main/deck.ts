import {Card} from './card';
import {GamePlay} from './gamePlay';

export class Deck{
  cards = [];
  gamePlay:GamePlay;

  constructor(gamePlay:GamePlay){
    this.gamePlay = gamePlay;
  }

  addCards(cards:Array<Deck>):void{
    //DO NOTHING
  }
}
