<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/**
 * Disabling eslint for line because of "no-unused-vars" error
 * for EventItem, which is only being used in type assertion with
 * the event returned as data, not for declaring a variable, perhaps
 */
// eslint-disable-next-line no-unused-vars
import { EventItem } from '../types'
import EventService from '../services/EventService'

export default defineComponent({
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: {} as EventItem
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>
