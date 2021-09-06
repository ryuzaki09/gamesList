import { AllowedGames } from "../main/constants";

export interface IGame {
  id: number;
  name: AllowedGames;
  gameTitle: string;
  isLargeSize: boolean;
  isNew: boolean;
  highLimit: boolean;
}
