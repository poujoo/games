
import { AddendumType, CurrentGameParamsType } from "@/app/[lang]/components/fastSquareContext";
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
// [
//     'bg-gray-200',   'bg-gray-300',   'bg-gray-400',   'bg-gray-500',
//     'bg-gray-600',   'bg-gray-700',   'bg-gray-800',   'bg-red-200',
//     'bg-red-300',    'bg-red-400',    'bg-red-500',    'bg-red-600',
//     'bg-red-700',    'bg-red-800',    'bg-orange-200', 'bg-orange-300',
//     'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700',
//     'bg-orange-800', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400',
//     'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800',
//     'bg-lime-200',   'bg-lime-300',   'bg-lime-400',   'bg-lime-500',
//     'bg-lime-600',   'bg-lime-700',   'bg-lime-800',   'bg-green-200',
//     'bg-green-300',  'bg-green-400',  'bg-green-500',  'bg-green-600',
//     'bg-green-700',  'bg-green-800',  'bg-slate-200',  'bg-slate-300',
//     'bg-slate-400',  'bg-slate-500',  'bg-slate-600',  'bg-slate-700',
//     'bg-slate-800',  'bg-sky-200',    'bg-sky-300',    'bg-sky-400',
//     'bg-sky-500',    'bg-sky-600',    'bg-sky-700',    'bg-sky-800',
//     'bg-pink-200',   'bg-pink-300',   'bg-pink-400',   'bg-pink-500',
//     'bg-pink-600',   'bg-pink-700',   'bg-pink-800',   'bg-violet-200',
//     'bg-violet-300', 'bg-violet-400', 'bg-violet-500', 'bg-violet-600',
//     'bg-violet-700', 'bg-violet-800'
//   ]

const l = colors.length-1

export function buildGame(currentGameParams:CurrentGameParamsType):AddendumType[]{

    const values = Array.from(Array(currentGameParams?.elems).keys());
    // const sums = findCombinations(currentGameParams.elems,[2,3,4],currentGameParams.elems_sum);
    // console.log(sums)
    return values.map((e,i) => {

        const val = Math.floor(Math.random()*10)

        return {id:e,value:val,isAdded:false,drop:false,color:colors[random(l)]};
    });


} 