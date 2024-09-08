
import { BsCalendarCheckFill, BsTrash3Fill } from "react-icons/bs";
import { AiOutlineUndo } from "react-icons/ai";

import React from 'react'

function ListItem({ done, id, title, delHandler, doneHandler }) {

    return (
        <>
            <tr className={`${done ? 'bg-orange-400' : 'bg-gray-100'} ' border border-orange-400 h-10 transition-colors duration-150 '`}>
                <td className='text-center border border-orange-400'>{done ? <del>{title}</del> : title}</td>
                <td className='flex justify-around pt-3 text-lg'><BsTrash3Fill className="cursor-pointer" color="red" onClick={() => delHandler(id)} />
                    {
                        done ? <AiOutlineUndo className="cursor-pointer" color="yellow" onClick={() => doneHandler(id)} /> : <BsCalendarCheckFill className="cursor-pointer" color="green" onClick={() => doneHandler(id)} />
                    }
                </td>
            </tr>
        </>
    )
}

export default ListItem