// 基本概念
let age: Number = 2
age.toLocaleString
let arr: Object = []

let notSure: any = 2

let user: Number[] = [12, 4, 5]
user.push(3)

let users: [string, number] = ['2', 2]

function add2(x: number, y: number,z?:number):number { 
    return x + y
}
add2(1, 2, 4)

let add3 = (x: number, y: number):number => { 
    return x+y
}
const add4 = add3

const add5: (x: number, y: number) => number = add2
const add: (x: number, y: number) => number = add2


// interface

interface Person { 
    readonly id: number,
    name: string,
    age?:number
}
let vick: Person = {
    id: 1,
    name: '2',
    age:2
}
// vick.id =
interface RanomMap { 
    [propName:string]:string
}
const test: RanomMap = {
    a:'2'
}
interface LikeArray { 
    [index:number]:string
}
const LikeArray: LikeArray = ['2', '2']


interface functionWithProps { 
    (x: number, y: number): number;
    name:string
}

const a: functionWithProps = (x: number, y:number) => {
    return x+y
}
a.name = '2'

const b = a





