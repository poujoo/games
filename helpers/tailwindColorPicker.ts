function random(max:number) {
    return Math.floor(Math.random() * max);
}
// generate by running: node helpers/tailwindColorPicker_run.js
const colors = [
    'bg-gray-200',   'bg-gray-300',   'bg-gray-400',   'bg-gray-500',
    'bg-gray-600',   'bg-gray-700',   'bg-gray-800',   'bg-red-200',
    'bg-red-300',    'bg-red-400',    'bg-red-500',    'bg-red-600',
    'bg-red-700',    'bg-red-800',    'bg-orange-200', 'bg-orange-300',
    'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700',
    'bg-orange-800', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400',
    'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800',
    'bg-lime-200',   'bg-lime-300',   'bg-lime-400',   'bg-lime-500',
    'bg-lime-600',   'bg-lime-700',   'bg-lime-800',   'bg-green-200',
    'bg-green-300',  'bg-green-400',  'bg-green-500',  'bg-green-600',
    'bg-green-700',  'bg-green-800',  'bg-slate-200',  'bg-slate-300',
    'bg-slate-400',  'bg-slate-500',  'bg-slate-600',  'bg-slate-700',
    'bg-slate-800',  'bg-sky-200',    'bg-sky-300',    'bg-sky-400',
    'bg-sky-500',    'bg-sky-600',    'bg-sky-700',    'bg-sky-800',
    'bg-pink-200',   'bg-pink-300',   'bg-pink-400',   'bg-pink-500',
    'bg-pink-600',   'bg-pink-700',   'bg-pink-800',   'bg-violet-200',
    'bg-violet-300', 'bg-violet-400', 'bg-violet-500', 'bg-violet-600',
    'bg-violet-700', 'bg-violet-800'
  ]

const color_lenght = colors.length

export function pickTailwindColor():string {
    const index = random(color_lenght-1);
    return colors[index];

}