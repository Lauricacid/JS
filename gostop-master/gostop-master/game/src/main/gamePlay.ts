import {Player} from './player';
import {Deck} from './deck';
import {BaseCard,FirstCard} from './constant';

function shuffle(array){
  let counter = array.length;

  while(counter > 0){
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const DEFAULT_MONEY = 1000 * 1000 * 1000;

export class GamePlay{

  firstPlayer:Player;
  mainPlayer:Player;
  oppositePlayer:Player;
  deck:Deck; // 카드가 오픈된 채로 놓아진 덱
  pileDeck:Deck; // 카드가 쌓아져 있는 덱
  pointMoney:number = 100; // 1점당 100원 초기화

  initilize():void{
    // 초기화
    this.deck = new Deck(shuffle(BaseCard));
    this.mainPlayer = new Player("Player1", DEFAULT_MONEY, this);
    this.oppositePlayer = new Player("Player2", DEFAULT_MONEY, this);
    this.deck = new Deck(this);
    this.pileDeck = new Deck(this);
  }

  startAGame():void{
    // 게임 시작
    if(this.firstPlayer == null){
      this.getFirstPlayer();
    }
    //TODO
  }

  getFirstPlayer():void{
    // 선 플레이어를 정한다.
    // TODO
    // 테스트 코드
    this.firstPlayer = this.mainPlayer;
  }
  
  endAGame():void{
    // 게임 종료
  }

  finalize():void{
    // 종료
  }
}
