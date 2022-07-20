// 1. 以函数的形式调用时，this永远都是window
// 2. 以方法的形式调用时，this就是调用方法的对象
// 3. 以构造函数的形式调用时，this就是新创建的对象
// 4. 使用call和apply调用时，this就是指定的那个对象
// 5. 在全局作用域中this代表window
function Fn() {
	this.name = 'xx';
}
Fn.prototype.getName = function () {
	console.log(this.name);
};
var f1 = new Fn();
f1.getName();

function Shadow() {
	this.name = 'ddd';
	this.age = '212';
	this.fn = function () {
		console.log('ddd');
	};
}
var fs = new Shadow();
console.log(fs, fs.fn);
