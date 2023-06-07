<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'Quasar'

interface Props {
  calendarDate: Date
  showCalendarWeek: boolean
  calendarWeekPrefix: string
}
const props = defineProps<Props>()

const selected = ref<boolean>(false)

const isWeekend = computed(() => {
  const dayOfWeek = props.calendarDate.getDay()
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return true
  }

  return false
})

</script>

<template>
  <div
    :class="`day-box ${selected ? 'bg-green-2' : ''} `"
    @click="selected = !selected"
  >
    <div
      v-if="showCalendarWeek"
      style="font-size:10px; color:#ccc;"
    >
      {{ calendarWeekPrefix }}{{ date.formatDate(calendarDate, 'ww') }}
    </div>
    <div :class="`text-weight-bold ${isWeekend ? 'text-red' : ''}`">
      {{ date.formatDate(calendarDate, 'dd') }}
    </div>
    <div class="text-weight-bold">
      {{ date.formatDate(calendarDate, 'DD') }}
    </div>
    <div style="margin: 0px; padding:0px; font-size: 10px;">
      {{ date.formatDate(calendarDate, 'MMM') }}
    </div>
    <div style="font-size:10px; color:#ccc;">
      {{ date.formatDate(calendarDate, 'YYYY') }}
    </div>
  </div>
</template>

<style scoped>
.day-box {
  display:inline-block;
  vertical-align:top;
  width: 52px;
  height: 100%;
  border-left:1px solid #ddd;
  background-color: #fff;
  user-select: none;
}

.day-box * {
  width: 100%;
  text-align: center;
}

</style>
