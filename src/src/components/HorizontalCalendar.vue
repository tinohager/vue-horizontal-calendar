<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'quasar'

import HorizontalCalendarDay from './HorizontalCalendarDay.vue'

interface Props {
  modelValue: Date | undefined
  dayWidth: number
  calendarWeekPrefix: string
  showCalendarWeek: boolean
  showWeekday: boolean
  showYear: boolean
  visibleDays: number
  dayJumpOffset: number
  locales: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  calendarWeekPrefix: 'CW ',
  dayWidth: 45,
  showCalendarWeek: false,
  showWeekday: true,
  showYear: true,
  visibleDays: 7,
  dayJumpOffset: 1,
  locales: undefined
})

const emit = defineEmits(['update:modelValue'])

const calculationDate = ref(new Date())
const intervalId = ref()

function changeSelectedDate (value : Date | undefined) {
  emit('update:modelValue', value)
}

function startPreviousMove () {
  previous()
  intervalId.value = setInterval(previous, 150)
}
function stopPreviousMove () {
  clearInterval(intervalId.value)
}

function startNextMove () {
  next()
  intervalId.value = setInterval(next, 150)
}
function stopNextMove () {
  clearInterval(intervalId.value)
}

function next () {
  calculationDate.value = date.addToDate(calculationDate.value, { days: props.dayJumpOffset })
}

function previous () {
  calculationDate.value = date.subtractFromDate(calculationDate.value, { days: props.dayJumpOffset })
}

const days = computed(() => {
  const startDate = calculationDate.value
  const endDate = date.addToDate(calculationDate.value, { days: props.visibleDays })

  const unit = 'days'
  const diff = date.getDateDiff(endDate, startDate, unit)

  const temp = []
  for (let i = 0; i < diff; i++) {
    const tempDate = date.addToDate(startDate, { days: i, months: 0 })
    temp.push(tempDate)
  }

  return temp
})

const calendarHeight = computed(() => {
  let height = 53
  if (props.showCalendarWeek) {
    height += 14
  }
  if (props.showWeekday) {
    height += 15
  }
  if (props.showYear) {
    height += 15
  }

  return `${height}px`
})

</script>

<template>
  <div class="horizontal-calendar">
    <div
      class="button"
      @mousedown="startPreviousMove"
      @mouseup="stopPreviousMove"
    >
      <div class="button-previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
          width="16"
          height="40"
          viewBox="0 -960 456 800"
        >
          <path
            fill="#fff"
            d="M56-160 0-217l343-343L0-903l56-57 400 400z"
          />
        </svg>
      </div>
    </div>
    <div class="day-container">
      <span
        v-for="day in days"
        :key="`${date.formatDate(day, 'YYYY-MM-DD')}`"
      >
        <horizontal-calendar-day
          :width="dayWidth"
          :calendar-date="day"
          :selected-date="modelValue"
          :show-calendar-week="showCalendarWeek"
          :show-weekday="showWeekday"
          :show-year="showYear"
          :calendar-week-prefix="calendarWeekPrefix"
          :locales="locales"
          @selected="o => changeSelectedDate(o)"
        />
      </span>
    </div>
    <div
      class="button"
      @mousedown="startNextMove"
      @mouseup="stopNextMove"
    >
      <div class="button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="40"
          viewBox="0 -960 456 800"
        >
          <path
            fill="#fff"
            d="M56-160 0-217l343-343L0-903l56-57 400 400z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.horizontal-calendar {
  display: inline-block;
  white-space: nowrap;
  height: v-bind(calendarHeight);
  position: relative;
  border: 1px solid #dddddd;
}

.horizontal-calendar .day-container {
  height: 100%;
  display: inline-block;
  border-right: 1px solid #dddddd;
}

.horizontal-calendar .button {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 42px;
  height: 100%;
  cursor: pointer;
  touch-action: manipulation;
  background-color: $primary;
}

.horizontal-calendar .button div {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.horizontal-calendar .button:hover {
  background-color: $blue-6
}
</style>
