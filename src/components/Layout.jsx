

import React from 'react'

function Layout({ children }) {
    return (
        <div className='flex justify-center items-center w-4/12 p-5 bg-gray-300'>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout