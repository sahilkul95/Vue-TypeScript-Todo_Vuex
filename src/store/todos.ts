import { GetterTree, MutationTree } from 'vuex'
import { State } from '../types'
import * as _ from 'lodash'

export const state: State = {
    todolist: [
        {
            title: 'Walk the dog',
            project: 'Task A',
            done: false,
        }, {
            title: 'Teach the students',
            project: 'Task B',
            done: true,
        }, {
            title: 'Write a code',
            project: 'Task C',
            done: false,
        }
    ]
}

export const todos = {
    state
}

// export const getters: GetterTree<State, any> = {
//     todos: state => state.todolist
// }

export const getters = {
    todos(state: any){
        return state.todolist
    }
    // todos: state => state.todolist
}

export const mutations = {
    addNewTodoMutation(state: any, newTask: object) {
        state.todolist.push(newTask)
    },
    deleteTodoMutation(state: any, index: number) {
        state.todolist.splice(index, 1)
    },
    completeTodoMutation(state: any, index: number) {
        state.todolist[index].done = true
    },
    updateTitle (state: any, payload: any) {
        const todoIndex = _.indexOf(state.todolist, payload.todo)
        state.todolist[todoIndex].title = payload.newValue
    },
    updateProject (state: any, payload: any) {
        const todoIndex = _.indexOf(state.todolist, payload.todo);
        state.todolist[todoIndex].project = payload.newValue
    },
}