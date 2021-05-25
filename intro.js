// Given a array first=[1,2,3,4,5];
//  Write a JavaScript program that fill second array in reverse order of first
//  ?
// narr=[5,4,3,2,1]

let arr = [1,2,3,4,5];
let narr = [];

let ins = 0;
for(let i = arr.length - 1; i >= 0; i--){
    narr[ins] = arr[i];
    ins++;
}
console.log(narr);

// Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]
// Output: [1,2,3,100,10]

function contains(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return true;
        }
    }
    return false;
}

var arr1 = [1, 2, 3];
var arr2 = [100, 2, 1, 10];
for (var i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i]) == false) {
    arr2.push(arr1[i]);
  }else{

  }
}
console.log(arr2);



