export function sortReminders (reminders = []) {
  return reminders.sort((x, y) => x.when.valueOf() - y.when.valueOf())
}
