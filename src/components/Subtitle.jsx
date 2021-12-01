const Subtitle = ({h2, p, span}) => {
    return (
        <div className='mb-5'>
            <h2 className='font-black text-3xl text-center'>{h2}</h2>
            <p className='mt-5 mb-10 text-xl text-center'>{p}<span className='text-indigo-600  font-bold'> {span}</span></p>
        </div>
    )
}

export default Subtitle
