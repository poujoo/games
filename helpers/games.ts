export function buildGame(currentGameParams:{elems:number, cols:number, elems_sum:number, num_sums:number}|undefined){
    const values = Array.from(Array(currentGameParams?.elems).keys());
    return values.map((e,i) => {
        let val = Math.floor(Math.random()*10)
        return {id:e,value:val,isAdded:false,drop:false};
    });

} 