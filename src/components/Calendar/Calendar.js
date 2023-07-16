import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function SelectDate () {
    const [date, setDate] = useState(new Date())
    return (
        <div className='app-container'>
            <div className='calendar-container'>
                <h1>Test Text For Calendar</h1>
                <Calendar 
                onChange={setDate} 
                value={date}
                selectRange={true}
                />
            </div>
            {date.length > 0 ? (
            <div className='text-center'>
                <span className='bold'>Starting Date: </span>{' '}
                {date[0].toDateString()}
                <span className='bold'>Ending Date: </span>
                {date[1].toDateString()}
            </div>
            ) : (
            <div className='text-center'>
                <span className='bold'>Default selected date:</span>{' '}
                {date.toDateString()}
            </div>   
        )}
        </div>
    )
}

export default SelectDate;