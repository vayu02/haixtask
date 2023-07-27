import { Route, Routes } from 'react-router-dom'
import DataList from './component/DataList'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DataList />} />
        <Route path='jobs' element={<DataList />} />
      </Routes>
    </>
  )
}

export default App
