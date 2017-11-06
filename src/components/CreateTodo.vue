<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('title') }" v-model="titleText" name="title" type='text'>
            <span v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('project') }" v-model="projectText" name="project" type='text'>
            <span v-show="errors.has('project')" class="help is-danger">{{ errors.first('project') }}</span>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

@Component({})
export default class CreateTodo extends Vue{
      titleText: string = ''
      projectText: string = ''
      isCreating: boolean = false
      openForm(): void {
      this.isCreating = true;
    }
    closeForm(): void {
      this.isCreating = false;
    }
    sendForm(): void {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title: string = this.titleText;
        const project: string = this.projectText;
        this.$emit('create-todo', {
          title,
          project,
          done: false,
        });
        this.titleText = ''
        this.projectText = ''
      }
      this.isCreating = false;
    }
}

// export default Vue.extend({
//   name: 'create-todo',
//   data() {
//     return {
//       titleText: '',
//       projectText: '',
//       isCreating: false,
//     };
//   },
//   methods: {
//     openForm(): void {
//       this.isCreating = true;
//     },
//     closeForm(): void {
//       this.isCreating = false;
//     },
//     sendForm(): void {
//       if (this.titleText.length > 0 && this.projectText.length > 0) {
//         const title: string = this.titleText;
//         const project: string = this.projectText;
//         this.$emit('create-todo', {
//           title,
//           project,
//           done: false,
//         });
//       }
//       this.isCreating = false;
//     },
//   },
// });
</script>