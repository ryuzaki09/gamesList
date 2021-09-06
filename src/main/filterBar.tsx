import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { IGame } from "../api/types";
import { gameFilters, IGameFilters } from "./constants";
import searchIcon from "../assets/ico_search.svg";

import styles from "./filterBar.module.css";

interface IFilterBarProps {
  games: IGame[];
  handleFilteredGames: (games: IGame[]) => void;
}

export function FilterBar({ games, handleFilteredGames }: IFilterBarProps) {
  const [selectedFilter, setSelectedFilter] = useState<IGameFilters["label"]>(
    "ALL"
  );

  const filterNewGames = () => {
    if (selectedFilter === "NEW") {
      return games.filter((g) => g.isNew);
    }

    return games;
  };

  useEffect(() => {
    const filteredGames = filterNewGames();
    console.log("filtered: ", filteredGames);
    handleFilteredGames(filteredGames);
  }, [selectedFilter]);

  const handleFilter = (filter: IGameFilters["label"]) => {
    setSelectedFilter(filter);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredGames = filterNewGames();

    const searchedGames = filteredGames.filter((g) =>
      g.gameTitle.toLowerCase().includes(event.target.value)
    );
    handleFilteredGames(searchedGames);
  };

  return (
    <div className={styles.filterContainer}>
      {gameFilters.map((filter) => {
        return (
          <button
            key={filter.label}
            className={classnames(styles.optionWrapper, {
              [styles.isSelected]: filter.label === selectedFilter,
            })}
            onClick={() => handleFilter(filter.label)}
          >
            <img src={filter.icon} alt={filter.alt} />
            <div>{filter.label}</div>
          </button>
        );
      })}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" onChange={onSearch} />
        <div className={styles.searchIconWrapper}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
    </div>
  );
}
