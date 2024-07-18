import React from 'react'
import ContactInfoComp from '../Others/ContactInfoComp'
import AppointmentHistory from '../Others/AppointmentHistory'
import '../../assets/main.css'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine, RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactComponent() {
  const location = useLocation()
  const { ...contactData } = location.state || {}
  const navigate = useNavigate()

  const deletContact = async () => {
    try {
      await fetch(`http://localhost:7000/contacts/${contactData.contactId}`, {
        method: 'DELETE'
      })
      toast('Contact Deleted')
      setTimeout(() => {
        navigate('/find-contact')
      }, 1000)
    } catch (error) {
      console.error('Error deleting contact : ', error)
    }
  }

  return (
    <div className="full-screen-background">
      <Link to={'/'}>
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 left-0">
          <RiArrowGoBackLine className="mr-2" />
        </div>
      </Link>
      <button
        onClick={() => {
          console.log('Edit')
        }}
      >
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 right-0">
          <RiEdit2Line className="mr-2" />
        </div>
      </button>
      <button
        onClick={() => {
          deletContact()
        }}
      >
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 right-10">
          <RiDeleteBinLine className="mr-2" />
        </div>
      </button>
      <ContactInfoComp contactData={contactData} />
      <AppointmentHistory id={contactData.contactId} />
      <Toaster />
    </div>
  )
}

