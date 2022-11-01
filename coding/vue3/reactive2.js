
let total = 0;
let dep = new Set();
function track() {
	dep.add(effect);
}

function trigger() {
	dep.forEach((effect) => effect());
}

const reactive = (obj) => {
	const handler = {
		get() {
			console.log('trigger get');
			let result = Reflect.get(...arguments);
			track();
			return result;
		},
		set() {
			console.log('trigger set');
			let result = Reflect.set(...arguments);
			trigger();
			return result;
		},
	};
	const proxy = new Proxy(obj, handler);
	return proxy;
};
let product = reactive({price: 5, count: 2})
let effect = () => {
	total = product.price * product.count;
};
effect()
console.log(total);
product.price = 10
console.log(`total is ${total}`);