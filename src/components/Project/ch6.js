let salary = 60000;
 let anualdeposit = .02;
 let anualap = 0.12;
 let salaryincrease = 1.03;


 //salary = 61000


let pmt1 = salary*salaryincrease*anualdeposit;

let g = 0.03
let n = 40
let fv = pmt1 * ( Math.pow(1+anualap, n)- Math.pow(1+g,n)) / (anualap-g)
 
console.log(fv)


// //fv = p * (( 1 + r) ^ t - 1) / r
// //fv / (( 1 + r) ^ t - 1) / r = p;

// let p = fv / (( Math.pow( 1 + r, t ) - 1 )  / r )

// console.log("p:", p)

