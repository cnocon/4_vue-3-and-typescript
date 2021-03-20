<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { EventItem } from '@/types'

export default defineComponent({
  data() {
    return {
      events: [] as EventItem[]
    }
  },
  computed: {
    firstEvent(): EventItem {
      return this.events[0]
    }
  },
  methods: {
    addEvent(newEvent: EventItem) {
      this.events.push(newEvent)
    },
    secondEvent(): EventItem {
      return this.events[1]
    }
  }
})
</script>
