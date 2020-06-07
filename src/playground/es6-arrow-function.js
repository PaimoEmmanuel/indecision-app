const SQUARE = function(x){
    return x * x;
}; 

const squareArrow = (x,y) => {
    return x*y
}
let arrFn = x => x+x;
console.log(arrFn(5))
console.log(SQUARE(8));
console.log(squareArrow(8,5));

let getFistName = name => name.split(' ')[0];
console.log(getFistName('Shola mAdu'))