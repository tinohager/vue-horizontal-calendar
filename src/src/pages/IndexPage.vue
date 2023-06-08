<script setup lang="ts">
import { computed, ref } from 'vue'
import { date } from 'quasar'

import HorizontalCalendar from 'components/HorizontalCalendar.vue'

const calendarWeekPrefix = ref('KW ')
const showCalendarWeek = ref(false)
const dayOffset = ref(4)
const dayJumpOffset = ref(1)
const locales = ref<string|undefined>(undefined)

const selectedDate = ref<Date|undefined>(undefined)

const selectedDate2 = computed(() => {
  return date.formatDate(selectedDate.value, 'YYYY-MM-DD')
})

</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-8">
        <horizontal-calendar
          v-model="selectedDate"
          :calendar-week-prefix="calendarWeekPrefix"
          :show-calendar-week="showCalendarWeek"
          :day-offset="dayOffset"
          :day-jump-offset="dayJumpOffset"
          :locales="locales"
        />
        <pre class="bg-grey-2">Date:{{ selectedDate2 }}</pre>
      </div>
      <div class="col-4">
        <q-form class="q-gutter-md">
          <q-checkbox
            v-model="showCalendarWeek"
            outlined
            label="Show Calendar Week"
          />
          <q-input
            v-model="calendarWeekPrefix"
            outlined
            label="Calendar Week Prefix"
          />
          <q-input
            v-model.number="dayOffset"
            outlined
            label="Calendar Day Offset"
          />
          <q-input
            v-model.number="dayJumpOffset"
            outlined
            label="Calendar Day Jump Offset"
            hint="Click next or previous"
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
