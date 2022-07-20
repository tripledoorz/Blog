// 每个对象都有一个隐式原型链__proto__，链接该对象函数的prototype

// 创建了一个全新的对象。
// 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
// 生成的新对象会绑定到函数调用的this。
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

function newOperator(ctor) {
	if (typeof ctor !== 'function') {
		throw 'newOperator function the first param must be a function';
	}
	newOperator.target = ctor;
	// 1.创建一个全新的对象，
	// 2.并且执行[[Prototype]]链接
	// 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
    var newObj = Object.create(ctor.prototype);
    // var obj = {}
    // obj.__proto__ = ctor.prototype


	// ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
	// 除去ctor构造函数的其余参数
	var argsArr = [].slice.call(arguments, 1);
	// 3.生成的新对象会绑定到函数调用的`this`。
	// 获取到ctor函数返回结果
	var ctorReturnResult = ctor.apply(newObj, argsArr);
	// 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
	var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
	var isFunction = typeof ctorReturnResult === 'function';
	if (isObject || isFunction) {
		return ctorReturnResult;
	}
	// 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
	return newObj;
}

function news(fn) {
    if (typeof fn !== 'function') return new Error('fn is function')
    var parms = [].slice.call(arguments,1)
    var nesObj = Object.create(fn.prototype)
    var res = fn.apply(nesObj, parms)
    if ((typeof res === 'object' || typeof res === 'function' ) && res !==null ) { 
        return res 
    }
    return nesObj
}


function parent(name, age) {
	this.name = name;
	this.age = age;
	return {name:'对象',age:22}
}
var p = new parent('zz', 11);
// console.log('i am', p.name, '年龄', p.age);

var ps = newOperator(parent, 'zz', 11);
// console.log('i am', ps.name, '年龄', ps.age);

var pss =  news(parent, 'zz', 11)
console.log('i am', pss.name, '年龄', pss.age);



//  创建对象的几种方式

// 第一种字面量
var obj1 = { name: "O1" }
var obj2 = new Object({ name: 'O2' })

// 第二种通过构造函数
var M = function name(){this.name = 'O3'}
var obj3 = new M()

// 第三种Object.cerat()
var p4 = { name: 'O4' }
var obj4 = Object.create(p4)

console.log(obj1, obj2, obj3, obj4);
console.log(
    obj3.__proto__ === M.prototype,
    obj3.constructor === M,
    M === M.prototype.constructor,
    M.__proto__ === Function.prototype,
    M.prototype.__proto__ === Object.prototype,
    obj4.name
);



// 继承
// https://images0.cnblogs.com/blog/138012/201409/181637013624694.png

/**
 * 1.借助构造函数实现继承
 * 问题：继承不了原型
 */
function Parent1() {
    this.play = [1, 2]
}
Parent1.prototype.say = function () {}

function Child1() {
    Parent1.call(this)
}
var s1 = new Child1();
var s2 = new Child1();
console.log(s1.say); //undefined

/**
 * 2.借助原型链 实现继承
 * 解决：原型继承
 * 问题：共享了数据
 */

function Parent2() {
    this.play = [1, 2]
}
Parent2.prototype.say = function () { }

function Child2() {}
Child2.prototype = new Parent2()
var s1 = new Child2();
var s2 = new Child2();
console.log(s1.say,s1.__proto__.__proto__.say());


/**
 * 3.组合模式 实现继承
 * 解决：解决数据共享、原型继承问题
 * 问题：构造函数执行多次
 */
function Parent3() {
    this.play = [1, 2]
}
Parent3.prototype.say = function () {}

function Child3() {
    Parent3.call(this)
}
Child3.prototype = new Parent3()
var s1 = new Child3();
var s2 = new Child3();


/**
 * 4.组合模式--优化1
 * 解决：解决构造函数执行次数 
 * 问题：instanceof 无法准确判断实例继承于构造函数
 */
function Parent4() {
    this.play = [1, 2]
}
Parent4.prototype.say = function () {}

function Child4() {
    Parent4.call(this)
}

Child4.prototype = Parent4.prototype
var s4 = new Child4();
var s5 = new Child4();



/**
 * 5.组合模式--优化2（最优解）
 * 解决：
 * 1、继承不了原型
 * 2、解决数据共享和原型继承问题
 * 3、解决构造函数执行次数 
 * 4、instanceof constructor无法准确判断实例继承于构造函数
 */
function Parent5() {
    this.play = [1, 2]
}
Parent5.prototype.say = function () {}

function Child5() {
    Parent5.call(this)
}

Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5
var s6 = new Child5();
var s7 = new Child5();

