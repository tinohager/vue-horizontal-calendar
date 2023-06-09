<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'quasar'

import HorizontalCalendarDay from './HorizontalCalendarDay.vue'

interface Props {
  modelValue: Date | undefined
  dayWidth: number
  calendarWeekPrefix: string
  showCalendarWeek: boolean
  visibleDays: number
  dayJumpOffset: number
  locales: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  calendarWeekPrefix: 'KW ',
  dayWidth: 45,
  showCalendarWeek: false,
  visibleDays: 7,
  dayJumpOffset: 1,
  locales: undefined
})

const emit = defineEmits(['update:modelValue'])

const calculationDate = ref(new Date())

function changeSelectedDate (value : Date | undefined) {
  emit('update:modelValue', value)
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
  let height = 84
  if (props.showCalendarWeek) {
    height += 20
  }

  return height
})

</script>

<template>
  <div
    class="horizontal-calendar"
    :style="`height:${calendarHeight}px`"
  >
    <div
      class="button button-previous"
      @click="previous"
    >
      <q-icon
        name="arrow_back_ios"
        size="md"
        color="white"
      />
    </div>
    <span
      v-for="day in days"
      :key="`${date.formatDate(day, 'YYYY-MM-DD')}`"
    >
      <horizontal-calendar-day
        :width="dayWidth"
        :calendar-date="day"
        :selected-date="modelValue"
        :show-calendar-week="showCalendarWeek"
        :calendar-week-prefix="calendarWeekPrefix"
        :locales="locales"
        @selected="o => changeSelectedDate(o)"
      />
    </span>
    <div
      class="button button-next"
      @click="next"
    >
      <q-icon
        name="arrow_forward_ios"
        size="md"
        color="white"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.horizontal-calendar {
  display: inline-block;
  white-space: nowrap;
  height: 100%;
  position: relative;
  border: 1px solid #dddddd;
}

.button {
  position: relative;
  display:inline-block;
  vertical-align:top;
  width: 42px;
  height: 100%;
  cursor: pointer;
  touch-action: manipulation;
  background-color: $primary;
}

.button .q-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.button-previous {
  padding-left: 14px;
}

.button-next {
  padding-left: 7px;
  border-left: 1px solid #dddddd;
}

.button:hover {
  background-color: $blue-6
}
</style>
