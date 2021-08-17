import React from 'react';

//The Square component fuction a single <button>
function Square(props) {
    return (
      //onClick handler that will re-render the Square value whenever the <button> is clicked.
      <button className="square" onClick={props.onClick}>
        {/* this will call the value passed by the renderSquare component into the square, x or o*/}
        {props.value}
      </button>
    );
  }

//Exports Square Component to be used in app.js
export default Square;