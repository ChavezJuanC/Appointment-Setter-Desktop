import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/main.css'
import { RiArrowGoBackLine } from 'react-icons/ri'
import SearchSection from '../Others/SearchSection'
import ContactFeed from '../Others/ContactFeed'

export default function ContactSearch() {
  const [contactsDataProp, setContactsDataProp] = useState([])
  const [searchParams, setSearchParams] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    landLine: ''
  })
  const [filteredData, setFilteredData] = useState([])

  //Fetching data from contacts api on loaad
  useEffect(() => {
    const fetchContacts = async () => {
      const endpoint = 'http://localhost:7000/contacts/all' ///CONTACTS-ENPOINT --- env var
      const res = await fetch(endpoint)
      const data = await res.json()
      setContactsDataProp(data)
      setFilteredData(data)
    }
    fetchContacts()
  }, [])

  const searchFunction = () => {
    //chekcing for empy obj
    const isSearchParamsEmpty = Object.values(searchParams).every((value) => value === '')
    if (isSearchParamsEmpty) {
      setFilteredData(contactsDataProp)
    } else {
      const filteredContacts = contactsDataProp.filter((element) => {
        return Object.keys(searchParams).some((key) => {
          const searchValue = searchParams[key]
          const elementValue = element[key]
          return (
            elementValue &&
            searchValue &&
            elementValue.toString().toUpperCase() === searchValue.toString().toUpperCase()
          )
        })
      })
      setFilteredData(filteredContacts)
    }
  }

  return (
    <div className="full-screen-background">
      <Link to={'/'}>
        <div className="text-2xl font-bold text-slate-100 p-4 fixed top-0 left-0">
          <RiArrowGoBackLine className="mr-2" />
        </div>
      </Link>
      <SearchSection
        setSearchParams={setSearchParams}
        searcParams={searchParams}
        searchFunction={searchFunction}
      />
      <ContactFeed contactsDataProp={filteredData} />
    </div>
  )
}
