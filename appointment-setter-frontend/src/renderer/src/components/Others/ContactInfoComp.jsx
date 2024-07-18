import React from 'react'
import { formatPhoneNumber } from '../../global-functions/formats'

export default function ContactInfoComp({ contactData }) {
  return (
    <div className=" w-1/2 mx-auto relative top-24">
      <div className="flex justify-between">
        <div className="">
          <div className="flex my-10 items-baseline">
            <div className="text-xl text-slate-100 ">First Name:</div>
            <div className="text-lg text-slate-200 mx-1">{contactData.firstName}</div>
          </div>
          <div className="flex my-10 items-baseline">
            <div className="text-xl text-slate-100 ">Cell Phone:</div>
            <div className="text-lg text-slate-200 mx-1">
              {contactData.cellPhone ? formatPhoneNumber(contactData.cellPhone) : 'N/a'}
            </div>
          </div>
          <div className="flex my-10 items-baseline">
            <div className="text-xl text-slate-100 ">Email Address:</div>
            <div className="text-lg text-slate-200 mx-1">{contactData.email}</div>
          </div>
        </div>
        <div className="">
          <div className="flex my-10 items-baseline">
            <div className="text-xl text-slate-100 ">Last Name:</div>
            <div className="text-lg text-slate-200 mx-1">{contactData.lastName}</div>
          </div>
          <div className="flex my-10 items-baseline">
            <div className="text-xl text-slate-100 ">Landline:</div>
            <div className="text-lg text-slate-200 mx-1">
              {contactData.landLine ? formatPhoneNumber(contactData.landLine) : 'N/a'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
