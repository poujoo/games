"use client";
import { Button, Card, Toast } from "flowbite-react";
import { GrScorecard } from "react-icons/gr";
import { IoMdTimer } from "react-icons/io";
import { FastSquareGame } from "../../../components/fastSquareGame";

import { buildGame } from "@/helpers/games";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import type {
  CurrentGameParamsType,
  CurrentGameScoresType,
  GameContextType,
} from "../../../components/fastSquareContext";
import { GameContext } from "../../../components/fastSquareContext";

export default function GamePage() {
  //GAME parameters
  const gameParams: CurrentGameParamsType[] = [
    { elems: 4, cols: 2, elems_sum: 10, num_sums: 1, sum_blocks: 1 },
    { elems: 16, cols: 4, elems_sum: 20, num_sums: 2, sum_blocks: 3 },
    { elems: 36, cols: 6, elems_sum: 40, num_sums: 4, sum_blocks: 5 },
  ];
  const currentGameParams = gameParams.shift();
  const gameInit = buildGame(currentGameParams);
  const [game, setGame] = useState<GameContextType>({
    addendums: gameInit,
    currentGameParams: currentGameParams,
    gameParams: gameParams,
    scores: [],
  });
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const pathname = usePathname().split("/");
  const relPathname = pathname.slice(2, 4);
  const rulePathname = "/" + relPathname.join("/") + "/rules";

  return (
    <GameContext.Provider value={{ game, setGame }}>
      <div className="flex flex-col p-5">
        <div className="flex flex-row justify-center p-3 lg:p-10">
          <header>
            <h1 className="text-md font-extrabold dark:text-white md:text-xl lg:text-5xl">
              Fast Squares
            </h1>
          </header>
        </div>

        <hr className="lg:my:10 mx-3 my-0 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10 lg:mx-10" />

        <div className="flex flex-row-reverse flex-wrap justify-center p-3 md:flex-row-reverse lg:flex-row-reverse lg:p-10">
          <div className="mb-4 ml-2 flex-auto md:ml-4 lg:ml-4">
            <Card>
              <FastSquareGame time={totalSeconds}></FastSquareGame>
            </Card>
          </div>
          <div className="max-w-sm">
            <Toast className="mb-4">
              <div className="m-auto flex items-center space-x-2">
                <div className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700">
                  <Button
                    href={rulePathname}
                    className="bg-green-500 text-green-200  dark:bg-green-500 dark:text-green-200"
                  >
                    Back to rules
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </Toast>
            <Toast className="mb-4">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <IoMdTimer className="h-5 w-5" />
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700">
                  {totalSeconds} seconds
                </div>
              </div>
            </Toast>
            <div>
              {game.scores.map((g: CurrentGameScoresType) => {
                return (
                  <motion.div
                    initial={{ y: -64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    key={g.addendums}
                  >
                    <Toast className="mb-4">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <GrScorecard className="h-5 w-5" />
                      </div>
                      <div className="ml-3 mr-10 text-sm font-normal">
                        {g.addendums}
                      </div>
                      <div className="ml-auto flex items-center space-x-2">
                        <div className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700">
                          {g.seconds} sec
                        </div>
                      </div>
                    </Toast>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </GameContext.Provider>
  );
}
