"use client";

// import { useState } from 'react';
import { insertScore } from "@/app/db/queries";
import { buildGame } from "@/helpers/games";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Addendum from "./addendum";
import EmptyAddendum from "./emptyAddendum";
import type { AddendumType, CurrentGameParamsType } from "./fastSquareContext";
import { GameContext } from "./fastSquareContext";

export function FastSquareGame({
  time,
  gameId,
  userId,
}: {
  time: number;
  gameId: number;
  userId: string;
}) {
  const [hasMounted, setHasMounted] = React.useState(false);

  const { game, setGame } = useContext(GameContext);

  const router = useRouter();

  async function handleClick(id: number, val: number) {
    //Set next game status
    let nextGame = [...game.addendums];
    let nextCurrentGameParams: CurrentGameParamsType = JSON.parse(
      JSON.stringify(game.currentGameParams),
    ); //deep copy
    const nextGameParams = [...game.gameParams];
    const nextGameScores = [...game.scores];

    //change state if addendum is added
    const addendum = nextGame.find((a) => a.id === id);
    if (addendum != undefined) addendum.isAdded = !addendum.isAdded;

    //check score
    let score = nextGame.reduce((sum, g) => {
      if (g.isAdded && !g.drop) {
        return (sum += g.value);
      }
      return sum;
    }, 0);

    //Set Addendums statuses when correct sum is met
    if (
      nextCurrentGameParams != undefined &&
      score == nextCurrentGameParams.elems_sum
    ) {
      score = 0;
      let addendums: string = "";
      const num_sums = nextCurrentGameParams.num_sums - 1;
      nextCurrentGameParams.num_sums = num_sums;
      nextGame = nextGame.map((a) => {
        if (a.isAdded && !a.drop) {
          addendums =
            addendums == ""
              ? a.value.toString()
              : addendums + "+" + a.value.toString();
          a.drop = true;
          return a;
        } else {
          return a;
        }
      });

      nextGameScores.push({
        addendums: addendums + "=" + nextCurrentGameParams.elems_sum,
        seconds: time,
      });
    }

    //Change game when all sums are met
    if (
      nextCurrentGameParams != undefined &&
      nextCurrentGameParams.num_sums == 0
    ) {
      nextCurrentGameParams = nextGameParams.shift();

      nextGame = buildGame(nextCurrentGameParams);
    }

    if (nextGameParams.length == 0 && nextCurrentGameParams == undefined) {
      insertScore(time, userId, gameId);
      router.push("/games/end/" + gameId);
    }

    //refresh game status
    setGame({
      addendums: nextGame,
      currentGameParams: nextCurrentGameParams,
      gameParams: nextGameParams,
      scores: nextGameScores,
      duration: game.duration,
    });
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (game.currentGameParams != undefined) {
    if (hasMounted) {
      const gridClassName =
        "grid grid-cols-" +
        game.currentGameParams.cols +
        " gap-5 size-full flex";
      // const edge = game.currentGameParams.cols/2
      const styles = "m-auto h-8 md:h-16 lg:h-24 w-8 md:w-16 lg:w-24";
      return (
        <GameContext.Provider value={{ game, setGame }}>
          <div className={gridClassName}>
            {game.addendums.map((g: AddendumType) => {
              if (g.drop) {
                return (
                  <div className={styles} key={g.id.toString()}>
                    <EmptyAddendum></EmptyAddendum>
                  </div>
                );
              } else {
                return (
                  <div className={styles} key={g.id.toString()}>
                    <Addendum
                      id={g.id.toString()}
                      val={g.value}
                      handler={() => handleClick(g.id, g.value)}
                      isAdded={g.isAdded}
                      drop={g.drop}
                      color={`${"bg-" + g.color}`}
                    ></Addendum>
                  </div>
                );
              }
            })}
          </div>
        </GameContext.Provider>
      );
    } else {
      return (
        <div className="size-full grid grid-cols-2 gap-5">
          {game.addendums.map((g: AddendumType) => {
            return (
              <div
                role="status"
                key={g.id.toString()}
                className="m-auto flex h-10 w-10 max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 md:h-16 md:w-16 lg:h-24 lg:w-24"
              >
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                ></svg>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })}
        </div>
      );
    }
  } else {
    return <></>;
  }
}
