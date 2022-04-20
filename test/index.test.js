// unit test for rockPaperScissors()
describe('rockPaperScissors()', function(){
    it('should return "It\'s a tie!" if player1 and player2 tie', function(){
        assert.equal(rockPaperScissors('rock', 'rock'), 'It\'s a tie!');
    });
    it('should return "Player 1 wins!" if player1 wins', function(){
        assert.equal(rockPaperScissors('rock', 'scissors'), 'Player 1 wins!');
    });
    it('should return "Player 2 wins!" if player2 wins', function(){
        assert.equal(rockPaperScissors('paper', 'rock'), 'Player 2 wins!');
    });
    it('should return "Something went wrong" if something goes wrong', function(){
        assert.equal(rockPaperScissors('paper', 'scissors')
        , 'Something went wrong');
    });
});