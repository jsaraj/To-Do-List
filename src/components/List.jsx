

import React from 'react'
import ListItem from "./ListItem";

function List({ doneHandler, delHandler, todos }) {

    return (
        <div className='py-5 '>
            <table className='w-full border'>
                <tr className='border border-orange-400 h-10'>
                    <th className='w-10/12 border border-orange-400'>To Do</th>
                    <th className='w-2/12'>OP</th>
                </tr>
                {
                    todos && todos.map((todo) => {
                       return <ListItem key={todo.id} id={todo.id} title={todo.title} delHandler={delHandler} doneHandler={doneHandler} />
                    })
                }

            </table>
        </div>

    )
}

export default List