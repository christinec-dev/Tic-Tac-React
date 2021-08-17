import React from 'react';
import {Container, Row} from 'react-bootstrap';

//The Header component which will be main ui of game
function Header() {
    return (
        <Container>
            <Row>
                <div className="Header">
                    <h4 className="pre-title">WELCOME TO</h4>
                    <h1 className="game-title">Tic Tac React!</h1>
                </div>
            </Row>
            <Row> </Row>
        </Container>
    );
  }
  
//Exports Header Component to be used in app.js
export default Header;