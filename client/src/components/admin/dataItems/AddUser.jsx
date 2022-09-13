import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { regAction } from '../../../store/features/user/regSlice'
import { fetchTask } from '../../../store/features/user/taskSlice'

const AddUser = ({ display }) => {
    let show = display
    const initialState = {
        username: null,
        password: null,
        email: null
    }
    const [data, setData] = useState(initialState)
    const [onSubmit, setOnSubmit] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const natigate = useNavigate()



    const onChangeHandler = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const onCancel = () => {
        natigate('/admin/')
        setData(initialState)
    }
    const onClickHandler = (e) => {
        e.preventDefault()
        setOnSubmit(true)
    }

    useEffect(() => {
        if (onSubmit) {
            if (!data.username || !data.password || !data.email) {
                setError("all fields needed")
            }
            else if (error === false) {
                dispatch(regAction(data))
                onCancel()
            }

        }
        setOnSubmit(false)
        setError(false)
    }, [onClickHandler, error])


    return (
        <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${show ? 'block' : 'hidden'}`} id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className='text-center text-lg pt-5'>Add User</div>
                    {error &&
                        <div className="w-full hover:bg-indigo-700 bg-pink-700 text-white font-bold text-center  mx-3 rounded">all fields required</div>
                    }
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                        <label>User name</label>
                        <input required onChange={onChangeHandler} name='username' type="text" className="w-full bg-gray-300 p-2 mt-2 mb-3" />
                        <label>Email</label>
                        <input required onChange={onChangeHandler} name='email' type="text" className="w-full bg-gray-300 p-2 mt-2 mb-3" />
                        <label>Password</label>
                        <input required onChange={onChangeHandler} name='password' type="password" className="w-full bg-gray-300 p-2 mt-2 mb-3" />


                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={onCancel}><i className="fas fa-times"></i> Cancel</button>
                        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2" onClick={(e) => { e.preventDefault(); onClickHandler(e) }}><i className="fas fa-plus"></i> Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser