//Store

export interface State {
    todolist: Todo[]
}

//Models

export interface Todo {
    title: string,
    project: string
    done: boolean
}