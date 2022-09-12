
import { Route, Routes } from 'react-router-dom'
import Login from './components/user/logIn/Login'
import HomePage from './pages/user/HomePage'
import { Timesheet } from './pages/user/Timesheet'

function App() {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} >
        <Route index element={<Timesheet />} />
        <Route path='login' element={<Login />} />

      </Route >

      <Route path='*' element="Not found" />


    </Routes>

  )
}

export default App
