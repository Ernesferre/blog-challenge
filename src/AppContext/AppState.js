import { useReducer, useEffect } from 'react'
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { types }  from "./types" ;
import axios from 'axios';


const AppState = ({children} ) => {

    const initialState = {
        AllPosts: [],
        token: localStorage.getItem('token') || null, 
        autenticado: false
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    

    const login = async (data) => {
        try {
            const Response = await axios.post("http://challenge-react.alkemy.org/", data)
            dispatch({
            type: types.login, payload: Response.data
        })
        console.log(Response);
        } catch (error) {
            console.log(error);
        }
    }


    const findPosts = async () => {  
        try {
            const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(respuesta);
            dispatch({
            type: types.get_posts, payload: respuesta.data
        })
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findPosts(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    
    return (
        <AppContext.Provider value= {{
            AllPosts: state.AllPosts,
            token: state.token,
            autenticado: state.autenticado,
            login,
            findPosts,
        

         }}>
            {children}
            
        </AppContext.Provider>
    )
}

export default AppState