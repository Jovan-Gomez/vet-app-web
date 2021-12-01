import PatientItem from './PatientItem'

const PatientsListItem = ({ patient, handlerActionModal }) => {
  return (
    <div className='mx-3 mb-3 bg-white px-5 py-10 rounded-xl shadow-md'>
      <PatientItem title='Mascota' value={patient.petName} />
      <PatientItem title='Cliente' value={patient.customerName} />
      <PatientItem title='Email' value={patient.email} />
      <PatientItem title='Fecha Alta' value={patient.date} />
      <PatientItem title='Sintomas' value={patient.description} />
      <div className='flex justify-between md:justify-end'>
        <button
          className='bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm py-2 px-5 font-bold'
          onClick={() => handlerActionModal(patient, true)}
        >
          Editar
        </button>
        <button
          className='bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm py-2 px-5 font-bold ml-2'
          onClick={() => handlerActionModal(patient, false)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientsListItem
