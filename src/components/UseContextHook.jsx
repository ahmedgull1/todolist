import React, {useContext} from 'react'
import { AppContext } from '../Appcontext/context';

function UseContextHook() {


    const mycontext = useContext(AppContext);

    console.log(mycontext);

    
  return (
    <div>UseContextHook</div>
  )
}

export default UseContextHook