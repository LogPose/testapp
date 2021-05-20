import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function MyCalendar(props) {

    const [value, onChange] = useState(new Date());

    const chooseDay = props.currentDay

    return(
            <div>
              <Calendar
                onChange={onChange}
                onClickDay={(value) => chooseDay(value)}
                value={value}
              />
            </div>
        );
    
}

export default MyCalendar