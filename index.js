// ****************** task 1 ********************
console.log("************ Task 1 **************")
const fruits= ["apple", "banana", "orange"];
fruits.push('Mango');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits.unshift('Kiwi','Peach');
console.log(fruits);

// ****************** task 2 ********************

console.log("************ Task 2 **************")
const nums=[1, 2, 3, 4, 5, 6];
let evenArr=[]
nums.filter(even);

function even(value){
    if(value % 2 === 0){
        evenArr.push(value);
        console.log(`${value} is Even`)
    }
}
console.log(evenArr)


let squreArr=[]
evenArr.map(SpuqreRoot);
function SpuqreRoot(value){
      squreNum=Math.pow(value,2);
      squreArr.push(squreNum)
      console.log(`the SpuqreRoot of ${value} is ${squreNum} `)
}
console.log(squreArr)