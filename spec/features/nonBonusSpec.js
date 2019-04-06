describe("A game with no 10 scores", function(){
  it("Rolls a non-10 score every frame", function(){
    game = new Game();
    for(i=0; i<20; i++){
      game.recordBall(3);
      console.log(game.gameTotal);
    }
    expect(game.gameTotal).toEqual(60);
    expect(game.isComplete()).toEqual(true);
  });
});