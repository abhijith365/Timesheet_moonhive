import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import AdminHomePage from "../../../pages/admin/HomePage"
import { adminCheckAuth } from "../../../store/features/admin/adminSlice"
import { fetchAdmin } from "../../../store/features/admin/loginSlice"

const AdminLN = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const admin = useSelector(state => state.adminLogin)
    const [onSubmit, setOnSubmit] = useState(false)
    const [data, setData] = useState({
        "email": null,
        "password": null
    })

    const formHandler = (e) => {
        e.preventDefault()
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setOnSubmit(true)
    }

    useEffect(() => {

        if (onSubmit) {
            dispatch(fetchAdmin(data))
            // dispatch(adminCheckAuth())
            setOnSubmit(false)
            // navigate(0)
        }

    }, [onSubmit])



    return ((Object.keys(admin?.data).length > 0) ? (<AdminHomePage />) :
        (<div className="flex h-screen w-screen bg-indigo-400">

            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                {admin?.error &&
                    <div className="w-full hover:bg-indigo-700 bg-pink-700 text-white font-bold  mx-3 rounded">{admin.error}</div>
                }
                <div className='text-center'>
                    <div className="font-semibold text-lg mb-5">Admin Login</div>
                </div>
                <div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                        <input required onChange={formHandler} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <input required onChange={formHandler} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input onClick={submitHandler} className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                    </div>
                </div>


            </div>

        </div>)
    )
}

export default AdminLN