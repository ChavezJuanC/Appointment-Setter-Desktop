import React from 'react'
import { Link } from 'react-router-dom'
import { formatPhoneNumber } from '../../global-functions/formats'

export default function ContactStrip({
  firstName,
  lastName,
  email,
  cellPhone,
  landLine,
  contactId
}) {
  return (
    <Link
      className="flex justify-between py-4 mx-5 my-3 rounded-lg border-slate-100"
      style={{ border: '1px solid #d1d5db' }}
      to="/contact"
      state={{
        firstName,
        lastName,
        email,
        cellPhone,
        landLine,
        contactId
      }}
    >
      <div className="flex-1 text-center font-normal text-slate-300">{firstName}</div>
      <div className="flex-1 text-center font-normal text-slate-300">{lastName}</div>
      <div className="flex-1 text-center font-normal text-slate-300">{email}</div>
      <div className="flex-1 text-center font-normal text-slate-300">
        {cellPhone ? formatPhoneNumber(cellPhone) : 'N/a'}
      </div>
      <div className="flex-1 text-center font-normal text-slate-300">
        {landLine ? formatPhoneNumber(landLine) : 'N/a'}
      </div>
    </Link>
  )
}
