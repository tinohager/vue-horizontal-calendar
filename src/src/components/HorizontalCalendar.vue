<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'Quasar'

import HorizontalCalendarDay from './HorizontalCalendarDay.vue'

// import { Todo, Meta } from './models'

// interface Props {
//   title: string;
//   todos?: Todo[];
//   meta: Meta;
//   active: boolean;
// }
// const props = withDefaults(defineProps<Props>(), {
//   todos: () => []
// })

const calculationDate = ref(new Date())
// const days = ref<number>()
// const dayOffset = ref<number>(7)

// onMounted(async () => {
//   // today.value = new Date()
//   // currentMonth.value = today.value.getMonth()
//   // days.value = date.daysInMonth(calculationDate.value)
// })

function next () {
  calculationDate.value = date.addToDate(calculationDate.value, { days: 1 })
}

function previous () {
  calculationDate.value = date.subtractFromDate(calculationDate.value, { days: 1 })
}

const days = computed(() => {
  const startDate = date.subtractFromDate(calculationDate.value, { days: 7, months: 0 })
  const endDate = date.addToDate(calculationDate.value, { days: 7, months: 0 })

  const unit = 'days'
  const diff = date.getDateDiff(endDate, startDate, unit)

  const temp = []
  for (let i = 0; i < diff; i++) {
    const tempDate = date.addToDate(startDate, { days: i, months: 0 })
    temp.push(tempDate)
  }

  return temp
})

</script>

<template>
  <div class="horizontal-calendar">
    <span
      class="button button-previous"
      @click="previous"
    >
      <q-icon
        name="arrow_back_ios"
        size="md"
      />
    </span>
    <span
      v-for="day in days"
      :key="`${date.formatDate(day, 'YYYY-MM-DD')}`"
    >
      <horizontal-calendar-day
        :calendar-date="day"
        :show-calendar-week="true"
        calendar-week-prefix="KW "
      />
    </span>
    <span
      class="button button-next"
      @click="next"
    >
      <q-icon
        name="arrow_forward_ios"
        size="md"
      />
    </span>
  </div>
</template>

<style scoped>
.horizontal-calendar {
  height: 100px;
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
