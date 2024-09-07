
import { BsCalendarCheckFill, BsTrash3Fill } from "react-icons/bs";
import React from 'react'

function ListItem({title,delHandler,doneHandler}) {
    return (
        <>
            <tr className='border border-orange-400 h-10'>
                <td className='text-center border border-orange-400'>{title}</td>
                <td className='flex justify-around pt-3 text-lg'><BsTrash3Fill className="cursor-pointer" color="red" onClick={delHandler} /><BsCalendarCheckFill className="cursor-pointer" color="green" onClick={doneHandler} /></td>
            </tr>
        </>
    )
}

export default ListItem