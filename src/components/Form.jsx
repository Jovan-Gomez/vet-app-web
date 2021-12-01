import { useState } from 'react'
import Subtitle from './Subtitle'
import Input from './Input'
import Success from './Success'
import Error from './Error'
import { generateId } from '../utils/generateId'

const Form = ({ addPatient }) => {
  const [petName, setPetName] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([petName, customerName, email, date, description].includes('')) {
      setSuccess(false)
      setError(true)
      return
    }
    setError(false)
    addPatient({
      id: generateId(),
      petName,
      customerName,
      email,
      date,
      description,
    })
    setSuccess(true)
    setTimeout(() => {
      resetInputs()
      setSuccess(false)
    }, 500)
  }

  const resetInputs = () => {
    setPetName('')
    setCustomerName('')
    setEmail('')
    setDate('')
    setDescription('')
    setError('')
    setSuccess('')
  }
  return (
    <section className='md:w-1/2 lg:w-2/5 mb-10'>
      <Subtitle h2='Seguimiento Pacientes' p='Añande Pacientes y' span='Administralos' />

      <form onSubmit={handleSubmit} className='bg-white  py-10 px-5 rounded-lg shadow-md'>
        <Input
          id='petName'
          label='Nombre Mascota'
          placeholder='ej. Milita'
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <Input
          id='customerName'
          label='Nombre del Propietario'
          placeholder='ej. Jovan'
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <Input
          id='email'
          label='Email'
          type='email'
          placeholder='ej. jovan@g0car.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input id='date' label='Alta' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <Input
          id='description'
          label='Describe los Sintomas'
          placeholder='ej. vomito cronico'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          textarea='true'
        />
        <button
          type='submit'
          className='w-full bg-indigo-600 font-bold text-white py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-md'
        >
          Agregar Paciente
        </button>
        {error && <Error>Todos los Campos son obligatorios {':('}</Error>}
        {success && <Success>Datos Registrados! {':)'}</Success>}
      </form>
    </section>
  )
}

export default Form
