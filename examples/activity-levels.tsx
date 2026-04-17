<ActivityCalendar
  data={data}
  minLevel={-6}
  maxLevel={3}
  labels={{
    legend: { less: '-6', more: '3' },
  }}
  theme={{
    // Red for negative levels, gray for zero, green for positive ones.
    light: ['red', 'hsl(0, 0%, 92%`)', 'green'],
    dark: ['red', 'hsl(0, 0%, 92%`)', 'green'],
  }}
  tooltips={{
    activity: {
      text: ({ count, level }) => `Level ${level} (${count} activities)`,
      withArrow: true,
    },
  }}
  style={{ margin: '1.5rem 0' }}
/>