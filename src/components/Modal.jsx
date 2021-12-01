const Modal = ({ title, children, onClose }) => {
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center p-10'>
      <div className='w-11/12 md:w-1/2 max-w-3xl rounded-lg shadow-lg p-5 bg-white relative'>
        <div className='flex items-center justify-between mb-5 pb-5 border-b-2 border-gray-100'>
          <h3 className='text-base md:text-xl font-medium text-indigo-600'>{title}</h3>
        </div>
        <button
          className='absolute top-5 right-5 w-7 h-7 bg-indigo-600 font-bold text-white transition-colors hover:bg-indigo-700 rounded-full'
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
