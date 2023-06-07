<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { date } from 'Quasar'
import { Todo, Meta } from './models'

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => []
})

const calculationDate = ref(new Date())
// const days = ref<number>()
const dayOffset = ref<number>(7)

onMounted(async () => {
  // today.value = new Date()
  // currentMonth.value = today.value.getMonth()
  // days.value = date.daysInMonth(calculationDate.value)
})

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
  <div>
    <span
    class="button box cursor-pointer"
    style="padding-top: 30px; padding-left:10px;"
    @click="previous">

        <q-icon name="arrow_back_ios" size="md" />

    </span>
    <span v-for="day in days" :key="`${day}`" class="box">
      <div style="user-select: none;" :class="`${date.formatDate(day, 'd') === '6' ? 'bg-red-3' : ''} ${date.formatDate(day, 'd') === '0' ? 'bg-red-3' : ''}`" >
        <span style="font-size:10px; color:#ccc;">KW {{ date.formatDate(day, 'ww') }}</span>
        <div style="padding-top: 10px;" class="text-weight-bold">

          {{ date.formatDate(day, 'DD') }}
        </div>
        <div style="margin: 0px; padding:0px; font-size: 10px;">{{ date.formatDate(day, 'MMM') }}</div>
        <span style="font-size:10px; color:#ccc;">{{ date.formatDate(day, 'YYYY') }}</span>
      </div>
    </span>
    <span
    class="button box cursor-pointer"
    style="padding-top: 30px;"
    @click="next">

        <q-icon name="arrow_forward_ios" size="md" />

    </span>

  </div>
</template>

<style scoped>
.box {
  display:inline-flex;
  vertical-align:top;
  width: 35px;
  height: 100px;
  border:1px solid #ddd;
  background-color: #eee;
}

.box * {
  width: 100%;
  text-align: center;
}

.button:hover {
  background-color: rgb(176, 218, 176);
}
</style>
