const DeleteModal = ({ patient, handleDelete }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleDelete(patient.id)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='text-center mb-3 text-xl'>
        <p className='mb-2'>
          Va a eliminar al paciente <strong>{patient.petName}</strong>
        </p>
        <p>Esta seguro de realizar esta accion?</p>
      </div>
      <button
        type='submit'
        className='w-full bg-indigo-600 font-bold text-white py-2 rounded-full hover:bg-red-600 transition-colors shadow-md'
      >
        Eliminar Paciente
      </button>
    </form>
  )
}

export default DeleteModal
