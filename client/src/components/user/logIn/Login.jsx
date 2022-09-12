import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../../../store/features/user/userSlice"

const Login = () => {

    const dispatch = useDispatch()
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
            console.log("login submitted")
            dispatch(fetchUser(data))
            // console.log(user)
            setOnSubmit(false)
        }
    }, [onSubmit])

    return (
        <div className="flex h-screen w-screen bg-indigo-400">

            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <div className='text-center'>
                    <div className="font-semibold text-lg mb-5">Login</div>
                </div>
                <div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                        <input onChange={formHandler} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <input onChange={formHandler} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input onClick={submitHandler} className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                    </div>
                </div>
                <div>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                </div>
            </div>

        </div>
    )
}

export default Login