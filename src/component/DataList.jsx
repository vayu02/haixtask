import { FaUserCircle } from 'react-icons/fa'
import useAxiosFetch from '../hooks/useAxiosFetch'
import { useLocation } from 'react-router-dom'

const DataList = () => {
  const { pathname } = useLocation()

  console.log(pathname)

  let baseUrl = 'http://localhost:3500'
  let route

  if (pathname === '/') {
    route = `${baseUrl}/${'people'}`
  } else if (pathname === '/jobs') {
    route = `${baseUrl}/${'jobs'}`
  }
  console.log(route)

  const { data, fetchError, isLoading } = useAxiosFetch(route)

  return (
    <div className=' min-h-screen p-8 bg-gray-100 '>
      {isLoading && <h1 className='text-blue-600 text-center'>Loading ..</h1>}
      {fetchError && <h1 className='text-red-500 text-center'>Error</h1>}
      <div className=' flex justify-center items-center'>
        <div className=' grid grid-cols-1  bg-white pb-10'>
          {data &&
            data.map((item, index) => (
              <div key={index} className='w-[729px] h-[128.7px]  p-6'>
                {item.job_title && (
                  <div
                    key={index}
                    className='w-[100%]  border-b border-gray-500  p-6 flex  items-center font-sans '
                  >
                    <FaUserCircle size={48} />
                    <div className='px-2  w-[90%] mx-4  '>
                      <h2 className=' font-bold '>{item.name}</h2>
                      <h3 className='text-gray-600 '>{item.job_title}</h3>
                      <p className='text-gray-600 '>{item.location}</p>
                    </div>

                    <button className='border-2 border-blue-600 rounded-[10rem] text-blue-600 py-2 px-4 hover:bg-blue-200 transition duration-200'>
                      {(item.past_experience && 'Connect') ||
                        (item.job_description && 'Follow')}
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DataList
