//const add = (a, b) => {a + b;}
const MULTIPLER = {
    nummbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.nummbers.map(number => number * this.multiplyBy)
    }
}
console.log(MULTIPLER.multiply())