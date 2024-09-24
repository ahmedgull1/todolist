import React,{useContext, useEffect} from 'react'
import { AppContext } from '../Appcontext/context';

function UseReducerHook() {

  const { fetchUsers, state } = useContext(AppContext)

  useEffect(() => {
    fetchUsers()
  }, []);

  console.log(state.users);

  return (
    <div>
      {state.users.map((ele) => (
        <p key={ele.name}>{ele.name} <button onClick={() => fetchSingleUser(ele.id)}>Fetch data</button></p>
      ))}

      {state.user && (
        <div>
          <p>name: {state.user?.name}</p>
          <p>name: {state.user?.email}</p>
          <p>name: {state.user?.id}</p>
          <p>name: {state.user?.age}</p>

        </div>
      )}
      {state.popup&&(
        <p>Stat is true</p>
        )}


    </div>
  )
}

export default UseReducerHook