import { useState } from 'react'
import '../../assets/main.css'
import { Link } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast'

export default function NewContact() {
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    landLine: ''
  })

  const validateNumber = (number, type) => {
    if (number.length !== 10) {
      throw new Error(`${type} has to be 10 digits.`)
    }
    return true // Return true if validation passes
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactData({
      ...contactData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      // Validate body //
      ////didnt use a loop because it has to exclude landline.. easy and simple..
      if (
        !contactData.firstName ||
        !contactData.lastName ||
        !contactData.email ||
        !contactData.cellPhone
      ) {
        return toast('Please fill all required fields', { duration: 2000 })
      }

      // Validate cellphone
      validateNumber(contactData.cellPhone, 'Cell Phone')

      // Validate landline (non-mandatory)
      if (contactData.landLine) {
        validateNumber(contactData.landLine, 'Landline')
      }

      // POST through API //
      await fetch('http://localhost:7000/contacts/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      })

      toast('New Contact Saved', {
        duration: 1500
      })

      // Reset form fields
      setContactData({
        firstName: '',
        lastName: '',
        email: '',
        cellPhone: '',
        landLine: ''
      })
    } catch (error) {
      console.error('Error posting contact', error)
      toast.error(error.message)
    }
  }

  return (
    <div className="full-screen-background min-h-screen flex flex-col items-center justify-center p-6">
      <Link to={'/'}>
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 left-0">
          <RiArrowGoBackLine className="mr-2" />
        </div>
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={contactData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contactData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cellPhone" className="block text-gray-700 font-medium mb-2">
              Cell Phone:
            </label>
            <input
              type="tel"
              id="cellPhone"
              name="cellPhone"
              value={contactData.cellPhone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label htmlFor="landLine" className="block text-gray-700 font-medium mb-2">
                Landline:
              </label>
              <h1 className="text-gray-500 text-sm">(Optional)</h1>
            </div>
            <input
              type="tel"
              id="landLine"
              name="landLine"
              value={contactData.landLine}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-36 bg-purple-900 text-white py-2.5 rounded-md font-medium hover:bg-purple-800 transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}
