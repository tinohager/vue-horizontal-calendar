<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'Quasar'

import HorizontalCalendarDay from './HorizontalCalendarDay.vue'

interface Props {
  calendarWeekPrefix: string
  showCalendarWeek: boolean
  dayOffset: number
  dayJumpOffset: number
  locales: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  calendarWeekPrefix: 'KW ',
  showCalendarWeek: false,
  dayOffset: 7,
  dayJumpOffset: 1,
  locales: undefined
})

const calculationDate = ref(new Date())

function next () {
  calculationDate.value = date.addToDate(calculationDate.value, { days: props.dayJumpOffset })
}

function previous () {
  calculationDate.value = date.subtractFromDate(calculationDate.value, { days: props.dayJumpOffset })
}

const days = computed(() => {
  const startDate = date.subtractFromDate(calculationDate.value, { days: props.dayOffset })
  const endDate = date.addToDate(calculationDate.value, { days: props.dayOffset })

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
  let height = 80
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
      />
    </div>
    <span
      v-for="day in days"
      :key="`${date.formatDate(day, 'YYYY-MM-DD')}`"
    >
      <horizontal-calendar-day
        :calendar-date="day"
        :show-calendar-week="showCalendarWeek"
        :calendar-week-prefix="calendarWeekPrefix"
        :locales="locales"
      />
    </span>
    <div
      class="button button-next"
      @click="next"
    >
      <q-icon
        name="arrow_forward_ios"
        size="md"
      />
    </div>
  </div>
</template>

<style scoped>
.horizontal-calendar {
  display: inline-block;
  height: 100%;
  position: relative;
  border: 1px solid #dddddd;
}

.button {
  position: relative;
  display:inline-block;
  vertical-align:top;
  width: 70px;
  height: 100%;
  cursor: pointer;
  background-color: #eee;
}

.button .q-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.button-previous {
  padding-left: 24px;
}

.button-next {
  padding-left: 20px;
  border-left: 1px solid #dddddd;
}

.button:hover {
  background-color: rgb(176, 218, 176);
}
</style>
