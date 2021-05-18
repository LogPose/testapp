import React, {useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar, { YearView } from 'react-calendar'

function MyCalendar(props) {

    const [value, onChange] = useState(new Date());

    const chooseDate = props.chooseDate

    return(
          <div>
            <Calendar
              onChange={onChange}
              onClickDay={chooseDate(value)}
              value={value}
            />
          </div>
        );
    
}

export default MyCalendar