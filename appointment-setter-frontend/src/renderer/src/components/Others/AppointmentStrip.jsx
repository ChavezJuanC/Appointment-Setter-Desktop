import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function AppointmentStrip({ date, time, status, id }) {
  const [appointmentStatus, setAppointmentStatus] = useState(status)

  const changeStatus = async (state) => {
    try {
      const res = await fetch(`http://localhost:7000/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: state })
      })

      if (!res.ok) {
        throw new Error('Failed to update status')
      }
      setAppointmentStatus(state)
    } catch (error) {
      console.error('Error fetching appointments')
      toast.error('Error Fetching Appointments')
    }
  }
  return (
    <div className="mx-3 rounded-xl mb-3 bg-black bg-opacity-15 flex justify-between px-5 py-4 items-center">
      <div className="text-base text-black">{date}</div>
      <div className="text-base text-black">{time}</div>
      {appointmentStatus === 'Active' && (
        <div className="text-base  text-green-600">{appointmentStatus}</div>
      )}
      {appointmentStatus === 'Logged' && (
        <div className="text-base text-blue-600">{appointmentStatus}</div>
      )}
      {appointmentStatus === 'Cancelled' && (
        <div className="text-base  text-red-600">{appointmentStatus}</div>
      )}
      <div>
        <button
          className="text-base w-20 py-0.5 border-2 rounded-md mx-1.5 bg-slate-50 text-purple-950 font-semibold"
          onClick={() => {
            changeStatus('Logged')
          }}
        >
          Log
        </button>
        <button
          className="text-base w-20 py-0.5 border-2 rounded-md mx-1.5 bg-slate-50 text-purple-950 font-semibold"
          onClick={() => {
            changeStatus('Cancelled')
          }}
        >
          Cancel
        </button>
      </div>
      <Toaster />
    </div>
  )
}
