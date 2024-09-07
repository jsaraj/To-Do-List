
import React, { useState } from 'react'

function Forms() {

    const [inputValue, setInputValue] = useState('');

    const inputHandler = (e) => {
        e.preventDefault();
        console.log(inputValue)
    }

    return (
        <div>
            <form className='flex justify-between pt-5' onSubmit={inputHandler}>
                <input type='text' className='w-9/12 p-2 rounded-sm focus:outline-none shadow-md' onChange={(e) => setInputValue(e.target.value)}></input>
                <input type='submit' value='Add' className='w-2/12 bg-orange-400 rounded-sm cursor-pointer shadow-md'></input>
            </form>
        </div>
    )
}

export default Forms