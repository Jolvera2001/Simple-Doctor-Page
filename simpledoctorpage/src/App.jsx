import { useState } from 'react'
import './App.css'
import doctorslist from './assets/doctors.json'

function App() {
  const [doctors] = useState(doctorslist)
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor)
  }

  return (
    <>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index} onClick={() => handleSelect(doctor)}>
            {doctor.Name} - {doctor.Specialty}
          </li>
        ))}
      </ul>
      {selectedDoctor && <div>Selected Doctor: {selectedDoctor.Name}</div>}
    </>
  )
}

export default App
