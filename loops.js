// for the given JSON iterate over all for loops (for, for in,for of,forEach)

// for in loops(using for ojects)
 let X = [{
    "SCHOOL":"SVM",
    "RANK":"2",
}];

for(let i in X)
{
console.log (i,X[i]);
}

//For loops (using for loops condition)
let Y =[{
    "CLASS": "A",
    "STRENGTH": "40",

}]
for (let i=0; i<Y.length; i++){
    console.log(Y[i]);
}
//for Each(using for step by step)
let Z =[{
    "SCHOOL": "SRV",
    "RANK": "2",
}];
Z.forEach(i=> console.log(i));
// for of loops (using for collections)
let U=[{
    "SCHOOL":"VVV",
    "RANK": "5",
}];
for (let i of U){
    console.log(i);
}
