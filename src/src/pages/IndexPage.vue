<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'quasar'

import HorizontalCalendar from 'components/HorizontalCalendar.vue'

const calendarWeekPrefix = ref('KW ')
const showCalendarWeek = ref(false)
const showWeekday = ref(true)
const showYear = ref(true)
const visibleDays = ref(7)
const dayWidth = ref(43)
const dayJumpOffset = ref(1)
const locales = ref<string|undefined>(undefined)

const selectedDate = ref<Date|undefined>(undefined)

const selectedDate2 = computed(() => {
  return date.formatDate(selectedDate.value, 'YYYY-MM-DD')
})

</script>

<template>
  <q-page class="q-pt-md">
    <div class="row q-col-gutter-sm">
      <div class="col-12 col-lg-8">
        <horizontal-calendar
          v-model="selectedDate"
          :day-width="dayWidth"
          :calendar-week-prefix="calendarWeekPrefix"
          :show-calendar-week="showCalendarWeek"
          :show-weekday="showWeekday"
          :show-year="showYear"
          :visible-days="visibleDays"
          :day-jump-offset="dayJumpOffset"
          :locales="locales"
        />
        <pre
          class="bg-grey-2 q-pa-md"
          style="user-select:none;"
        >Date:{{ selectedDate2 }}</pre>
      </div>
      <div class="col-12 col-lg-4">
        <q-form class="q-gutter-md">
          <q-checkbox
            v-model="showCalendarWeek"
            outlined
            label="Show Calendar Week"
          />
          <q-checkbox
            v-model="showWeekday"
            outlined
            label="Show Weekday"
          />
          <q-checkbox
            v-model="showYear"
            outlined
            label="Show Year"
          />
          <q-input
            v-model="calendarWeekPrefix"
            outlined
            label="Calendar Week Prefix"
          />
          <q-input
            v-model.number="visibleDays"
            outlined
            label="Calendar visible Days"
          />
          <q-input
            v-model.number="dayJumpOffset"
            outlined
            label="Calendar Day Jump Offset"
            hint="Click next or previous"
          />
          <q-input
            v-model.number="dayWidth"
            outlined
            label="Calendar Day Width"
            hint="The width of one element"
          />
          <q-input
            v-model="locales"
            outlined
            label="Locales"
          />
        </q-form>
      </div>
    </div>
  </q-page>
</template>
