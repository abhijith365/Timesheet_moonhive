
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/admin/dataItems/AddUser'
import AllTask from './components/admin/dataItems/AllTask'
import AllUsers from './components/admin/dataItems/AllUsers'
import { Graphs } from './components/admin/dataItems/Graphs'
import MonthData from './components/admin/dataItems/MonthData'
import WeekData from './components/admin/dataItems/WeekData'
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
        <Route index element={<Graphs />} />
        <Route path='weeklyReport' element={<WeekData />} />
        <Route path='monthlyreport' element={<MonthData />} />
        <Route path='allTasks' element={<AllTask />} />
        <Route path='addUser' element={<AddUser display={true} />} />
        <Route path='AllUser' element={<AllUsers />} />

      </Route>

      <Route path='*' element="Not found" />

    </Routes >

  )
}

export default App
