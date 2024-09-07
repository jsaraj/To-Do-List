
import { BsCalendarCheckFill,BsTrash3Fill  } from "react-icons/bs";
import React from 'react'

function List() {
    return (
        <div className='py-5 '>
            <table className='w-full border'>
                <tr className='border border-orange-400 h-10'>
                    <th className='w-10/12 border border-orange-400'>To Do</th>
                    <th className='w-2/12'>OP</th>
                </tr>
                <tr className='border border-orange-400 h-10'>
                    <td className='text-center border border-orange-400'>Go to work at 7:00</td>
                    <td className='flex justify-around pt-3 text-lg'><BsTrash3Fill className="cursor-pointer" color="red" /><BsCalendarCheckFill className="cursor-pointer" color="green" /></td>
                </tr>
                <tr className='border border-orange-400 h-10'>
                    <td className='text-center border border-orange-400'>Go to work at 7:00</td>
                    <td className='flex justify-around pt-3 text-lg'><BsTrash3Fill className="cursor-pointer" color="red" /><BsCalendarCheckFill className="cursor-pointer" color="green" /></td>
                </tr>
            </table>
        </div>

    )
}

export default List