
// let num = 10

// function checkT(number,symbol){
//     if(number >100){
//         console.log("Max values 100")
//     }
//     if(number < 0){
//         console.log("min values 0")
//     }
//     if(symbol == "+"){
//         console.log(num+2)
//     }
//     if(symbol == "-"){
//         console.log(num-1)
//     }
    
// }

// checkT(1,"-")



// permission 
// role 

// select role.permission,role from role left join permission on role.permissionId = permission.id ;

let x = [
    {
        charges:[{id:1},{id:1},{id:1},{id:1}]
    },
    {
        charges:[{id:1},{id:1},{id:1},{po:1}]
    },
    {
        charges:[{id:1},{id:7}]
    }
]

let s = x.reduce((acc ,item,index,array)=>{
    let arr = item.charges
   let count = arr.reduce((acc ,item ,index,arr)=>{
        if(item.id == 1){
            // console.log(acc)
            acc += 1
        }
        return acc
    },0)
    // console.log("count",count)
      return acc += count
},0)

// console.log(s)

// let count = 0
// for(let i = 0 ; i<x.length ;i++){
//     let s =x[i].charges
//    let count = s.forEach((item ,index ,acc)=>{
//       if(item.id){
//         acc++
//         console.log(acc)
//       }
//     },0)
   
//     count +=  x[i].charges.length
// }

// console.log(count)




// let arr = [45,25,[47,36,12,[5,[47]]],[56,[23]]]

// let a =arr.flat(1,arr)
// console.log(a)


// let ar =[]
// function flat(arr){

//    arr.forEach(item=>{
//    if(Array.isArray(item)){
//     return  flat(item)
//    } 
//    ar.push(item)
  
//    });
//   return ar
// }

// console.log(flat(arr))



let arr = [45,25,[47,36,12,[5,[47]]],[56,[23]]]

let ar =[]


function flat(arr){
   let d = arr.reduce((acc ,item )=>{
        if(Array.isArray(item)){
          return  flat(item)
        }
        ar.push(item)
    },0)
    return ar
}

console.log(flat(arr))





