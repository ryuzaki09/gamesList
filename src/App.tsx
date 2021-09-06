import React, { useState, useEffect } from "react";
import { Header } from "./main/header";
import { FilterBar } from "./main/filterBar";
import { GamesGrid } from "./main/games/gamesGrid";
import { gamesApi } from "./api/gamesApi";
import { IGame } from "./api/types";

import styles from "./App.module.css";

function App() {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);

  useEffect(() => {
    gamesApi.fetchAllGames().then(({ result }) => {
      setGamesList(result);
      setFilteredGames(result);
    });
  }, []);

  const handleFilteredGames = (filteredGames: IGame[]) => {
    setFilteredGames(filteredGames);
  };

  return (
    <div className={styles.appContainer}>
      <Header
        title="SLOTS"
        filterBar={
          <FilterBar
            games={gamesList}
            handleFilteredGames={handleFilteredGames}
          />
        }
      />
      <GamesGrid games={filteredGames} />
    </div>
  );
}

export default App;
