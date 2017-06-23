class GridCell
{
    constructor(container, x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.card = undefined;
        this.graphics = new PIXI.Graphics();
        // graphics.beginFill(0x000000);
        this.graphics.lineStyle(2, 0x494949);
        this.graphics.drawRect(x, y, width, height);
        container.addChild(this.graphics);
    }
}