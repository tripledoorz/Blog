function echo<T>(arg: T): T {
    return arg
}

const result = echo('str')


function swap<T, U>(tuple: [T, U]): [U: T] {
    return [tuple[1], tuple[0]]
}
const results = swap(['string', 123])

interface GithubResp {
    name: string
    count: number
}
interface CountryResp {
    name: string
    area: number
    population: number
}

// 泛型 参数传递
function withAPI<T>(url: string): Promise<T> {
    return fetch(url).then(resp => resp.json())
}

withAPI<GithubResp>('github.user').then(resp => {
    // resp可以自动获取到参数的
    resp.count
})


withAPI<CountryResp>('country.resp').then(resp => {
    resp.population
})