class Grid
{
    constructor(horizontalCells, verticalCells, horizontalOffset, verticalOffset)
    {
        this.playedCards = [];
        this.p1Health = 30;
        this.p2Health = 30;
        this.container = new PIXI.Container();
        this.grid = [];
        this.setUpText(horizontalOffset, horizontalCells);
        for (let i = 0; i < verticalCells; i++)
        {
            let horizontal = [];
            for (let j = 0; j < horizontalCells; j++)
            {
                horizontal.push(new GridCell(this.container,horizontalOffset + 125 * j, verticalOffset + 200 * i, 125, 200))
            }
            this.grid.push(horizontal);
        }
    }
    setUpText(horizontalOffset, horizontalCells)
    {
        this.p1HealthText = new PIXI.Text(this.p1Health.toString(), {
            fontFamily: 'Snippet',
            fontSize: 24,
            fill: 'white',
            align: 'left'
        });
        this.p1HealthText.x = horizontalOffset / 2;
        this.container.addChild(this.p1HealthText);
        this.p2HealthText = new PIXI.Text(this.p2Health.toString(), {
            fontFamily: 'Snippet',
            fontSize: 24,
            fill: 'white',
            align: 'left'
        });
        this.p2HealthText.x = (horizontalCells) * 125 + horizontalOffset /2 + 80;
        this.container.addChild(this.p2HealthText);
    }
    playCard(card, gridPositionX, gridPositionY)
    {
        if (this.grid[gridPositionY][gridPositionX].card !== undefined)
            return false;
        card.setGridPosition(gridPositionX, gridPositionY);
        this.grid[gridPositionY][gridPositionX].card = card;
        card.setDrawPosition(this.grid[gridPositionY][gridPositionX].x, this.grid[gridPositionY][gridPositionX].y);
        card.setScaling(0.5, 0.5);
        return true;
    }
    takeTurn(hand)
    {
        this.move(hand.player);
        this.attack();
        this.checkForCasualties();
    }
    move(player)
    {
        let left = true;
        if (player === 1)
            left = false;
        for (let i = 0; i < this.playedCards.length; i++)
        {
            if (this.playedCards[i].movingLeft === left)
                this.moveCard(this.playedCards[i].gridY, this.playedCards[i].gridX, left ? -1 : 1);
        }
    }
    moveCard(gridY, gridX, stepSize)
    {
        console.log(stepSize);
        if (gridX === 6 && !this.grid[gridY][gridX].card.movingLeft || gridX === 0 && this.grid[gridY][gridX].card.movingLeft || this.grid[gridY][gridX + stepSize] === undefined)
            return;
        if (this.grid[gridY][gridX].card === undefined) {
            return;
        }
        let lastCorrectPosition = 0;
        for (let i = 0; i < this.grid[gridY][gridX].card.movement; i++)
        {
            if (this.grid[gridY][gridX + stepSize + i * stepSize].card === undefined)
            {
                lastCorrectPosition += stepSize;
                console.log(this.grid[gridY][gridX + stepSize + i * stepSize]);
            }
            else
                break;
        }
        this.playCard(this.grid[gridY][gridX].card, gridX + lastCorrectPosition, gridY);
        this.grid[gridY][gridX + lastCorrectPosition].card = this.grid[gridY][gridX].card;
        this.grid[gridY][gridX + lastCorrectPosition].card.setGridPosition(gridX + lastCorrectPosition, gridY);
        if  (lastCorrectPosition !== 0)
            this.grid[gridY][gridX].card = undefined;
    }
    attack()
    {
        for (let i = 0; i < this.playedCards.length; i++)
        {
            this.attackCard(this.playedCards[i], this.playedCards[i].gridX, this.playedCards[i].gridY, this.playedCards[i].movingLeft ? -1 : 1);
        }
    }
    attackCard(card, gridX, gridY, stepsize)
    {
        if (gridX === 5 && !card.movingLeft)
        {
            this.p2Health -= card.damage;
            this.p2HealthText.text = this.p2Health.toString();
            card.discard();
            card.dead = true;
            return;
        }
        else if (gridX === 0 && card.movingLeft)
        {
            this.p1Health -= card.damage;
            this.p1HealthText.text = this.p1Health.toString();
            card.dead = true;
            card.discard();
            return;
        }
        if (this.grid[gridY][gridX + stepsize].card === undefined || this.grid[gridY][gridX + stepsize].card.movingLeft === card.movingLeft)
            return;
        this.grid[gridY][gridX + stepsize].card.takeDamage(card.damage);
    }
    checkForCasualties()
    {
        for (let i = 0; i < this.playedCards.length; i++)
        {
            if (this.playedCards[i].dead)
            {
                console.log("found a dead body");
                this.grid[this.playedCards[i].gridY][this.playedCards[i].gridX].card = undefined;
                for (let j = i + 1; j < this.playedCards.length; j++)
                    this.playedCards[j].index -= 1;
                this.playedCards.splice(this.playedCards[i].index, 1);
                i--;
            }
        }
    }
}