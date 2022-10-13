const newType = {}
const keysTest = 123
keysTest = '2'

let keyTest = 123
keyTest = '123' 


interface CountryResp {
    name: string
    area: number
    population: number
}
// keyof
type keys = keyof CountryResp

// lookup types
type NameType =CountryResp['name']

// mapped types
type Test = {
    readonly [p in keys]?:CountryResp[p]
}

let obj: Test = {name:'1'}
Test.name = 1

//  mapped types 结合泛型
// type Test<T> = {
//     readonly [p in keyof T]?:T[p]
// }
// let obj: Test<CountryResp> = {name:'1'}


// 泛型约束
// extends in generics

interface IWtirhLength{
    length:number
}
// 1、类型“T”上不存在属性“length”。
// function echoWithArr<T>(arg: T): T{
//     console.log(arg.length);
    
//     return arg
// }

// 2、处理 类型“T”上不存在属性“length”
// function echoWithArr<T>(arg: T[]): T[]{
//     console.log(arg.length);
//     return arg
// }

// 3、extends 鸭子
function echoWithArr<T extends IWtirhLength>(arg: T): T{
    console.log(arg.length);
    return arg
}

const arrs = echoWithArr([1,2,3])
const arrs1 = echoWithArr('222')
const arrs2 = echoWithArr({length:1})


type NonType<T> = T extends null| undefined? never : T 
const demo: NonType<Number> = 1
// 不能将类型“number”分配给类型“never”
let demo1: NonType<null>
let demo2: NonType<number>


