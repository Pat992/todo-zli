export type UniqueId = number | string | undefined;

export default interface Todo {
    id: UniqueId
    title: string
    completed: boolean
}

export class TodoImpl implements Todo {
    id: UniqueId
    title: string
    completed: boolean

    constructor(title: string) {
        this.title = title
        this.completed = false
    }
}