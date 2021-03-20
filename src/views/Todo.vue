<template>
  <div class="todo-page">
    <h1>Todo</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label: </label>
        <input type="text" id="task-label" v-model="newTask.label" />
      </div>
      <div class="mb1">
        <label for="task-type">Take Type: </label>
        <select name="task-type" id="task-type" v-model="newTask.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
    <h2>Task List</h2>
    <div>
      <button @click="listFilter = 'all'">All</button> |
      <button @click="listFilter = 'incomplete'">Incomplete</button> |
      <button @click="listFilter = 'complete'">Complete</button>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input type="checkbox" v-model="task.isComplete" /> {{ task.label }} ({{
          task.type
        }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */

import { computed, defineComponent, reactive, toRefs } from 'vue'
import { TodoItem } from '../types'

export default defineComponent({
  // adding setup method indicates you're about to use the Composition API
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal'
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: 'all'
    })

    // the computed heper method takes a callback function
    const filteredTasks = computed(() => {
      if (state.listFilter === 'complete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === true
        )
      } else if (state.listFilter === 'incomplete') {
        return state.taskItems.filter(
          (item: TodoItem) => item.isComplete === false
        )
      } else {
        return state.taskItems
      }
    })

    const addTask = () => {
      state.taskItems.push({
        ...state.newTask,
        isComplete: false
      })
    }

    return {
      ...toRefs(state) // toRefs allows to you refer to individual pieces of state within your template instead of having to say state.newTask, state.taskItems, etc. inside of the template
    }
  }
})
</script>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
}

.mb1 {
  margin-bottom: 1rem;
}
</style>
