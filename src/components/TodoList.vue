<template>
	<div>
		<div>
			<center>
				<p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
				<p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
			</center>
			<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos" :key="index" v-bind:todo="todo"></todo>
		</div>
	</div>
</template>

<script lang="ts">
	import Todo from './Todo.vue'
	import swal from 'sweetalert'
	import { Mutation } from 'vuex-class'
	import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

	@Component({
		components: {
			Todo
		}
	})
	export default class TodoList extends Vue{
		@Mutation deleteTodoMutation: any
		@Mutation completeTodoMutation: any
		@Prop()
		todos: object[]

		deleteTodo(todo: object) {
			const todoIndex = (this.todos).indexOf(todo)
			swal('Success!', 'To-Do deleted!', 'success')
			this.deleteTodoMutation(todoIndex)
		}
		completeTodo(todo: object) {
			const todoIndex = (this.todos).indexOf(todo)
			swal('Success!', 'To-Do completed!', 'success')
			const selectedTodo = this.todos[todoIndex]
			this.completeTodoMutation(todoIndex)
		}
	}
	
	// export default Vue.extend({
	// 	name: 'TodoList',
  	// 	components: {
    // 		Todo
  	// 	},
	// 	props: ['todos'],
	// 	methods: {
	// 		deleteTodo(todo: object) {
	// 			const todoIndex = (this.todos).indexOf(todo)
	// 			swal('Success!', 'To-Do deleted!', 'success')
	// 			this.todos.splice(todoIndex, 1)
	// 		},
	// 		completeTodo(todo: object) {
	// 			const todoIndex = (this.todos).indexOf(todo)
	// 			swal('Success!', 'To-Do completed!', 'success')
	// 			this.todos[todoIndex].done = true
	// 		},
	// 	},
	// });
</script>

<style scoped>
	p {
		text-align: center;
	}
</style>