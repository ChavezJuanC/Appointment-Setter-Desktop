import React from 'react'
import ContactStrip from './ContactStrip'

export default function ContactFeed({ contactsDataProp }) {
  const contactsData = contactsDataProp.map((element) => (
    <ContactStrip
      firstName={element.firstName}
      lastName={element.lastName}
      email={element.email}
      cellPhone={element.cellPhone}
      landLine={element.landLine}
      contactId={element._id}
      key={element._id}
    />
  ))

  return (
    <div className="mx-9 mt-12 h-4/5 rounded-md bg-black bg-opacity-25">
      <div className="flex justify-between pt-4 pb-2 text-white mx-5">
        <div className="flex-1 text-center">First Name</div>
        <div className="flex-1 text-center">Last Name</div>
        <div className="flex-1 text-center">Email</div>
        <div className="flex-1 text-center">Cell Phone#</div>
        <div className="flex-1 text-center">Landline#</div>
      </div>
      <div className="overflow-auto mx-2" style={{ height: '630px' }}>
        {contactsData}
      </div>
    </div>
  )
}
