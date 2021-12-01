import { useState } from 'react'
import Error from './Error'
import Input from './Input'

const EditModal = ({ patient, setPatient, handleEdit }) => {
  const { petName, customerName, email, date, description } = patient
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if ([petName, customerName, email, date, description].includes('')) {
      setError(true)
      return
    }
    handleEdit(patient)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        <Input
          id='petNameEdit'
          label='Nombre Mascota'
          placeholder='ej. Milita'
          value={petName}
          onChange={(e) => setPatient({ ...patient, petName: e.target.value })}
        />
        <Input
          id='customerNameEdit'
          label='Nombre del Propietario'
          placeholder='ej. Jovan'
          value={customerName}
          onChange={(e) => setPatient({ ...patient, customerName: e.target.value })}
        />
        <Input
          id='emailEdit'
          label='Email'
          type='email'
          placeholder='ej. jovan@g0car.com'
          value={email}
          onChange={(e) => setPatient({ ...patient, email: e.target.value })}
        />
        <Input
          id='dateEdit'
          label='Alta'
          type='date'
          value={date}
          onChange={(e) => setPatient({ ...patient, date: e.target.value })}
        />
        <div className='md:col-start-1 md:col-end-3'>
          <Input
            id='descriptionEdit'
            label='Describe los Sintomas'
            placeholder='ej. vomito cronico'
            value={description}
            onChange={(e) => setPatient({ ...patient, description: e.target.value })}
            textarea='true'
          />
        </div>
      </div>
      <button
        type='submit'
        className='w-full bg-indigo-600 font-bold text-white py-2 rounded-full hover:bg-blue-500 transition-colors shadow-md'
      >
        Editar Paciente
      </button>
      {error && <Error>Todos los Campos son obligatorios {':('}</Error>}
    </form>
  )
}

export default EditModal
