import React from 'react'

export const Modal = ({children,close,isOpen}) => {

    if(!isOpen){
        return null
    }
  return (
    <div onClick={close} className='bg-[#00000084] absolute inset-0 flex items-center justify-center'>
        <div className='bg-red-200 rounded-[20px] w-[500px] h-[300px] relative p-[40px]' onClick={(e)=> e.stopPropagation()}>{children}
        <button onClick={close} className='absolute top-5 right-8 font-semibold text-3xl'>x</button>
        </div>
    </div>
  )
}
