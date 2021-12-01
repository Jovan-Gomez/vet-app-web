import { useEffect, useState } from 'react'
import Modal from './Modal'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import Subtitle from './Subtitle'
import PatientsListItem from './PatientsListItem'

const PatientsList = ({ patients, setPatients }) => {
  const [edit, setEdit] = useState(false)
  const [deletePatient, setDelete] = useState(false)
  const [patientInfo, setPatientInfo] = useState({})

  const handlerActionModal = (patient = {}, edit) => {
    setPatientInfo(patient)
    if (edit) {
      setEdit(true)
      return
    }
    setDelete(true)
  }
  const handleEditModal = (patient) => {
    setPatients((prev) => {
      return prev.map((patientState) => {
        return patientState.id === patient.id ? patient : patientState
      })
    })
    setEdit(false)
  }

  const handleDeleteModal = (id) => {
    setPatients((prev) => {
      return prev.filter((patientState) => {
        return patientState.id !== id
      })
    })
    setDelete(false)
  }

  const closeModal = () => {
    setEdit(false)
    setDelete(false)
    setPatientInfo({})
  }

  const list = patients.map((patient) => (
    <PatientsListItem key={patient.id} patient={patient} handlerActionModal={handlerActionModal} />
  ))
  return (
    <>
      <section className='md:w-1/2 lg:w-3/5'>
        {patients.length < 1 ? (
          <Subtitle h2='Sin Pacientes Registadros' p='Comienza agragando pacientes' span='y apareceran aqui' />
        ) : (
          <>
            <Subtitle h2='Listado de Pacientes' p='Administra tus' span='Pacientes y Citas' />
            <div className='md:h-screen md:overflow-y-scroll'>{list}</div>
          </>
        )}
      </section>
      {edit && (
        <Modal title='Editar Paciente' onClose={closeModal}>
          <EditModal patient={patientInfo} setPatient={setPatientInfo} handleEdit={handleEditModal} />
        </Modal>
      )}
      {deletePatient && (
        <Modal title='Eliminar Paciente' onClose={closeModal}>
          <DeleteModal patient={patientInfo} handleDelete={handleDeleteModal} />
        </Modal>
      )}
    </>
  )
}

export default PatientsList
