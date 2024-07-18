import { useEffect, useState } from 'react'
import AppointmentStrip from './AppointmentStrip'
import toast, { Toaster } from 'react-hot-toast'

export default function AppointmentHistory({ id }) {
  const [apptsData, setApptsData] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`http://localhost:7000/appointments/contactId/${id}`)
        const data = await res.json()
        setApptsData(data)
      } catch (error) {
        console.error('Error fetching appointments')
        toast.error('Error Fetching Appointments')
      }
    }

    fetchAppointments()
  }, [])

  const apptStrips = apptsData.map((element) => (
    <AppointmentStrip
      date={element.date}
      time={element.time}
      status={element.status}
      id={element._id}
    />
  ))

  return (
    <div className=" relative top-36">
      <div className="text-center text-xl font-semibold text-slate-200 mb-8">
        Appointment History
      </div>
      <div className="py-1 rounded-md mx-60 bg-white bg-opacity-10 h-80 pb-5">
        <div className="overflow-auto h-full mt-2 mx-3">{apptStrips}</div>
      </div>
      <Toaster />
    </div>
  )
}
