import { useState } from "react";

export default (props) => {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleGameBoard = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = props.activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   props.handleSelectSquare();
  // };
  return (
    <ol id="game-board">
      {props.board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => props.handleSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
