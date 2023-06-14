# vue-horizontal-calendar

This is a space-saving calendar control that offers the possibility to display the day of the week as well as the week number.
It consists of 2 files and has only the dependency to the quasar framework. `HorizontalCalendar.vue` and `HorizontalCalendarDay.vue`

If you like it we would appreciate a star for the project. 🌟

![Horizontal Calendar](/doc/calendar-preview.png)

## Demo
https://tinohager.github.io/vue-horizontal-calendar/

## Configuration

| Props | Type | Description |
|---|---|---|
| model-value | Date, undefined | The selected date |
| day-width | number | Width in pixel of a day column |
| visible-days | number | Number of visible days |
| show-calendar-week | boolean | Is calendar week row visible |
| show-weekday | boolean | Is weekday row visible |
| show-year | boolean | Is year row visible |
| calendar-week-prefix | string | Prefix for calendar week |
| day-offset | number | Day count left and right |
| day-jump-offset | number | Day move on click the button left or right |
| locales | string, undefined | Translation for day name and month name |
