import React from "react";
import classnames from "classnames";

import { gameIcons } from "../constants";
import { IGame } from "../../api/types";
import newGameIcon from "../../assets/new.svg";
import highLimitIcon from "../../assets/highLimit.svg";

import styles from "./game.module.css";

export function Game({ game }: { game: IGame }) {
  const icons = gameIcons;
  const gameIconAvailable = icons[game.name];

  return gameIconAvailable ? (
    <div
      className={classnames(styles.gameContainer, {
        [styles.largeContainer]: game.isLargeSize,
      })}
    >
      <img src={icons[game.name]} alt={game.name} className={styles.gameIcon} />
      {game.isNew && (
        <img src={newGameIcon} alt="new" className={styles.isNew} />
      )}
      {game.highLimit && (
        <img
          src={highLimitIcon}
          alt="high limit"
          className={styles.highLimit}
        />
      )}
    </div>
  ) : null;
}
