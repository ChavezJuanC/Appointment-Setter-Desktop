import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function BookAppt({ setBooking, id, name }) {
  const [bookingParams, setBookingParams] = useState({
    date: '',
    time: '',
    comments: '',
    contactId: id,
    status: 'Active'
  })

  const postAppointment = async () => {
    const formatedComments = `${name} - Note: ${bookingParams.comments}`
    const body = { ...bookingParams, comments: formatedComments }
    try {
      if (!bookingParams.date || !bookingParams.time) {
        toast.error('Please Provide Date and Time')
        return
      }
      await fetch('http://localhost:7000/appointments/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      //UI clean up
      toast('Appointment Set')
      setBookingParams({
        date: '',
        time: '',
        comments: '',
        contactId: id,
        status: 'Active'
      })
    } catch (error) {
      console.error('Error booking appointment', error)
      toast.error(error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingParams({
      ...bookingParams,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ///post to DB
    postAppointment()
  }

  return (
    <div>
      <div className="pt-24">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="mx-20">
              <label className="text-base font-semibold text-black px-0.5">Date:</label>
              <input
                type="date"
                name="date"
                value={bookingParams.date}
                onChange={handleChange}
                className="bg-purple-100 rounded-md mx-1 py-0.5"
              />
            </div>
            <div className="mx-24">
              <label className="text-base font-semibold text-black px-0.5">Time:</label>
              <input
                type="time"
                name="time"
                value={bookingParams.time}
                onChange={handleChange}
                className="bg-purple-100 rounded-md mx-1 py-0.5"
              />
            </div>
          </div>
          <div className="mx-44 px-0.5 pt-10">
            <label className="block text-base font-semibold text-black px-0.5">Comments:</label>
            <textarea
              name="comments"
              value={bookingParams.comments}
              onChange={handleChange}
              className="bg-purple-100 rounded-md py-1 px-2 block w-96 h-32 max-h-56 mt-1 mx-10"
              style={{ lineHeight: '1.1' }} // Adjust the line height as needed
            ></textarea>
          </div>
          <div className="pt-4 absolute bottom-20 right-20">
            <button className="bg-purple-600 text-white w-20 py-1.5 rounded-md mx-2" type="submit">
              Book
            </button>
            <button
              className="bg-purple-600 text-white w-20 py-1.5 rounded-md mx-2"
              onClick={() => setBooking(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}
