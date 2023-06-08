<script setup lang="ts">
import { computed } from 'vue'
import { date } from 'quasar'

interface Props {
  calendarDate: Date
  selectedDate: Date | undefined
  showCalendarWeek: boolean
  calendarWeekPrefix: string
  locales: string | undefined
}

const emit = defineEmits(['selected'])

const props = defineProps<Props>()

const selected = computed(() => {
  if (props.selectedDate?.toDateString() === props.calendarDate.toDateString()) {
    return true
  }

  return false
})

function selectDay () {
  if (selected.value) {
    emit('selected', undefined)
  } else {
    emit('selected', props.calendarDate)
  }
}

const isWeekend = computed(() => {
  const dayOfWeek = props.calendarDate.getDay()
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return true
  }

  return false
})

const isFirstDayInWeek = computed(() => {
  const dayOfWeek = props.calendarDate.getDay()
  if (dayOfWeek === 1) {
    return true
  }

  return false
})

const isLastDayInWeek = computed(() => {
  const dayOfWeek = props.calendarDate.getDay()
  if (dayOfWeek === 0) {
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

const isFirstDayInMonth = computed(() => {
  if (props.calendarDate.getDate() === 1) {
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
    :class="`day-box ${selected ? 'selected' : ''}`"
    @click="selectDay"
  >
    <div class="day-box-frame">
      <div
        v-if="showCalendarWeek"
        class="weeknumber"
      >
        <template v-if="isFirstDayInWeek || isLastDayInWeek">
          {{ calendarWeekPrefix }}{{ date.formatDate(calendarDate, 'ww') }}
        </template>
        <template v-else>
          -
        </template>
      </div>
      <div :class="`weekday ${isWeekend ? 'text-red' : ''}`">
        {{ calendarDate.toLocaleDateString(parsedLocales, { weekday: 'short' }) }}
      </div>
      <div :class="`daynumber ${isToday ? 'daynumber-underline' : ''}`">
        {{ date.formatDate(calendarDate, 'DD') }}
      </div>
      <div :class="`month-name ${isFirstDayInMonth ? 'is-first-day-in-month' : ''}`">
        {{ calendarDate.toLocaleDateString(parsedLocales, { month: 'short' }) }}
      </div>
      <div style="font-size:10px; color:#ccc;">
        {{ date.formatDate(calendarDate, 'YYYY') }}
      </div>
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

.day-box .day-box-frame {
  text-align: center;
  height: 100%;
  padding-top: 8px;
}

.day-box .day-box-frame:hover {
  background-color: #dddddd59;
}

.selected {
  border-bottom: 3px solid #a1a1a191;
  background-color: #2264df;
  color: #dadada
}

.day-box .weeknumber {
  height: 11px;
  font-size: 10px;
  color: #ccc;
  margin-bottom: 3px;
}

.day-box .weekday {
  letter-spacing: 1.3px;
  font-weight: 700;
  font-size: 0.7em;
}

.day-box .daynumber {
  padding-bottom: 2px;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  border-bottom: 2px solid transparent;
}

.day-box .daynumber-underline {
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 2px solid #3a86dd;
}

.day-box .month-name {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #948f8f;
  background-color: #948f8f3a;
  border-top:1px dotted #39393b;
  border-bottom:1px dotted #39393b;
}

.day-box .is-first-day-in-month {
  color: #ffffff;
  background-color: #3a86dd;
  border-left:3px solid #474747;
  border-top:1px solid #474747;
  border-bottom:1px solid #474747;
  font-weight: bold;
}

</style>
