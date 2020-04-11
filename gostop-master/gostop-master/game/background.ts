import * as ex from 'excalibur';

export class Background extends ex.Actor{
  constructor(public corner: ex.Vector, public texture: ex.Texture, public game: ex.Engine){
    super(corner.x, corner.y, game.canvasWidth + texture.width, game.canvasHeight + texture.height);
    this.addDrawing(texture);
  }

  update(engine: ex.Engine, delta:number){
    this.corner = engine.screenToWorldCoordinates(new ex.Vector(0, 0));
    this.x = this.corner.x-20;
    super.update(engine, delta);
    if(this.x < this.corner.x - this.texture.width || this.x > this.game.canvasWidth){
      this.x = this.corner.x;
      this.y = this.corner.y;
    };

    if(this.y < this.corner.y - this.texture.height || this.y > this.game.canvasHeight){
      this.x = this.corner.x;
      this.y = this.corner.y;
    }
  }

  draw(ctx: CanvasRenderingContext2D, delta:number){
    for(var i = 0; i < Math.ceil(this.game.canvasWidth / this.texture.width) + 5; i++){
      if(this.vel.x <= 0){
        this.currentDrawing.draw(ctx, this.x + i * this.texture.width, this.y);
      }else{
        this.currentDrawing.draw(ctx, this.x - i * this.texture.width, this.y);
      }
      if(this.vel.y <= 0){
        this.currentDrawing.draw(ctx, this.x + i * this.texture.width, this.y + this.texture.height);
      }else{
        this.currentDrawing.draw(ctx, this.x + i * this.texture.width, this.y - this.texture.height);
      }
    }
  }
}
