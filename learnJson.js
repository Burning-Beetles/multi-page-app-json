
// // JSON: 
// // 10 mins

// // data Types: Number, Boolen, String, arrays, objects 


// let n = 10   //  10 , 10.5

// let b = true // true, false


// let s = 'hello' // "hello"

// let arr = [10,20,30] // [10,20,30] 


// let obj = {
//    a: 10,
//    b:20,
// }


// // json: 

// {
//    "a": 10,
//    "b":20
// }




// let arr = [10,20,30]

// let obj = {
//     name: "Abhishek",
//     age: 27,
//     email: "abhishek@abhi.com"
//   }
  
  // convert this to JSON 

//   console.log(obj)
//   let j = JSON.stringify(obj) // convert js to JSon and store it inside string

//   console.log(j)

// let backToJs = JSON.parse(j) // convert JSON to JS

// console.log(backToJs)



  

let arr = [10,20,`apple`, true, false, 30, {a:10, b:20}]

// convert arr to JSon: 
let jsonArr = JSON.stringify(arr)

console.log(arr)
console.log(jsonArr, typeof jsonArr)

let jsArr = JSON.parse(jsonArr)

console.log(jsArr)