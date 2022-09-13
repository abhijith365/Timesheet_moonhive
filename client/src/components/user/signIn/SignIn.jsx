import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { regAction } from '../../../store/features/user/regSlice'

export const SignIn = () => {
    const [data, setData] = useState({
        username: null,
        email: null,
        password: null
    })
    const [onSubmit, setOnSubmit] = useState(false)
    const user = useSelector(state => state.reg)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formHandler = (e) => {
        e.preventDefault()
        setData((prev) => { return { ...prev, [e.target.name]: e.target.value } })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setOnSubmit(true)
    }

    useEffect(() => {
        if (onSubmit === true) {
            setOnSubmit(false)
            dispatch(regAction(data))
        }
    }, [onSubmit === true])


    return (
        <div className="flex h-screen w-screen bg-indigo-400">

            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                {user?.error &&
                    <div className="w-full hover:bg-indigo-700 bg-pink-700 text-white font-bold text-center  mx-3 rounded">User Alreadyt Exists</div>
                }
                <div className='text-center'>
                    <div className="font-semibold text-lg mb-5">Sign Up</div>
                </div>
                <div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">user name</label>
                        <input onChange={formHandler} required className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                        <input onChange={formHandler} required className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                        <input onChange={formHandler} required className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input onClick={(e) => submitHandler(e)} className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                    </div>
                </div>
                <div>
                    <Link to='/' className="text-indigo-700 hover:text-pink-700 text-sm float-right"> have Account</Link>
                </div>
            </div>

        </div>
    )
}
