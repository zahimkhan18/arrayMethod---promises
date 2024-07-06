// findMethod

// let arr = [1 , 2 , 3 , 4 , 5]

// let find  = arr.find((value,index)=>{
//     // console.log(value)
//     if(value == 3){
//         return true
//     }
// })
// console.log(find)

// findIndex method
// let arr = ["karachi", "lahore" , "multan" , "islamabad"]

// let findIndex  = arr.findIndex((value,index)=>{
//     // console.log(value)
//     if(value == "multan"){
//         return true
//     }
// })
// console.log(findIndex)

// mapMethod
//  let arr = [1,2,3,4,5]

// let map = arr.map((value,index)=>{
//     return value * 4
// })
// console.log(arr)
// console.log(map)

// filterMethod
// let arr = [2,3,3,4,5,2,4,,2]

// let filterarr = arr.filter((value,index)=>{
//     console.log(value,index)
//     if(value == 2){
//         return true
//     }
// })
// console.log(filterarr);

// promises

let promise = new Promise((resolve, reject) => {
    let requestlogin = true
    if(requestlogin){
        resolve("login succesfull")
    }else{
        reject("somethig went wrong")
    }
})
.then((success)=>console.log(success, "then"))
.catch((error)=>console.log(error, "catch"))