import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function List({items,removeItem,editItem}) {
 
 
    return(
        <>
        {items.map((item)=>{
            const {id,title}=item
            return(
                <article key={id} >
                    <p>{title}</p>
                    <button type="button" className='button2'onClick={()=>editItem(id)}><FaEdit /></button>
                    <button type="button" className='button2' onClick={()=>removeItem(id)}><FaTrash /></button>
                </article>
            )
        })}
        </>
    )
}

