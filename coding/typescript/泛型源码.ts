interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null
    propsTypes?: W<P>
    constextL?: V<any>
    defaultProps?: Partial<P>
    displayName?: string
}

interface TestProps {
    title: string
    desc: string
}

const Test: FunctionComponent = (props) => {
    return (
        <>
        <h1>{ props.title } < /h1>
        < p > { props.desc } < /p>
        < />
    )
}

Test.propsTypes

// 类型别名
let sum: (x: number, y: number) => number
type PlusType = (x: number, y: number) => number

interface Iname { 
    name:string
}
type Iperson = Iname & { age: number }
let person: Iperson = { name: '22', age: 12 }

// 联合类型
let numberOrString: number | string

// 类型断言
function getLength(input: number | string) { 
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
     }
}
// partial 接受一个泛型把内部的属性都可选
interface Person { 
    name：string
    age: number
}
type PersonOptional = Partial<Iperson>
let viking2: PersonOptional = {name:'2'}

