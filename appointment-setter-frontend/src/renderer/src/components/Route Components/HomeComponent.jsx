// components/HomeComponent.js
import React from 'react'
import '../../assets/main.css'
import logoImg from '../../assets/photos/dentist-logo.png'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className="full-screen-background">
      <div className="flex items-center flex-col justify-center min-h-lvh pt-24">
        <Link to={'/set-appointment'}>
          <button className="w-72 py-2.5 rounded-lg bg-black bg-opacity-25 text-slate-200 text-lg font-semibold my-1.5">
            New Appointment
          </button>
        </Link>
        <Link to={'/view-calendar'}>
          <button className="w-72 py-2.5 rounded-lg bg-black bg-opacity-25 text-slate-200 text-lg font-semibold my-1.5">
            View Calendar
          </button>
        </Link>
        <Link to={'/find-contact'}>
          <button className="w-72 py-2.5 rounded-lg bg-black bg-opacity-25 text-slate-200 text-lg font-semibold my-1.5">
            Find Contact
          </button>
        </Link>
        <Link to={'/new-contact'}>
          <button className="w-72 py-2.5 rounded-lg bg-black bg-opacity-25 text-slate-200 text-lg font-semibold my-1.5">
            Create Contact
          </button>
        </Link>
      </div>
      <div>
        <img src={logoImg} alt="LogoHere" className="h-52 fixed bottom-0 right-0" />
      </div>
    </div>
  )
}

export default HomeComponent
