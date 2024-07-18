// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeComponent from './components/Route Components/HomeComponent'
import AgendaComponent from './components/Route Components/AgendaComponent'
import ContactSearch from './components/Route Components/ContactSearch'
import CreateAppointmentComponent from './components/Route Components/CreateAppointmentComponent'
import NewContact from './components/Route Components/NewContact'
import ContactComponent from './components/Route Components/ContactComponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/set-appointment" element={<CreateAppointmentComponent />} />
        <Route path="/view-calendar" element={<AgendaComponent />} />
        <Route path="/find-contact" element={<ContactSearch />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  )
}

export default App
