import React from 'react'

export const Timesheet = () => {
    return (
        <>
            <div>
                <p className="text-2xl font-semibold text-center"> Timesheet</p>
            </div>

            <div className="flex justify-end mr-6">

                <input name="start" type="date" class="bg-gray-50 border-slate-600	  text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />

                <div className="today-timesheet">
                    <button type="button" className="btn bg-red-500 text-white p-2 rounded-md" dataToggle="modal" >Add New Task</button>
                </div>

            </div>

            <div class="flex bg-sky-400 mx-5 mt-3 p-2 rounded text-white">

                <div class="flex-1">
                    <div class="projectnametitle">Task Name</div>
                </div>
                <div class="flex-1">
                    <div class="completiontitle">Date</div>
                </div>

                <div class="flex-1 ">
                    Duration
                </div>
                <div class="flex-1 mr-5">
                    <div class="detailstitle">Description</div>
                </div>
                <div class="col-md-1 col-sm-1 col-xs-1">
                    <div class="tsdelete-row"></div>
                </div>
            </div>


        </>
    )
}
