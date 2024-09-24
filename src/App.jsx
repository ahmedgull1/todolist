import React,{useState} from 'react'
import AllComponents from './components/AllComponents'


function App() {


  const [isDarkMode, setIsDarkMode] = useState(false);

 
  
console.log(isDarkMode)
  return (

    <div>

      <div className={isDarkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <AllComponents isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      </div>


    </div>
  )
}

export default App