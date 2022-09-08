import React from 'react'

export const SignIn = () => {
    return (
        <div class="flex h-screen w-screen bg-indigo-400">

            <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <div className='text-center'>
                    <div class="font-semibold text-lg mb-5">Sign Up</div>
                </div>
                <div>
                    <div>
                        <label class="block mb-2 text-indigo-500" for="username">user name</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
                    </div>
                    <div>
                        <label class="block mb-2 text-indigo-500" for="email">Email</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
                    </div>
                    <div>
                        <label class="block mb-2 text-indigo-500" for="password">Password</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                    </div>
                </div>
                <div>
                    <a class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">have Account</a>
                </div>
            </div>

        </div>
    )
}
