import React from 'react'
import { AppContext } from '../context/app-context/app-context-provider';
import edit from "/public/edit.png"
import remove from "/public/delete.svg"
import { Modal } from './ui/modal'
import { useToggle } from '../hook/useToggle'



export const Card2 = () => {



    const { data, dispatch } = React.useContext(AppContext)
    const deleteData = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }
    const editData = (id, name) => {
        let newUser = prompt("Edit name", name)
        dispatch({ type: "EDIT", payload: { id, name: newUser } })
    }

    return (
        <div >
            <h2>{data.user?.map((item) =>
                <div className='flex items-center justify-between border-b-2 border-black py-[10px]' key={item.id}>
                    <h2 className='text-3xl font-semibold'>{item.name}</h2>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => deleteData(item.id)}>
                            <img className='w-[30px]' src={remove} alt="icon" />
                        </button>
                        <button onClick={()=>editData(item.id, item.name)} >
                            <img className='w-[30px]' src={edit} alt="icon" />
                        </button>
                    </div>
                </div>
            )}</h2>
        </div>
    )
}
