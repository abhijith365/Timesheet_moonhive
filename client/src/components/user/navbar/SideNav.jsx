import React from "react";

export const SideNav = () => {
  return (
    <>
      {/* <!-- sidebar --> */}
      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* <!-- logo --> */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Time Sheet</span>
        </a>

        {/* <!-- nav --> */}
        <nav>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Current Tasks
          </a>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Previous Tasks
          </a>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Add a Timesheet
          </a>

          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Waiting for Accept
          </a>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Accepted Tasks
          </a>
          <a
            href="#"
            className="block py-4 bg-blue-700 my-2 text-lg px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white"
          >
            Rejected Tasks
          </a>
        </nav>
      </div>
    </>
  );
};
