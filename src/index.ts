export const add = (num1: number) => (num2: number): number => num1 + num2

export const multiply = (num1: number) => (num2: number): number => num1 * num2

export const inc = (num: number): number => add(1)(num)

export const dec = (num: number): number => add(-1)(num)

export const find = (fn: (...args: any) => Boolean) => (array: any[]): object => array.find(fn)

export const filter = (fn: (...args: any) => Boolean) => (array: any[]): any[] => array.filter(fn)

export const map = (fn: (...args: any) => any) => (array: any[]): any[] => array.map(fn)

export const pluck = (key: string) => (a: object[]): any[] => a.map(x => x[key])

export const addProp = (key: string, val: string) => (data: object): object => Object.assign(data, {[key]: val})

export const compose = (...fns: Function[]) => (x: any) => fns.reduceRight((y, f) => f(y), x)

export const pipe = (...fns: Function[]) => (x: any) => fns.reduce((y, f) => f(y), x)

export const qs = (cssSelector: string) => (parentNode: HTMLElement): HTMLElement => parentNode.querySelector(cssSelector) as HTMLElement

export const qsa = (cssSelector: string) => (parentNode: HTMLElement): NodeList => parentNode.querySelectorAll(cssSelector)