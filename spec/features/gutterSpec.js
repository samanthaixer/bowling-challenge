describe("Gutter game", function(){
  it("Rolls a zero for every frame of the game", function(){
    game = new Game();
    for(i=0; i<20; i++){
      game.recordBall(0);
    }
    expect(game.gameTotal).toEqual(0);
    expect(game.isComplete()).toEqual(true);
  });

  it("Rolls a zero for every frame and stops the game", function(){
    game = new Game();
    for(i=0; i<20; i++){
      game.recordBall(0);
    }
    game.recordBall(5);
    expect(game.gameTotal).toEqual(0);
    expect(game.isComplete()).toEqual(true);
  });
});