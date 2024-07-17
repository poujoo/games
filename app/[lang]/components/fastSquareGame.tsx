"use client";

// import { useState } from 'react';
import { AddendumType, GameContext } from "./fastSquareContext"
import Addendum from './addendum';
import { useContext, useState } from "react";
import { useStopwatch } from 'react-timer-hook';
import EmptyAddendum from "./emptyAddendum";
import React from "react";
import { buildGame } from "@/helpers/games";


export function FastSquareGame({time}:{time:number}) {

    const [hasMounted, setHasMounted] = React.useState(false)

    const {game, setGame} = useContext(GameContext);

    // const edges = {2:1,4:2,6:3}
    const screens ={"lg":24,"md":16,"sm":8}

    function handleClick(id:number,  val:number) {

        //Set next game status
        let nextGame = [...game.addendums];
        let nextCurrentGameParams = JSON.parse(JSON.stringify(game.currentGameParams));//deep copy
        let nextGameParams = [...game.gameParams];
        let nextGameScores = [...game.scores];
        //change state if addendum is added
        const addendum = nextGame.find(a => a.id === id);
        if(addendum != undefined)addendum.isAdded = !addendum.isAdded;


        //check score
        let score = nextGame.reduce((sum, g) =>{
            if(g.isAdded && !g.drop){
                return sum += g.value
            };
            return sum;
        },0)

        //Set Addendums statuses when correct sum is met
        if(nextCurrentGameParams != undefined && score > nextCurrentGameParams.elems_sum){
            score = 0;
            let addendums:string="";
            nextCurrentGameParams.num_sums -= 1;
            nextGame = nextGame.map(a =>{
                if(a.isAdded && !a.drop){
                    addendums=addendums == "" ? a.value.toString() : addendums+"+"+a.value.toString()
                    return{...a,drop:!a.drop}
                }else{
                    return a;
                }
            })
            nextGameScores.push({addendums:addendums+"="+nextCurrentGameParams.elems_sum,seconds:time})
        }
        
        
        //Change game when all sums are met
        if(nextCurrentGameParams?.num_sums == 0){
            nextCurrentGameParams = nextGameParams.shift();
            nextGame = buildGame(nextCurrentGameParams);
        }

        //refresh game status
        setGame({addendums:nextGame,currentGameParams:nextCurrentGameParams,gameParams:nextGameParams,scores:nextGameScores});
        
    }

    React.useEffect(() => {
        setHasMounted(true);
      }, []);
    if(game.currentGameParams != undefined){
        if(hasMounted){
            const gridClassName = "grid grid-cols-"+game.currentGameParams.cols+" gap-5 size-full flex"
            // const edge = game.currentGameParams.cols/2
            const styles = "m-auto h-8 md:h-16 lg:h-24 w-8 md:w-16 lg:w-24";
            // const styles = "m-auto h-24 w-24";
            return (
                <>
                    <div className={gridClassName}>
                    {game.addendums.map( (g: AddendumType) => {
                        
                        if(g.drop){
                            return( <div className={styles} key={g.id.toString()}><EmptyAddendum></EmptyAddendum></div> )
                        }else{
                            return( <div className={styles} key={g.id.toString()}><Addendum id={g.id.toString()} val={g.value} handler={() => handleClick(g.id, g.value)} isAdded={g.isAdded} drop={g.drop} edge="160"></Addendum></div> )
                        }
                        
                    })}
                    </div>
                </>
        )}else{
            return(<div className="grid grid-cols-2 gap-5 size-full">
                    {game.addendums.map( (g: AddendumType) => {
                        return(<div role="status" className="m-auto flex items-center justify-center h-10 md:h-16 lg:h-24 w-10 md:w-16 lg:w-24 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"></svg>
                            <span className="sr-only">Loading...</span>
                        </div> )
                    })}
            </div>);
    }}else{return(<></>)}


  }
