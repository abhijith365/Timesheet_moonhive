import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, logOut as userLogout } from '../../../store/features/user/logOutSlice'

function Header() {
    const isUser = useSelector(state => state.userVerify)
    const username = isUser.data.data?.username || "loading..."
    const [logOut, setLogOut] = useState(false)
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    useEffect(() => {
        console.log("header useEffect")

        if (logOut) {
            dispatch(userLogout())
            dispatch(reset());
            localStorage.removeItem('access_token')
            Navigate(0)
        }

    }, [logOut, username])


    return (
        <nav className="bg-white py-2 md:py-4 w-100">
            <div className="container px-4 mx-auto md:flex md:items-center">

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <a href="#" className="p-2 lg:px-4 md:mx-2 text-neutral-800 text-center border border-transparent rounded  bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">{username}</a>
                    <a onClick={() => setLogOut(true)} className="p-2 cursor-pointer lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">LogOut</a>
                </div>
            </div>
        </nav>
    )
}

export default Header