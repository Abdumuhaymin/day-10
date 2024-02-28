import React from 'react'
import { nanoid } from 'nanoid'
import { AppContext } from '../context/app-context/app-context-provider'
import { Card2 } from './card2'
import send from "/public/send.png"



export const Card = () => {

    const ref = React.useRef(null)
    const { dispatch } = React.useContext(AppContext)
    const submit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", payload: { name: ref.current.value, id: nanoid() } })
        ref.current.value = ""
    }
    return (
        <div className=''>
            <div className=' bg-blue-200  w-[700px] rounded-lg mx-auto mt-[50px] p-[50px]'>
                <h1 className='text-3xl font-semibold text-center mb-5'>ToDo List</h1>
                <form className='rounded-lg flex px-[20px] py-[15px] mx-auto w-[400px] bg-red-200 justify-between' onSubmit={submit}>
                    <input placeholder='Input Data' className='bg-transparent w-[300px] outline-none' type="text" ref={ref} />
                    <button className='' type='submit'>
                        <img className='w-[25px]' src={send} alt="send" />
                    </button>
                </form>
                <br />
                <Card2 />
            </div>
        </div>
    )
}
