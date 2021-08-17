import React from 'react';
import Board from './Board';
import {Button, Container, Row, Col} from 'react-bootstrap';

//The Game component renders a board which adds functionality to the game
class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //sets the Board's initial state to contain an array of 9 nulls on 9 squares
        history: [{
          squares: Array(9).fill(null),
        }],
        //Indicates which step we’re currently viewing.
        stepNumber: 0,
        //xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved
        xIsNext: true,
      }     
    }
  
    //sets the state of the clicked square to an X value
    handleClick(i) {
      //ensures we don’t get stuck showing the same move after a new one has been made.
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      //returns early by ignoring a click if someone has won the game or if a Square is already filled:
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      //will either set the state of the clicked block to be x, or negate it to o
      this.setState ({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    //update that stepNumber to its current step and that the number of the step is even
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      })
    }
    
    render() {
      // uses the most recent history entry to determine and display the game’s status
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      //For each move in the tic-tac-toe game’s history, we create a list item <li> which contains a button <button>.
      const moves = history.map((step, move) => {
        //display the current move and history upon click
        const desc = move ? 
        'Return To Move #' + move :
        'Reset Game Board ';
        return (
          //we assign a key to the move list to make each move unique so it cannot be re-ordered, deleted or inserted
          <li key={move}>
             <Button className="btn-prim" size="lg" onClick={() => this.jumpTo(move)}>{desc}</Button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = 'Congrats! The winner is: ' + winner;
      } else {
        status = 'Player Turn: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <Container>
          <Row className="col-12">
            <div className="game-space"></div>
          </Row>
          <Row className="col-12">
            <div className="game">
              <Col className="col-12 col-md-6 col-lg-6"> 
                    <div className="game-board">
                      <Board 
                        squares={current.squares} 
                        onClick={i => this.handleClick(i)}
                      />
                    </div>
              </Col>
              <Col className="col-12 col-md-6 col-lg-6"> 
              <div className="game-info">
                  <div className="game-status">{status}</div>
                  <ol className="game-moves">{moves}</ol>
                </div>
              </Col>   
          </div>
          </Row>
        </Container>    
      );
    }
  }

  //This will calculate the winner of the game after all possible moves are used
function calculateWinner(squares) {
    //possible winning moves for array of 9 squares
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

//Exports Game Component to be used in app.js
export default Game;