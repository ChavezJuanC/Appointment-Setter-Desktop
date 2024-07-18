import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { RiArrowGoBackLine } from 'react-icons/ri'
import '../../assets/main.css'
import toast, { Toaster } from 'react-hot-toast'

export default function AgendaComponent() {
  const localizer = dayjsLocalizer(dayjs)
  const [eventsList, setEventsList] = useState([])

  //fetch all events//
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch('http://localhost:7000/appointments/all')
        const data = await res.json()

        //changes for date objs.
        const formattedData = data.map((element) => {
          const { date, time } = element
          const year = parseInt(date.slice(0, 4)) // 2024
          const month = parseInt(date.slice(5, 7)) // 07
          const day = parseInt(date.slice(8, 10)) // 18
          const hour = parseInt(time.slice(0, 2)) // 19
          const min = parseInt(time.slice(3, 5)) // 30

          //use to set start and end
          return {
            title: element.comments,
            start: new Date(year, month - 1, day, hour, min),
            end: new Date(year, month - 1, day, hour + 1, min)
          }
        })
        setEventsList(formattedData)
      } catch (error) {
        console.error('Error fetching appointments')
        toast.error('Error Fetching Appointments')
      }
    }

    fetchAppointments()
  }, [])

  return (
    <div className="full-screen-background">
      <Link to={'/'}>
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 left-0">
          <RiArrowGoBackLine className="mr-2" />
        </div>
      </Link>
      <div className="mx-auto relative top-20">
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          className=" bg-white mx-auto rounded-md border-2 border-white py-1 w-3/4 custom-calendar"
        />
      </div>
      <Toaster />
    </div>
  )
}
