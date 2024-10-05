import { createContext, useReducer } from "react";
import axios from "axios";

const AppContext = createContext();

const initialState = {
    users: [],
    popup: false,
}



const reducer = (state, action) => {

    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload }
        case 'GET_USER_DATA':
            return { ...state, user: action.payload }
        case 'OPEN_POPUP':
            return { ...state, popup: true }
        case 'CLOSE_POPUP':
            return { ...state, popup: false }
        case 'TOGGLE_COMPLETE':
            return { ...state }
        case 'DATA_POST':
            return { ...state }

        default:
            return state;
    }
}

function AppProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchUsers = async (value) => {
        const { data } = await axios.get('http://todolist-cj15.onrender.com/users')

        if (value) {
            function getDataByValue() {
                let result;
                switch (value) {
                    case 'all_tasks':
                        result = data;
                        break;
                    case 'imp_tasks':

                        result = data.filter((ele) => ele.faverote);
                        break;
                    case 'comp_tasks':
                        result = data.filter((ele) => ele.complete);
                        break;
                    case 'uncomp_tasks':
                        result = data.filter((ele) => !ele.complete);
                        break;
                    default:
                        result = data;
                        break;
                }
                return result;
            }
            dispatch({ type: "GET_USERS", payload: getDataByValue() });
        }
    }

    const openPopup = () => {
        dispatch({ type: "OPEN_POPUP" })
    }

    const closePopup = () => {
        dispatch({ type: "CLOSE_POPUP" })
    }

    const update_completion = async (id) => {
        let findObj = state.users.find((user) => user.id == id);
        findObj.complete = !findObj.complete
        const { data } = await axios.put(`http://todolist-cj15.onrender.com/users/${findObj.id}`, findObj);
        dispatch({ type: "TOGGLE_COMPLETE", payload: data });
    }

    const faverote = async (id) => {
        let findObj = state.users.find((user) => user.id == id);
        findObj.faverote = !findObj.faverote
        const { data } = await axios.put(`http://todolist-cj15.onrender.com/users/${findObj.id}`, findObj);
        dispatch({ type: "TOGGLE_FAVEROTE", payload: data })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://todolist-cj15.onrender.com/users/${id}`);
        console.log(id, "test");
        const filterData = state.users.filter((ele) => ele.id !== id);
        dispatch({ type: "TOGGLE_DELETE", payload: filterData })
    };

    function getCurrentDate() {
        const date = new Date();
        const Year = date.getFullYear();
        const monthname = ['januery', 'February', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = monthname[date.getMonth()];
        const day = date.getDate()
        return `${month} / ${day} / ${Year} `
    }

    const handleDataPost = async (data) => {
        try {
            await axios.post(`http://todolist-cj15.onrender.com/users`, data)
            dispatch({type: 'DATA_POST'})
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <AppContext.Provider value={{ state, fetchUsers, closePopup, openPopup, update_completion, faverote, handleDelete, getCurrentDate, handleDataPost }}>
            {children}
        </AppContext.Provider>

    )

}

export { AppProvider, AppContext }