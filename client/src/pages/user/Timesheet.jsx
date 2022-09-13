import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DialogBox from '../../components/user/dialogBox/dialogBox'
import { fetchAllTask } from '../../store/features/user/taskSlice'


export const Timesheet = () => {
    const [dialogbox, setDialogBox] = useState(false)
    const data = useSelector(state => state.task)
    const dispatch = useDispatch()

    const changeView = () => {
        setDialogBox(!dialogbox)
    }
    useEffect(() => {
        dispatch(fetchAllTask())
    }, [dialogbox])



    return (
        <>
            <div>
                <p className="text-2xl font-semibold text-center"> Timesheet</p>
            </div>

            <div className="flex justify-end mr-6">

                <input name="start" type="date" className="bg-gray-50 border-slate-600	  text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />

                <div className="today-timesheet">
                    <button onClick={() => setDialogBox(true)} type="button" className="btn bg-red-500 text-white p-2 rounded-md" datatoggle="modal" >Add New Task</button>
                    <DialogBox display={dialogbox} changeDisplay={changeView} />
                </div>

            </div>

            <div className="flex bg-sky-400 mx-5 mt-3 p-2 rounded text-white">

                <div className="flex-1">
                    <div className="projectnametitle">Task Name</div>
                </div>
                <div className="flex-1">
                    <div className="completiontitle">Date</div>
                </div>

                <div className="flex-1 ">
                    Duration
                </div>
                <div className="flex-1 mr-5">
                    <div className="detailstitle">Description</div>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1">
                    <div className="tsdelete-row"></div>
                </div>
            </div>

            {data && (data?.allData?.length != 0) &&
                (data.allData.map(item => {

                    return <div key={item._id} className="flex bg-sky-200 mx-5 mt-3 p-2 rounded text-black">

                        <div className="flex-1">
                            <div className="projectnametitle">{item.TaskName}</div>
                        </div>
                        <div className="flex-1">
                            <div className="completiontitle">{item.Date.split("T")[0]}</div>
                        </div>

                        <div className="flex-1 ">
                            {item.Duration}
                        </div>
                        <div className="flex-1 mr-5">
                            <div className="detailstitle">{item.Description}</div>
                        </div>
                        <div className="col-md-1 col-sm-1 col-xs-1">
                            <div className="tsdelete-row"></div>
                        </div>
                    </div>

                }))
            }


        </>
    )
}
