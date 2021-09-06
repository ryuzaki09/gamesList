import React from "react";
import { Game } from "./game";
import { IGame } from "../../api/types";
import styles from "./gamesGrid.module.css";

export function GamesGrid({ games }: { games: IGame[] }) {
  return (
    <div className={styles.gamesGridContainer}>
      {games.length > 0 && games.map((g) => <Game key={g.id} game={g} />)}
    </div>
  );
}
