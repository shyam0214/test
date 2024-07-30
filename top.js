
// (async () => {
//   try {
//     // Increase the default timeout
//     const browser = await puppeteer.launch({
//       headless: false, // Set to false to run in a visible browser
//       args: ['--no-sandbox', '--disable-setuid-sandbox'], // Additional arguments
//       timeout: 60000 // Increase timeout to 60 seconds
//     });

//     const page = await browser.newPage();

//     await page.setContent('<h1>Hello, Puppeteer!</h1>');

//     await page.pdf({ path: 'example.pdf', format: 'A4' });

//     await browser.close();

//     console.log('PDF created successfully');
//   } catch (error) {
//     console.error('Error creating PDF:', error);
//   }
// })();

// let f = 5

// function factorial(f){

//   if(f == 0)return 1
//   return f * factorial(f-1)
// }
// console.log(factorial(f))

// let d = 5
// function factorial(f){
//   if(f ==0)return 1
//   return f*factorial(f-1)
// }

// console.log(factorial(d))

// let s = ""
// for(let i=0;i<=4 ;i++){
//   for(let j = (4-i) ;j>0 ;j--){
//     s += "* "
//   }
//   console.log(s)
//   s = ""
// }

// let as =""

// for(let i = 0 ;i<10;i++){
//   for(let j=0;j<(10-i);j++){
//       as += "$ "
//   }
//   console.log(as)
//   as =""
// }
// for(let i = 0 ;i<10;i++){
//   for(let j=0;j<i;j++){
//       as += "$ "
//   }
//   console.log(as)
//   as =""
// }

// let s = 5

// function factorial(f){
//   if(f == 0)return 1
//   return f * factorial(f-1)
// }
// console.log(factorial(s))

// let str = "madap"

// function palindromic(str){
//   let start =0
//   let end = str.length -1

//   while(start < end){
//    if(str[end] != str[start]){
//     return "not palindromic"
//    }else{
//     start++
//     end--
//    }

//   }
//   return "palindromic"
// }

// console.log(palindromic(str))

// function palindromic(str){
//   let start = 0
//   let end = str.length-1

//   while(start < end){
//     console.log(str[start],str[end])
//     if(str[start] != str[end]){
//       return "not palindromic"
//     }else{
//       start++
//       end--
//     }
//   }
//   return "palindromic"
// }
// console.log(palindromic(str))

// let arr = [8,6,9,7,2,3,1]

// for(let i = 0 ; i<arr.length ;i++){
//   for(let j = 0 ;j<i ;j++){
//     if(arr[i] < arr[j]){
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr)

// class Node {
//   constructor(value, next) {
//     (this.name = value), (this.next = null);
//   }
// }

// let arr = [4, 2, 6, 8, 9];
// let s = new Node();
// let d = s;
// for (let i = 0; i < arr.length; i++) {
//   let node = new Node(arr[i]);
//   d.next = node;
//   d = d.next;
// }
// console.log(s.next);

// function traverse(dummy){
//   let cur = dummy.next
//   let count =0
//   while(cur != null){
//     console.log(cur.name)
//     count++
//     cur = cur.next
//   }
//   return count
// }
// console.log(traverse(s))