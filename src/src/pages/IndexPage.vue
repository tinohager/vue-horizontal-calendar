<script setup lang="ts">
import { ref } from 'vue'

import HorizontalCalendar from 'components/HorizontalCalendar.vue'

const calendarWeekPrefix = ref('KW ')
const showCalendarWeek = ref(false)
const dayOffset = ref(10)
const dayJumpOffset = ref(1)
const locales = ref<string|undefined>(undefined)

</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-8">
        <horizontal-calendar
          :calendar-week-prefix="calendarWeekPrefix"
          :show-calendar-week="showCalendarWeek"
          :day-offset="dayOffset"
          :day-jump-offset="dayJumpOffset"
          :locales="locales"
        />
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
