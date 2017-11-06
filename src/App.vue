<template>
  <div id="app">
    <h1 class="ui dividing centered header">Vue.js Todo App with TypeScript</h1>
    <div class='ui three column centered grid'>
      <div class='column'>
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="addTodo"></create-todo>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import TodoList from './components/TodoList.vue'
  import CreateTodo from './components/CreateTodo.vue'
  import swal from 'sweetalert'
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
  // import {Vue, Component, Prop} from 'av-ts'
  // import * as vts from 'vue-typescript-component'

  import { Getter, Mutation } from 'vuex-class'
  import { Todo } from './types'
  @Component({
    components: {
      CreateTodo,
      TodoList
    }
  })
  export default class App extends Vue{
    @Getter todos: Todo
    @Mutation addNewTodoMutation: any
    
    addTodo(newTodo: object) {
      this.addNewTodoMutation(newTodo)
      swal('Success!', 'To-Do created!', 'success');
    }
  }

  //   export default Vue.extend({
  //   name: 'app',
  //   components: {
  //     TodoList,
  //     CreateTodo
  //   },
  //   data() {
  //     return {
  //       todos: [{
  //         id: 'abcd1234_1',
  //         title: 'Walk the dog',
  //         project: 'Task A',
  //         done: false,
  //       }, {
  //         id: 'abcd1234_2',
  //         title: 'Teach the students',
  //         project: 'Task B',
  //         done: true,
  //       }, {
  //         id: 'abcd1234_3',
  //         title: 'Write a code',
  //         project: 'Task C',
  //         done: false,
  //       }, {
  //         id: 'abcd1234_4',
  //         title: 'Write a novel',
  //         project: 'Task D',
  //         done: true,
  //       }],
  //     }
  //   },
  //   methods: {
  //     addTodo(newTodo) {
  //       this.todos.push(newTodo)
  //       swal('Success!', 'To-Do created!', 'success');
  //     },
  //   }
  // });

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
