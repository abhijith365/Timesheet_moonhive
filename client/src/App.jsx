
import { Route, Routes } from 'react-router-dom'
import { CheckAdmin } from './components/auth/AdminAuth'
import { CheckUser } from './components/auth/UserAuth'
import { SignIn } from './components/user/signIn/SignIn'
import AdminHomePage from './pages/admin/HomePage'
import HomePage from './pages/user/HomePage'
import { Timesheet } from './pages/user/Timesheet'

function App() {
  return (
    <Routes>

      <Route path='/' element={<CheckUser><HomePage /></CheckUser>} >

        <Route index element={<Timesheet />} />

      </Route >
      <Route path='/reg' element={<SignIn />} />

      <Route path='/admin' element={<CheckAdmin><AdminHomePage /></CheckAdmin>}>

      </Route>

      <Route path='*' element="Not found" />

    </Routes >

  )
}

export default App
