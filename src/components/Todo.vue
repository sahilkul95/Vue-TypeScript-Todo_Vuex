<template>
	<div class='ui centered card'>
		<div class='content' v-show="!isEditing">
			<div class='header'>
				{{ todo.title }}
			</div>
			<div class='meta'>
				{{ todo.project }}
			</div>
			<div class='extra content'>
				<span class='right floated edit icon' v-on:click="showTaskEditForm">
					<i class='edit icon'></i>
				</span>
				<span class='right floated trash icon' v-on:click="deleteTodo(todo)">
					<i class='trash icon'></i>
    			</span>
			</div>
		</div>
		
		<div class="content" v-show="isEditing">
			<div class='ui form'>
				<div class='field'>
					<label>Title</label>
					<input type='text' v-model="todo.title">
				</div>
				<div class='field'>
					<label>Project</label>
					<input type='text' v-model="todo.project">
				</div>
				<div class='ui two button attached buttons'>
					<button class='ui basic blue button' v-on:click="hideForm">
						Close X
					</button>
				</div>
			</div>
		</div>
		<div class='ui bottom attached green basic button' v-show="todo.done">
			Completed
		</div>
		<div class='ui bottom attached red basic button' @click="completeTodo(todo)" v-show="!todo.done">
			Complete
		</div>
	</div>
</template>

<script lang="ts">
	// import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
	import { Component, Prop, Vue, Watch } from 'vue-property-decorator'	
	import { Mutation } from 'vuex-class'

	@Component({})
	export default class Todo extends Vue{
		payload: object
		@Mutation updateTitle: any
		@Mutation updateProject: any
		@Prop()
		todo: object

		isEditing: boolean = false
		
		@Watch('todo.title')
		onTitleChange(val: string){
			this.payload = {newValue: val, todo: this.todo}
			this.updateTitle(this.payload)
		}

		@Watch('todo.project')
		onProjectChange(val: string){
			this.payload = {newValue: val, todo: this.todo}
			this.updateProject(this.payload)
		}

		showTaskEditForm() {
    		this.isEditing = true;
    	}
    	hideForm() {
    		this.isEditing = false;
    	}
    	deleteTodo(todo: object) {
    		this.$emit('delete-todo', this.todo);
    	}
    	completeTodo(todo: object) {
    		this.$emit('complete-todo', this.todo);
		}
	}

  	// export default Vue.extend({
	// name: 'todo',
	// props: ['todo'],
	// data() {
    // 	return {
    // 		isEditing: false,
    // 	};
	// },
	// methods: {
    // 	showTaskEditForm() {
    // 		this.isEditing = true;
    // 	},
    // 	hideForm() {
    // 		this.isEditing = false;
    // 	},
    // 	deleteTodo(todo: object) {
    // 		this.$emit('delete-todo', this.todo);
    // 	},
    // 	completeTodo(todo: object) {
    // 		this.$emit('complete-todo', this.todo);
    // 	},
    // },
	// });
</script>


<style scoped>

</style>
