import { buildGame } from "@/helpers/games";
import { createContext } from "react";

export type AddendumType = {
  color: string;
  id: number;
  value: number;
  isAdded: boolean;
  drop: boolean;
};

export type CurrentGameParamsType =
  | {
      elems: number;
      cols: number;
      elems_sum: number;
      num_sums: number;
      sum_blocks: number;
    }
  | undefined;

export type CurrentGameScoresType = { addendums: string; seconds: number };

export type GameContextType = {
  addendums: AddendumType[];
  currentGameParams: CurrentGameParamsType;
  gameParams: CurrentGameParamsType[];
  scores: CurrentGameScoresType[];
};

const gameParams: CurrentGameParamsType[] = [
  { elems: 4, cols: 2, elems_sum: 10, num_sums: 1, sum_blocks: 1 },
  { elems: 16, cols: 4, elems_sum: 20, num_sums: 2, sum_blocks: 3 },
  { elems: 36, cols: 6, elems_sum: 40, num_sums: 4, sum_blocks: 5 },
];

const currentGameParams: CurrentGameParamsType = gameParams.shift();
const gameInit = buildGame(currentGameParams);

const game: GameContextType = {
  addendums: gameInit,
  currentGameParams: currentGameParams,
  gameParams: gameParams,
  scores: [],
};

export const GameContext = createContext({
  game,
  setGame: (game: GameContextType) => {},
});
