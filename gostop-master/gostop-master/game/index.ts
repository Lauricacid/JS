import * as ex from 'excalibur';
import {Background} from './background';
import {GamePlay} from './src/main/gamePlay';

var game = new ex.Engine({
  displayMode: ex.DisplayMode.FullScreen
});
game.backgroundColor = ex.Color.fromHex('#004d1a');

var loader = new ex.Loader();

var resources = {
  Title : new ex.Texture("game/resources/img/title.png")
  , TitleBg : new ex.Texture("game/resources/img/title_bg.png")
};

for(var resource in resources){
  if(resources.hasOwnProperty(resource)){
    loader.addResource(resources[resource]);
  }
}

var titleBackground = null, title = null, instruction = null;

game.start(loader).then(() => {
  titleBackground = new Background(game.screenToWorldCoordinates(new ex.Vector(0, 0)), resources.TitleBg, game);
  titleBackground.vel.x = -10;
  game.add(titleBackground);

  title = new ex.Actor({
    pos: new ex.Vector(game.halfDrawWidth, game.halfDrawHeight * 0.8)
  });
  var titleSprite = resources.Title.asSprite();
  title.addDrawing("title", titleSprite);
  title.centerDrawing = true;

  game.add(title);

  instruction = new ex.Label("눌러주세요.", game.halfDrawWidth, game.halfDrawHeight * 1.5);
  instruction.fontSize = 40;
  instruction.textAlign = ex.TextAlign.Center;
  instruction.color = ex.Color.White;
  game.add(instruction);

});
 
