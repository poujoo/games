function combinationSums<T>(items: T[], size: number = items.length): T[][] {
  const combinations: T[][] = [];
  const stack: number[] = [];
  let i = 0;

  size = Math.min(items.length, size);

  while (true) {
    if (stack.length === size) {
      combinations.push(stack.map((index) => items[index]));
      i = stack.pop()! + 1;
    }

    if (i >= items.length) {
      if (stack.length === 0) {
        break;
      }
      i = stack.pop()! + 1;
    } else {
      stack.push(i++);
    }
  }

  return combinations;
}

export function findCombinations(places:number[],sum:number|undefined): number[][]{
    let allSum:number[][] = []
    for (let index = 0; index < places.length; index++) {
        const element = places[index];      
        const init = Array(sum).fill(1).map((_, i) => i+1)
        const combinations = combinationSums(init,element)
        const sameSum = combinations.filter((a)=>(a.reduce((a,b)=>a+b,0)==sum))
        sameSum.forEach(element => {
            allSum.push(element)
        });
    }
    return allSum;
}