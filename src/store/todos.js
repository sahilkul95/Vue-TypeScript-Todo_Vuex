"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
exports.state = {
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
};
exports.todos = {
    state: exports.state
};
// export const getters: GetterTree<State, any> = {
//     todos: state => state.todolist
// }
exports.getters = {
    todos: function (state) {
        return state.todolist;
    }
    // todos: state => state.todolist
};
exports.mutations = {
    addNewTodoMutation: function (state, newTask) {
        state.todolist.push(newTask);
    },
    deleteTodoMutation: function (state, index) {
        state.todolist.splice(index, 1);
    },
    completeTodoMutation: function (state, index) {
        state.todolist[index].done = true;
    },
    updateTitle: function (state, payload) {
        var todoIndex = _.indexOf(state.todolist, payload.todo);
        state.todolist[todoIndex].title = payload.newValue;
    },
    updateProject: function (state, payload) {
        var todoIndex = _.indexOf(state.todolist, payload.todo);
        state.todolist[todoIndex].project = payload.newValue;
    },
};
//# sourceMappingURL=todos.js.map