import { useState } from 'react'
import './App.css'

// our list of doctors
import doctorslist from './assets/doctors.json'

function App() {
  
  // doctor objects will be
  // name
  // specialty
  // area - will be used for similar/assuming each doctor is within Texas
  //        The ordering for similar will be based on how the list is ordered
  // reviewScore - scale from 1.0 - 5.0

  // storing doctor list
  const [doctors] = useState(doctorslist)

  // stored state for each user's selection
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor)
  }

  const getSimilarDoctors = () => {
    if(!selectedDoctor) {
      return []
    }

    // fetches each doctor with the same Area excluding the selected one
    return doctors.filter(
      (doc) => doc.Area === selectedDoctor.Area && doc.Name !== selectedDoctor.Name
    )
  }

  return (
    <>
      <h1>Click on a name to view more information</h1>
      {/* Assuming this is just a small list of doctors
          A bigger list would make the elements overflow in the page
          If there was a list of over 100 doctors, pagination would
          be the best approach
      */}
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
            {/* Using the area assumptions mentioned earlier */}
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
