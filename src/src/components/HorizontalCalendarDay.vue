<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'quasar'

interface Props {
  width: number
  calendarDate: Date
  selectedDate: Date | undefined
  showCalendarWeek: boolean
  showWeekday: boolean
  showYear: boolean
  calendarWeekPrefix: string
  locales: string | undefined
}

const emit = defineEmits(['selected'])

const props = defineProps<Props>()

const mouseOverMonth = ref(false)
const mouseOverDay = ref(false)

const elementWidth = computed(() => {
  return `${props.width}px`
})

const selected = computed(() => {
  if (props.selectedDate?.toDateString() === props.calendarDate.toDateString()) {
    return true
  }

  return false
})

const additionalClass = computed(() => {
  if (selected.value) {
    return 'selected'
  }

  if (isWeekend.value) {
    return 'bg-red-1'
  }

  return ''
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

const isBeforeLastDayInWeek = computed(() => {
  const dayOfWeek = props.calendarDate.getDay()
  if (dayOfWeek === 6) {
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

const monthName = computed(() => {
  if (mouseOverMonth.value && !props.showYear) {
    return yearNumber.value
  }

  return props.calendarDate.toLocaleDateString(parsedLocales.value, { month: 'short' })
})

const dayNumber = computed(() => {
  if (mouseOverDay.value && !props.showWeekday) {
    return weekDay.value
  }

  return date.formatDate(props.calendarDate, 'DD')
})

const weekDay = computed(() => {
  return props.calendarDate.toLocaleDateString(parsedLocales.value, { weekday: 'short' })
})

const yearNumber = computed(() => {
  return date.formatDate(props.calendarDate, 'YYYY')
})

</script>

<template>
  <div
    :class="`day-box ${additionalClass}`"
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
          <svg
            width="100%"
            height="8"
            viewBox="0 0 80 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="4"
              x2="80"
              y2="4"
              stroke="grey"
            />

            <line
              v-if="isBeforeLastDayInWeek"
              x1="74"
              y1="0"
              x2="80"
              y2="4"
              stroke="grey"
            />

            <line
              v-if="isBeforeLastDayInWeek"
              x1="74"
              y1="8"
              x2="80"
              y2="4"
              stroke="grey"
            />

          </svg>
        </template>
      </div>
      <div
        v-if="showWeekday"
        :class="`weekday ${isWeekend ? 'text-red' : ''}`"
      >
        {{ weekDay }}
      </div>
      <div
        :class="`daynumber ${isToday ? 'daynumber-underline' : ''}`"
        @mouseover="mouseOverDay = true"
        @mouseout="mouseOverDay = false"
      >
        {{ dayNumber }}
      </div>
      <div
        :class="`monthname ${isFirstDayInMonth ? 'is-first-day-in-month' : ''}`"
        @mouseover="mouseOverMonth = true"
        @mouseout="mouseOverMonth = false"
      >
        {{ monthName }}
      </div>
      <div
        v-if="showYear"
        class="yearnumber"
      >
        {{ yearNumber }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-box {
  display: inline-block;
  vertical-align: top;
  width: v-bind(elementWidth);
  height: 100%;
  border-left: 1px solid #ddd;
  background-color: #fff;
  user-select: none;
  touch-action: manipulation;
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
  padding-top: 2px;
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

.day-box .monthname {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #948f8f;

  border-top:1px dotted #39393b;

}

.day-box .yearnumber {
  border-top:1px dotted #39393b;
  font-size: 10px;
  color: #ccc;
}

.day-box .is-first-day-in-month {
  color: #ffffff;
  background-color: #47474750;
  border-left:3px solid #474747c4;
  border-top:1px dotted #474747;
  font-weight: bold;
}

</style>
