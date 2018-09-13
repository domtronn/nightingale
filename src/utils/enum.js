import { toSnakeCase } from './s'

let e = []         | {}
    e = [x, ...ys] | { [toSnakeCase(x).toUpperCase()]: x, ...e(ys) }

export default e
