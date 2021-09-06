import threeHitPay from "../assets/gameLogos/3HitPay.svg";
import aloha from "../assets/gameLogos/aloha.svg";
import angler from "../assets/gameLogos/angler.svg";
import booster from "../assets/gameLogos/booster.svg";
import dayOfTheDead from "../assets/gameLogos/dayOfTheDead.svg";
import fafaTwins from "../assets/gameLogos/fafaTwins.svg";
import fruitSpin from "../assets/gameLogos/fruitSpin.svg";
import gonzosQuest from "../assets/gameLogos/gonzosQuest.svg";
import hotline from "../assets/gameLogos/hotline.svg";
import jackHammer from "../assets/gameLogos/jackHammer.svg";
import jekyllHyde from "../assets/gameLogos/jekyllHyde.svg";
import jumanji from "../assets/gameLogos/jumanji.svg";
import neonJungle from "../assets/gameLogos/neonJungle.svg";
import seaOfTranquility from "../assets/gameLogos/seaOfTranquility.svg";
import smokinHotGems from "../assets/gameLogos/smokinHotGems.svg";
import spinataGrande from "../assets/gameLogos/spinataGrande.svg";
import sugarSmash from "../assets/gameLogos/sugarSmash.svg";
import allIcon from "../assets/ico_all.svg";
import newIcon from "../assets/ico_new.svg";
import starIcon from "../assets/star.svg";

export const gameIcons = {
  threeHitPay,
  aloha,
  angler,
  booster,
  dayOfTheDead,
  fafaTwins,
  fruitSpin,
  gonzosQuest,
  hotline,
  jackHammer,
  jekyllHyde,
  jumanji,
  neonJungle,
  seaOfTranquility,
  smokinHotGems,
  spinataGrande,
  sugarSmash,
};

export type AllowedGames = keyof typeof gameIcons;

export type FILTER_TYPES = "ALL" | "NEW" | "TOP";

export interface IGameFilters {
  icon: string;
  label: FILTER_TYPES;
  alt: string;
}

export const gameFilters: IGameFilters[] = [
  {
    icon: allIcon,
    label: "ALL",
    alt: "all",
  },
  {
    icon: newIcon,
    label: "NEW",
    alt: "new",
  },
  {
    icon: starIcon,
    label: "TOP",
    alt: "top",
  },
];
