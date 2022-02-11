interface CustomError {
  message: string, 
  name: string; 
  type: number
}

const ErrorComponent = ({message, name, type}: CustomError) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-0">
    <div className="w-full lg:w-2/3 xl:w-1/2 h-64 p-4 border-2 rounded border-gray-700">
        <h1 className='text-5xl font-bold text-center'>{type}</h1>
        <p className='text-3xl mt-8 text-center'><span className='inline text-red-500 mr-4'> Oops!</span>Something went Wrong!</p>
        <p className='text-xl mt-8 text-center'>{name}: {message}</p>
    </div>
  </div>
  )
}

export default ErrorComponent