import { parseISO, formatDistanceToNow } from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo = ''

    if (timestamp) {
        console.log('timestamp', timestamp);
        const date = parseISO(timestamp)
        console.log('data', date);
        const timePeriod = formatDistanceToNow(date);
        console.log('timePeriod', timePeriod);
        timeAgo = `${timePeriod} ago`
    }
    return (
      <div>
        <span title={timestamp}>
          &nbsp; <i>{timeAgo}</i>
        </span>
      </div>
    )
}

export default TimeAgo
