import { useState } from 'react'
import './App.css'
import doctorslist from './assets/doctors.json'

function App() {
  const [doctors] = useState(doctorslist)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor)
  }

  const getSimilarDoctors = () => {
    if(!selectedDoctor) {
      return []
    }

    return doctors.filter(
      (doc) => doc.Area === selectedDoctor.Area && doc.Name !== selectedDoctor.Name
    )
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
      {selectedDoctor && 
        <div>
          <h1>Name: {selectedDoctor.Name}</h1>
          <h3>Specialty: {selectedDoctor.Specialty}</h3>
          <h3>Area: {selectedDoctor.Area}</h3>
          <h3>Review Score: {parseFloat(selectedDoctor.ReviewScore).toFixed(1)}</h3>
          <h3>
            Similar Doctors (Same Area):
            {getSimilarDoctors().map((doctor, index) => (
              <p key={index}>
                {doctor.Name} - {doctor.Specialty}
              </p>
            ))}
          </h3>
        </div>
      }
    </>
  )
}

export default App
