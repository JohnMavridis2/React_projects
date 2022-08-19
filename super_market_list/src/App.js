import React, { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'

export default function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    function handleSubmit(e){
        e.preventDefault()
        if(!name){
            showAlert(true,'danger','please enter values')
        }else if (name && isEditing){
            setList(
                list.map((item)=>{
                if (item.id===editID){
                   return {...item,title:name} 
                }
                return item
            })
            )
            setName('')
            setEditID(null)
            setIsEditing(false)
            showAlert(true,'success','value changed')
        }else{
            showAlert(true,'success','item added to the list')
            const newItem={
                id: new Date().getTime().toString(),
                title:name
            }   
            setList([...list,newItem])  
            setName('')           
        }

    }

    function showAlert(show=false,type='',msg=''){
        setAlert({show,type,msg})
    }

    function clearList(){
        showAlert(true,'danger','empty list')
        setList([])
    }

    function removeItem(id){
        showAlert(true,'danger','item removed')
        setList(list.filter((item)=>item.id !== id))
    }

    function editItem(id){
        const specificItem=list.find((item)=>item.id===id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }

    return(
        <>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            <h2>super market list</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="e.g. milk"
                        value={name}   
                        onChange={(e)=>setName(e.target.value)} 
                    />   
                    <button className='button1'>
                        {isEditing ? 'edit':'submit'}
                    </button>
                </form>
                <List items={list} removeItem={removeItem} editItem={editItem} />
                <button onClick={clearList} className='button1'>clear items</button>
            </div>
        </>
    )   
}

