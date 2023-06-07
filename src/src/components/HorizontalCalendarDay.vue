<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'Quasar'

interface Props {
  calendarDate: Date
  showCalendarWeek: boolean
  calendarWeekPrefix: string
  locales: string | undefined
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

const isToday = computed(() => {
  if (props.calendarDate.toDateString() === new Date().toDateString()) {
    return true
  }

  return false
})

const parsedLocales = computed(() => {
  if (props.locales) {
    try {
      props.calendarDate.toLocaleDateString(props.locales)
    } catch (err) {
      return undefined
    }

    return props.locales
  }

  return undefined
})

</script>

<template>
  <div
    :class="`day-box ${selected ? 'bg-green-2' : ''} `"
    @click="selected = !selected"
  >
    <div
      v-if="showCalendarWeek"
      style="font-size:10px; color:#ccc; margin-bottom: 3px;"
    >
      {{ calendarWeekPrefix }}{{ date.formatDate(calendarDate, 'ww') }}
    </div>
    <div :class="`text-weight-bold ${isWeekend ? 'text-red' : ''}`">
      {{ calendarDate.toLocaleDateString(parsedLocales, { weekday: 'short' }) }}
    </div>
    <div :class="`text-weight-bold ${isToday ? 'today-underline' : ''}`">
      {{ date.formatDate(calendarDate, 'DD') }}
    </div>
    <div style="margin: 0px; padding:0px; font-size: 10px;">
      {{ calendarDate.toLocaleDateString(parsedLocales, { month: 'short' }) }}
    </div>
    <div style="font-size:10px; color:#ccc;">
      {{ date.formatDate(calendarDate, 'YYYY') }}
    </div>
  </div>
</template>

<style scoped>
.day-box {
  display: inline-block;
  vertical-align: top;
  width: 52px;
  height: 100%;
  border-left: 1px solid #ddd;
  background-color: #fff;
  user-select: none;
  cursor: pointer;
}

.day-box:hover {
  background-color: #d8d5d548;
}

.day-box * {
  text-align: center;
}

.day-box .today-underline {
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 2px solid #3a86dd;
}

</style>
