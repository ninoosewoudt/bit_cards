var app = new PIXI.Application(1000, 920, {backgroundColor : 0x1099bb});
app.view.id = "canvas";
document.body.appendChild(app.view);
window.WebFontConfig = {
    google: {
        families: ['Snippet', 'Arvo:700italic', 'Podkova:700']
    }
};
let grid = new Grid(6, 3, 100, 20);
app.stage.addChild(grid.container);
let deck1 = new Deck();
let deck2 = new Deck();
let hand1 = new Hand(grid, deck1, 1);
let hand2 = new Hand(grid, deck2, 2);
for (let i = 0; i < 54; i++)
{
    deck1.addCards(new Card(app.stage, "public/images/waifuu.png", 0, 0, 1, 1, 1));
    deck2.addCards(new Card(app.stage, "public/images/test.png", 0, 0, 1, 1, 1));
}
hand1.takeTurn();
document.addEventListener("turn", ()=>
{
   if (!hand1.isEmpty())
       hand2.takeTurn();
   else if (!hand2.isEmpty())
       hand1.takeTurn();
});