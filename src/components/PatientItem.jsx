const PatientItem = ({ title, value }) => {
  return (
    <p className='font-bold mb-3 text-gray-700 md:text-lg'>
      {title}: <span className='font-normal normal-case'>{value}</span>
    </p>
  )
}

export default PatientItem
