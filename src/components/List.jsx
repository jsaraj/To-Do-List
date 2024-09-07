

import React from 'react'
import ListItem from "./ListItem";

function List({doneHandler,delHandler}) {

    return (
        <div className='py-5 '>
            <table className='w-full border'>
                <tr className='border border-orange-400 h-10'>
                    <th className='w-10/12 border border-orange-400'>To Do</th>
                    <th className='w-2/12'>OP</th>
                </tr>
                <ListItem title='Go to the Gym at 21:00' delHandler={delHandler} doneHandler={doneHandler}/>
            </table>
        </div>

    )
}

export default List