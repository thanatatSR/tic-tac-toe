import { useState } from "react";

export default (props) => {
  const name = props.name;
  const [isEditting, setIsEditting] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClick = () => {
    setIsEditting((editting) => !editting);
    if (isEditting) {
      props.onChangeName(props.symbol, playerName)
    }
  };

  const handleChange = (name) => {
    setPlayerName(name);
  };

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {!isEditting ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={(event) => handleChange(event.target.value)}
          />
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={() => handleClick()}>
        {isEditting ? "Save" : "Edit"}
      </button>
    </li>
  );
};
