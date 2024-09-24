import React, { useContext, useState } from 'react';
import { AppContext } from '../Appcontext/context';
import AddTask from './AddTask';

function LeftSider({ setValue }) {

  const {state , openPopup}=useContext(AppContext)
  const [activeButton, setActiveButton] = useState('all');

  return (
    <>
      <div className=' w-[17%] h-screen sticky top-0 flex flex-col gap-20 bg-[#F1F5F9]'>
        <div className="pt-10 w-[80%] mx-auto flex flex-col gap-6 ">
          <h1 className='text-xl font-bold'>TO-DO LIST</h1>
          <button onClick={openPopup} className='px-6 rounded-md text-white py-2 bg-[#9333EA]'>ADD TASK</button>
        </div>
        <div className="pt-6 flex flex-col gap-1 font-[Arial, Helvetica, sans-serif]">
          <button value='all_tasks'
            className={`text-left px-6 py-2 text-lg ${activeButton === 'all' ? 'bg-[#D8B4FE]' : ''} text-gray-500 font-[sans-seref] hover:text-blue-500`}
            onClick={(e) => { setActiveButton('all'); setValue(e.target.value) }}
          >
            All tasks
          </button>
          <button
            value='imp_tasks'
            className={`text-left px-6 py-2 text-lg ${activeButton === 'important' ? 'bg-[#D8B4FE]' : ''} text-gray-500 font-[sans-seref] hover:text-blue-500`}
            onClick={(e) => { setActiveButton('important'); setValue(e.target.value) }}
          >
            Important tasks
          </button>
          <button
            value='comp_tasks'
            className={`text-left px-6 py-2 text-lg ${activeButton === 'completed' ? 'bg-[#D8B4FE]' : ''} text-gray-500 font-[sans-seref] hover:text-blue-500`}
            onClick={(e) => { setActiveButton('completed'); setValue(e.target.value) }}
          >
            Completed tasks
          </button>
          <button
            value='uncomp_tasks'
            className={`text-left px-6 py-2 text-lg ${activeButton === 'uncompleted' ? 'bg-[#D8B4FE]' : ''} text-gray-500 font-[sans-seref] hover:text-blue-500`}
            onClick={(e) => { setActiveButton('uncompleted'); setValue(e.target.value) }}
          >
            Uncompleted tasks
          </button>
        </div>
      </div>
      {
        state.popup &&(  <AddTask/> )
      }
    </>
  );
}

export default LeftSider;