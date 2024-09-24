import React from 'react'
import RightSider from './RightSider'
import Maincomponents from './Maincomponents'

function AllComponents({isDarkMode, toggleDarkMode}) {


  
  return (

    <div>
        {/* <UseReducerHook/>
        <UseContextHook/>
        <UseRefHook/> */}

        <div className="flex border border-black">
            <Maincomponents/>
            <RightSider isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        </div>

    </div>
  )
}

export default AllComponents