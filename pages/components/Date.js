import React, {useState, useEffect} from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import moment from 'moment'

const Date = () => {
  const [dateToFormat, setdateToFormat] = useState(moment().toDate().getTime())
  const updateTime = () => {
    let clock = moment().toDate().getTime()
  }
  setInterval(updateTime, 1000)

  useEffect(() => {
    let time = updateTime
    setdateToFormat(time)
  }, [])

  return (
    <div>
      <Moment interval={1} unit="seconds" format="DD MMMM YYYY hh:mm:ss">
        {dateToFormat}
      </Moment>
    </div>
  )
}

export default Date
