import React from 'react';
import Square from './Square';
import {Container, Row} from 'react-bootstrap';

//Board renders 9 squares to compose the tic-tac-toe board
class Board extends React.Component {
  
    //Pass the props to render the square number value to the board
      renderSquare(i) {
        /* this will pass a value (x, o, or null) to the Square */
        return (
          <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
  
    //Board rendering with square value init
    render() {
      //this will set the render the board
      return (
        <Container>
          <Row>
              <div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          </Row>
        </Container>
      
      );
    };
  }

//Exports Board Component to be used in app.js
export default Board;