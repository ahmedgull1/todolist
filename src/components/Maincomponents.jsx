import React, { useState, useEffect, useContext } from 'react'
import AddTask from './AddTask'
import { AppContext } from '../Appcontext/context'
import LeftSider from './LeftSider';


function Maincomponents() {
  const { state, openPopup, fetchUsers, update_completion, faverote, handleDelete, getCurrentDate } = useContext(AppContext);
  const [value, setValue] = useState('all_tasks');


  useEffect(() => {
    fetchUsers(value)
  }, [value, update_completion, faverote, handleDelete, getCurrentDate]);



  return (
    <>
      <LeftSider value={value} setValue={setValue} />
      <div className='border px-4  w-[66%] h-auto bg-[#E2E8F0] py-3'>

        <div className="border gap-6 flex flex-col sm:flex-ow md:flex-row lg:flex-row justify-between">
          <div className="border w-[270px] ">
            <input className='py-2 w-full px-4 bg-[#F1F5F9] rounded-md' type="text" placeholder='Search task' />
          </div>

          <div className=" w-40 py-2 text-center ">{getCurrentDate()}</div>

          <div className=" flex gap-4">
            <li className='list-none border py-1 text-xl text-[#9333EA]'><i class="fa-solid fa-bell"></i></li>
            <button onClick={openPopup} className='h-10 sm:h-10 md:h-10 lg:h-10 text-[12px] sm:text-sm md:text-md lg:tex-lg w-40 sm:w-20 md:w-32 lg:w-44 rounded-md text-white  bg-[#9333EA]'>ADD TASK</button>
          </div>
        </div>


        <h1 className='font-bold py-10 text-lg text-gray-500 animate-bounce'>All tasks ( <span className="text-white "> {state?.users?.length}</span> tasks)</h1>

        <div className=" border flex-wrap  flex gap-4 ">

          {state?.users?.map((ele, i) => (

            <div key={i} className=" shadow-lg rounded-md py-4 px-3 bg-[#F1F5F9] max-w-[270px] h-[250px] border-blue-500">
              <p className=" h-4 text-wrap">{ele.name}</p>
              <p className=" text-sm overflow-hidden h-[50px] py-3  w-[250px]">{ele.description}</p>
              <p className="pt-8"> <i class="fa-regular fa-calendar-days pr-4 text-sm text-black "></i>{ele.date}</p>
              <div className="pt-2">

                <p className='font-bold text-gray-400 overflow-hidden'>
                  - - - - - - - - - - - - - - - - - - - - - - - - - 
                </p>

              </div>
              <div className=" flex justify-between py-2">

                <button
                  onClick={() => update_completion(ele.id)}
                  className={` px-3 h-8 bg-${ele.complete ? 'green' : 'red'}-500 rounded-2xl text-white text-sm`}
                >
                  {ele.complete ? 'Completed' : 'UnComplete'}
                </button>

                <div className="flex gap-4 py-1 text-gray-500">
                  <button className='' onClick={() => faverote(ele.id)}  ><i class={`${ele.faverote ? 'fa-solid fa-star text-green-500' : 'fa-regular fa-star'}`}></i>{ele.faverote}</button>

                  <button onClick={() => handleDelete(ele.id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>

              </div>

            </div>


          ))}

          <div onClick={openPopup} className=" flex justify-center items-center shadow-lg rounded-md py-4 px-3  w-[275px] h-[250px]  border border-blue-500">
            <button >Add a task</button>
          </div>

        </div>



      </div>

      {
        state.popup && (
          <AddTask />
        )
      }



    </>
  )
}

export default Maincomponents
