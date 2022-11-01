// Reflect ES6操作对象的set和get
const person = {
    name: 'viking'
}
const handler = {
    get() { 
        console.log('trigger get');
        return Reflect.get(...arguments)
    },
    set() {
        console.log('trigger set');
        return Reflect.set(...arguments)
     }
}
const proxy = new Proxy(person, handler)
proxy.name = 'maomao'
console.log(proxy.name);