import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import HomePage from "../../../pages/user/HomePage"
import { checkAuth } from "../../../store/features/user/checkUserslice"
import { fetchUser } from "../../../store/features/user/userSlice"


const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => {
        return state.user
    })
    const [onSubmit, setOnSubmit] = useState(false)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
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
            setOnSubmit(false)
            console.log("login submitted")
            dispatch(fetchUser(data))
            dispatch(checkAuth())
        }
    }, [onSubmit])




    return (
        (Object.keys(user?.data).length > 0) ? <HomePage /> :

            (<div className="flex h-screen w-screen bg-indigo-400">

                <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                    {user?.error &&
                        <div className="w-full hover:bg-indigo-700 bg-pink-700 text-white font-bold  mx-3 rounded">{user.error}</div>
                    }
                    <div className='text-center'>
                        <div className="font-semibold text-lg mb-5">Login</div>
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
                    <div>
                        <Link className="text-indigo-700 hover:text-pink-700 text-sm float-left" to="/reg">Forgot Password?</Link>
                        <Link className="text-indigo-700 hover:text-pink-700 text-sm float-right" to="/reg">Create Account</Link>
                    </div>

                </div>

            </div>)
    )
}

export default Login