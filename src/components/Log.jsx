export default (props) => {
  return (
    <ol id="log">
      {props.turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};
