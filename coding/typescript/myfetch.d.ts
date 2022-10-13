
type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'
declare function myfetch<T = any>(url: string, method: HttpMethod, data?: any): Promise<T>
declare namespace myfetch {
    const get: <T = any>(url: string) => Promise<T>
    const post: <T = any>(url: string, data: any) => Promise<T>
}
