import React from 'react'

export const ButtonLight = () => {
    return (
        <div className=' flex gap-10 items-center'>
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all 
    hover:bg-white/90 disabled:bg-gray-400">Button</button>

            <button className="text-lg rounded-md bg-white px-8 py-2.5 font-medium text-black transition-all
     hover:bg-white/90 disabled:bg-gray-400">Button</button>


            <button className="rounded-md bg-white px-10 py-3 text-2xl font-medium text-black transition-all
     hover:bg-white/90 disabled:bg-gray-400">Button</button>
        </div>
    )
}

export const ButtonBlue = () => {
    return (
        <div className=' flex gap-10 items-center'>
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white text-sm text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400" >Button</button>

            <button className="bg-blue-600 px-8 py-2.5 rounded-md text-white text-lg text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400" >Button</button>

            <button className="bg-blue-600 px-10 py-3 rounded-md text-white text-2xl text-center hover:bg-blue-700 
transition-all disabled:bg-gray-400" >Button</button>
        </div>
    )
}

export const ButtonDark = () => {
    return (
        <div className=' flex gap-10 items-center'>
            <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400">Button</button>

            <button className="rounded-md bg-gray-900 px-8 py-2.5 text-lg font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400">Button</button>

            <button className="rounded-md bg-gray-900 px-10 py-3 text-2xl font-medium text-white transition-all
hover:bg-black disabled:bg-gray-400">Button</button>
        </div>
    )
}