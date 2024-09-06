

import React from 'react'

function Layout({ children }) {
    return (
        <div className='mx-auto my-20 block w-5/12 p-5 bg-gray-300 rounded-md'>
            {children}
        </div>
    )
}

export default Layout