

function Forms({change ,inputHandler ,intervalRef}) {

    return (
        <div>
            <form ref={intervalRef} className='flex justify-between pt-5' onSubmit={inputHandler}>
                <input type='text' name="txt1" className='w-9/12 p-2 rounded-sm focus:outline-none shadow-md' onChange={change}></input>
                <input type='submit' value='Add' className='w-2/12 bg-orange-400 rounded-sm cursor-pointer shadow-md'></input>
            </form>
        </div>
    )
}

export default Forms