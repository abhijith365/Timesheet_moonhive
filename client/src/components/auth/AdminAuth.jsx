import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminCheckAuth } from '../../store/features/admin/adminSlice'
import AdminLN from '../admin/login/AdminLN'


export const CheckAdmin = ({ children }) => {
    const dispatch = useDispatch()
    const isUser = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(adminCheckAuth())
    }, [])

    if (isUser?.loading) { return "Loading..." }

    if (Object.keys(isUser?.data).length !== 0) { return children }

    return <AdminLN />

}
