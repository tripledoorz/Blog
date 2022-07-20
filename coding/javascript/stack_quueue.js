// 栈和队列
// 执行顺序的不同：栈 先入后出、队列 先进先出
// class Stack {
//     constructor() {
//         this.item = []
//     }
    
//     // 添加注释
    
// }

// 
function promise1 () {
    let p = new Promise((resolve) => {
      console.log('promise1');
      resolve('1')
    })
    return p;
  }
  function promise2 () {
    return new Promise((resolve, reject) => {
      reject('error')
    })
  }
  promise1()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally1'))
  
  promise2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally2'))


  
//  入參，二進制
[].forEach()
    console.log(object);
[1,2,3].map(parseInt)
setTimeout(() => {
    
}, timeout);
console.log(parseInt(1, 0),
parseInt(2, 1),
parseInt(3, 2),parseInt(03, 2),parseInt('3', 2),parseInt('0111', 2));
    
