import React from 'react'

export default function UpdateEmployee() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Full Name
                    </label>
                    <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Email Address
                    </label>
                    <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Phone
                    </label>
                    <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Enter your phone"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Address
                    </label>
                    <textarea
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Enter your email"
                    ></textarea>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Salary
                    </label>
                    <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Enter your salary"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                    Dialy pay
                    </label>
                    <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Enter your dialy pay"
                    />
                </div>
            </div>
        </>
    );
}
