function combinationSums(items, size = items.length){
    const combinations = [];
    const stack = [];
    let i = 0;
  
    size = Math.min(items.length, size);
  
    while (true) {
      if (stack.length === size) {
        combinations.push(stack.map((index) => items[index]));
        i = stack.pop() + 1;
      }
  
      if (i >= items.length) {
        if (stack.length === 0) {
          break;
        }
        i = stack.pop() + 1;
      } else {
        stack.push(i++);
      }
    }
  
    return combinations;
  }
//   const greatest_number = 10;
//   const places = 3
//   const sum = 10;
//   const init = Array(greatest_number).fill(1).map((_, i) => i+1)
//   console.log(init)
//   const combinations = findCombinations(init,places)
//   const sameSum = combinations.filter((a)=>(a.reduce((a,b)=>a+b,0)==sum))
// console.log(sameSum)

export function findCombinations(greatest_number,places,sum){
    let allSum = []
    for (let index = 0; index < places.length; index++) {
        const element = places[index];
        const init = Array(greatest_number).fill(1).map((_, i) => i+1)
        const combinations = combinationSums(init,element)
        const sameSum = combinations.filter((a)=>(a.reduce((a,b)=>a+b,0)==sum))
        sameSum.forEach(element => {
            allSum.push(element)
        });
    }
    return allSum;
}

// console.log(findCombinations(10,[2,3,4],10))