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
  duration: number;
};

export const gameParams: CurrentGameParamsType[] = [
  { elems: 4, cols: 2, elems_sum: 10, num_sums: 1, sum_blocks: 1 },
  { elems: 16, cols: 4, elems_sum: 20, num_sums: 2, sum_blocks: 3 },
  { elems: 36, cols: 6, elems_sum: 40, num_sums: 4, sum_blocks: 5 },
];

export const currentGameParams: CurrentGameParamsType = gameParams.shift();
export const gameInit = buildGame(currentGameParams);

export const initGame: GameContextType = {
  addendums: gameInit,
  currentGameParams: currentGameParams,
  gameParams: gameParams,
  scores: [],
  duration: 180,
};

export const GameContext = createContext({
  game: initGame,
  setGame: (game: GameContextType) => {},
});

// const GameProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
//   const[game, setGame] = useState(initGame)
//   return(
//     <GameContext.Provider value={{game, setGame}}>{children}</GameContext.Provider>
//   )
// }
