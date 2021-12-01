import Header from './components/Header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'
import { useEffect, useState } from 'react'
function App() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    patientsFromLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const patientsFromLocalStorage = () => {
    const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
    setPatients(patientsLS)
  }
  const addPatient = (patient = {}) => setPatients([...patients, patient])
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex w-full'>
        <Form addPatient={addPatient} />
        <PatientsList patients={patients} setPatients={setPatients} />
      </div>
    </div>
  )
}

export default App
