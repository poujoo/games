// function random(max:number) {
//     return Math.floor(Math.random() * max);
// }

// const colors = ["bg-yellow-300","bg-cyan-300",]
// export function pickTailwindColor():string {
//     // const options={colors:['gray','red','orange','yellow','lime','green','slate','sky','pink','violet'],range:[2,3,4,5,6,7,8],prefix:'bg'};
//     // const number = options.range[random(options.range.length-1)] * 100;
//     // const indexColor = random(options.colors.length-1);
//     // return `${options.prefix}-${options.colors[indexColor]}-${number}`;
//     return colors[Math.round(Math.random())];

// }

const options={colors:['gray','red','orange','yellow','lime','green','slate','sky','pink','violet'],range:[2,3,4,5,6,7,8],prefix:'bg'};
let all_colors = [];
for (let i = 0; i < options.colors.length; i++) {
    for (let j = 0; j < options.range.length; j++) {
        all_colors.push(options.prefix+"-"+options.colors[i]+"-"+options.range[j]*100)
    }
}

console.log(all_colors)