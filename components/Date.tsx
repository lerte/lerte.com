'use client'

import dayjs from 'dayjs'

export default function Date({ dateString }: { dateString: string }) {
  const date = dayjs(dateString)
  const format = (date: dayjs.Dayjs, format: string) => {
    return date.format(format)
  }
  const now = dayjs()
  const diff = now.diff(date, 'day')
  if (diff < 1) {
    return <time dateTime={dateString}>{format(date, 'h:mm A')}</time>
  } else if (diff < 7) {
    return <time dateTime={dateString}>{format(date, 'dddd')}</time>
  } else {
    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
  }
}
