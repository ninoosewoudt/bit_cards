class GridCell
{
    constructor(x, y)
    {
        this.card = undefined;
        this.x = x;
        this.y = y;
    }
}
class Grid
{
  constructor(horizontalSize, verticalSize)
  {
    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(2, 0xffffff, 1);
    this.grid = [];
    for (let i = 0; i < verticalSize; i++)
    {
      let nextHorizontal = [];
      for (let j = 0; j < horizontalSize; j++)
      {
        this.graphics.drawRect(100 + j * 125, 100 + 200 * i, 125, 200);
        nextHorizontal.push(new GridCell(100 + j * 125,100, 200 * i));
      }
      this.grid.push(nextHorizontal);
    }

  }
}
