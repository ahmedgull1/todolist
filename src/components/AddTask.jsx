import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../Appcontext/context'

const initialState = {
    name: "",
    description: "",
    date: "",
    complete: false,
    faverote: false,
}

function AddTask() {
    const { closePopup, handleDataPost } = useContext(AppContext);
    const [Data, setData] = useState(initialState);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({ ...Data, [name]: type === 'checkbox' ? checked : value });
    }
    

    return (
        <>
            <div className="bg-black bg-opacity-30 fixed flex justify-center items-center w-screen h-screen top-0">
                <form onSubmit={()=> handleDataPost(Data)} className='max-w-lg min-w-96 mx-auto p-4 mt-10 text-gray-500 rounded-md bg-[#E2E8F0]'>
                    <div className=" flex justify-between ">
                         <h1>Add a task</h1>
                         <button type="button" onClick={closePopup}>X</button>
                    </div>

                    <div className="pt-6">
                        <label>Title</label>
                        <input
                            className='mt-1 px-2 py-2 w-full rounded-md'
                            type="text"
                            placeholder="e.g, study for the test"
                            value={Data.name}
                            name="name"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="pt-6">
                        <label>Description (optional)</label>
                        <textarea
                            className='pt-2 mt-1 h-[80px] overflow-y-auto border rounded-md px-2 w-full'
                            placeholder="e.g, study for the test"
                            value={Data.description}
                            name='description'
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="pt-6">
                        <label>Date</label>
                        <input
                            className='mt-1 px-2 py-2 w-full rounded-md'
                            type="date"
                            value={Data.date}
                            name="date"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="pt-6 flex gap-2">
                        <input
                            type="checkbox"
                            name="faverote"
                            checked={Data.faverote}
                            onChange={handleChange}
                        />
                        <h1>Mark as important</h1>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            name="complete"
                            checked={Data.complete}
                            onChange={handleChange}
                        />
                        <h1>Mark as complete</h1>
                    </div>

                    <button onClick={()=> handleDataPost(Data)} type='submit' className='rounded-md mt-6 text-white py-2 w-full text-center bg-[#A855F7]'>Add a task</button>
                </form>
            </div>
        </>
    )
}

export default AddTask;
