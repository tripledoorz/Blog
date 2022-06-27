// * 递归
// X的N次方
function pow(x, n) {
	if (n == 1) return x;
	return x * pow(x, n - 1);
}
console.log(pow(10, 4));

// * 尾递归
// n的阶乘
function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(4));

function factorialX(n, total) {
	if (n === 1) return total;
	return factorialX(n - 1, n * total);
}
console.log(factorialX(4,total=1));


/* 
应用
*/
// 1、数组求和
function sumArry(arr) { 
    for (var i = 0; i < arr.length -1 ; i++ ) { 
      
    }
}