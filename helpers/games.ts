
import { AddendumType, CurrentGameParamsType } from "@/app/[lang]/games/game/components/fastSquareContext";
import { findCombinations } from "./combinationSum";

function random(max:number) {
    return Math.floor(Math.random() * max);
}

const colors = [
    'gray-200',   'gray-300',   'gray-400',   'gray-500',
    'gray-600',   'gray-700',   'gray-800',   'red-200',
    'red-300',    'red-400',    'red-500',    'red-600',
    'red-700',    'red-800',    'orange-200', 'orange-300',
    'orange-400', 'orange-500', 'orange-600', 'orange-700',
    'orange-800', 'yellow-200', 'yellow-300', 'yellow-400',
    'yellow-500', 'yellow-600', 'yellow-700', 'yellow-800',
    'lime-200',   'lime-300',   'lime-400',   'lime-500',
    'lime-600',   'lime-700',   'lime-800',   'green-200',
    'green-300',  'green-400',  'green-500',  'green-600',
    'green-700',  'green-800',  'slate-200',  'slate-300',
    'slate-400',  'slate-500',  'slate-600',  'slate-700',
    'slate-800',  'sky-200',    'sky-300',    'sky-400',
    'sky-500',    'sky-600',    'sky-700',    'sky-800',
    'pink-200',   'pink-300',   'pink-400',   'pink-500',
    'pink-600',   'pink-700',   'pink-800',   'violet-200',
    'violet-300', 'violet-400', 'violet-500', 'violet-600',
    'violet-700', 'violet-800'
  ]

const l = colors.length-1
const shuffle = (array: any[]) => {
    array.sort(() => Math.random() - 0.5);
  }
export function buildGame(currentGameParams:CurrentGameParamsType):AddendumType[]{

    const sums = findCombinations([2,3,4],currentGameParams?.elems_sum);
    const l_sums = sums.length-1;
    let values:number[] = [];
    if(currentGameParams != undefined){
        for (let index = 0; index < currentGameParams.sum_blocks; index++) {
            values=values.concat(sums[random(l_sums)])
        }
        const l = values.length
        let topUp = [];
        for (let index = 0; index < (currentGameParams.elems - l) ; index++) {
            topUp.push(Math.floor(Math.random()*currentGameParams.elems_sum))
        }
        values = values.concat(topUp)
        shuffle(values)
    }
    
    return values.map((e,i) => {
        return {id:i,value:e,isAdded:false,drop:false,color:colors[random(l)]};
    });


} 