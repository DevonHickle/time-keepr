import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import { Navigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [authenticated, setAuthenticated] = useState(null)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('authenticated')
    if(loggedInUser) {
      setAuthenticated(loggedInUser)
    }
  }, [])

  if(!authenticated) {
    return <Navigate replace to='/login' />
  } else {
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    )
  }
}

