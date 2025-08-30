import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import Past from './Past'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'

const Home = () => {


    const [title,setTitle] = useState("")

    const [value, setValue] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");

    const dispatch = useDispatch();

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id : pasteId  || 
            Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
    

    if(pasteId) {
        //update
        dispatch(updateToPastes(paste));
    }
    else{
        //created 
        dispatch(addToPastes(paste));
    }


    //after creation or updation 
    setTitle('');
    setValue('');
    setSearchParams({});


}
  return (
    <div>

    <div className='flex flex-row gap-7 place-content-between'>
        <input type="text"
        placeholder='Enter title here'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        className='p-1 rounded-2xl mt-2 bg-black w-78 pl-4 ' />

        <button className='p-1 rounded-2xl mt-2 bg-black ' onClick={createPaste} >
            {
                pasteId ? "Update Paste" : "Create My Paste"
            }
        </button>
    </div>

    <div className='mt-8 '>
        <textarea
        className='rounded-2xl mt-4 min-w-[500px] p-4 bg-black'
        name="" 
        id="" 
        cols="30"
        value={value}
        placeholder='Enter content here'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        ></textarea>
    </div>
        </div>
  )
}

export default Home