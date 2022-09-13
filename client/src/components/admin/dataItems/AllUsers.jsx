import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUser } from '../../../store/features/admin/dataSlice'

const AllUsers = () => {
    const users = useSelector(state => state.adminData.allUserData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allUser())
    }, [])


    return (
        users &&
        <div className="bg-white">

            <div className="overflow-x-auto border-x border-t">
                <table className="table-auto w-full">
                    <thead className="border-b">
                        <tr className="bg-gray-100">
                            <th className="text-left p-4 font-medium">
                                Name
                            </th>
                            <th className="text-left p-4 font-medium">
                                Email
                            </th>
                            <th className="text-left p-4 font-medium">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((item) => {
                            return (

                                <tr key={item._id} className="border-b hover:bg-gray-50">
                                    <td className="p-4">
                                        {item.username}
                                    </td>
                                    <td className="p-4">
                                        {item.email}
                                    </td>
                                    <td className="p-4">
                                        {(item.isAdmin) ? 'Super Administrator' : 'User'}

                                    </td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers