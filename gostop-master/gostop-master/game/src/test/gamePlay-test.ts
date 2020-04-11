import {GamePlay} from '../main/gamePlay';
import {expect} from 'chai';
import 'mocha';

describe('game', ()=>{
  it('setting_OK?', ()=>{
    let gamePlay = new GamePlay();

    gamePlay.initilize();

    gamePlay.startAGame();
  })
})
