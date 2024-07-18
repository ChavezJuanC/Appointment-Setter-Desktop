import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'
import '../../assets/main.css'
import toast, { Toaster } from 'react-hot-toast'
import { ContactsTab } from '../Others/ContactsTab'
import BookAppt from '../Others/BookAppt'

export default function CreateAppointmentComponent() {
  const [searchParam, setSearchParam] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [booking, setBooking] = useState(false)
  const [contactList, setContactList] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const fetchContactByParam = async () => {
    try {
      if (dropdownValue === '') {
        toast('Please Select Search Type')
        return
      }

      /// validate number if cellphone or landline else TOAST 10 digits
      if (dropdownValue === 'cellPhone' || dropdownValue === 'landLine') {
        if (searchParam.length !== 10) {
          toast('Please Verify Phone Number')
          return
        }
      }
      const res = await fetch(`http://localhost:7000/contacts/${dropdownValue}/${searchParam}`)
      const data = await res.json()
      setContactList(data)
      setBooking(false)
    } catch (error) {
      console.error('Error fetching contacts : ', error)
      toast.error('Error fetching contacts')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchContactByParam()
  }

  return (
    <div className="full-screen-background">
      <Link to={'/'}>
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 left-0">
          <RiArrowGoBackLine className="mr-2" />
        </div>
      </Link>
      <div className="w-4/6 h-3/4 mx-auto relative top-20 bg-black bg-opacity-25 rounded-sm">
        <div className="text-center top-12 relative">
          <form action="startSearch" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              className="w-4/6 rounded-md text-lg py-0.5 px-2"
            />
            <select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              className="py-0.5 rounded-md mx-2 text-center"
            >
              <option value=""> -Select-</option>
              <option value="cellPhone">Cell Phone</option>
              <option value="landLine">Land Line</option>
              <option value="email">Email</option>
            </select>
            <input
              type="submit"
              value="Search"
              className="bg-white text-purple-950 w-20 rounded-md py-0.5 font-semibold"
            />
          </form>
        </div>
        <div className="relative top-24 rounded-md w-5/6 h-3/4 bg-slate-50 mx-auto">
          {booking ? (
            <BookAppt setBooking={setBooking} id={id} name={name} />
          ) : (
            <ContactsTab
              data={contactList}
              fetchFunction={fetchContactByParam}
              setBooking={setBooking}
              setId={setId}
              setName={setName}
            />
          )}
        </div>
      </div>
      <Toaster />
    </div>
  )
}
