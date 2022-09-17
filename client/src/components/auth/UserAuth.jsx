import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../store/features/user/checkUserslice'
import Login from '../user/logIn/Login'


export const CheckUser = ({ children }) => {
    const dispatch = useDispatch()
    const isUser = useSelector(state => state.userVerify)

    const user = useMemo(() => ({
        user_id: isUser.data._id,
        name: isUser.data.username
    }), [isUser.data._id, isUser.data.username])

    useEffect(() => {
        dispatch(checkAuth())
    }, [user])

    if (isUser?.loading) { return "Loading..." }

    if ((!isUser?.loading) && Object.keys(isUser?.data).length !== 0) { return children }

    return <Login />

}
