const Input = ({id, label, ...props}) => {
    return (
        <div className='mb-5'>
        <label htmlFor={id} className='font-semibold text-gray-700'>{label}</label>
        {
            props.textarea ? 
            <textarea
                id={id}
                className='w-full mt-2 p-2 rounded-md border-2'
                {...props}
            />
            :
        <input
            id={id}
            className='w-full mt-2 p-2 rounded-md border-2'
            {...props}
        />
        }
    </div>
    )
}

export default Input
