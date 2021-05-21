import { useReducer, useEffect } from 'react'
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { types }  from "./types" ;
import axios from 'axios';


const AppState = ({children} ) => {

    const initialState = {
        Post: {},
        NewPost: {},
        AllPosts: [],
        token: localStorage.getItem('token') || null, 
        autenticado: false,
        AddPost: false,
        isCreated: false
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
            console.log(respuesta);
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



    const find_OnePost = async (id) => {
        console.log(id)
        try {
            const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(respuesta.data);
            dispatch ({
            type: types.get_OnePost, payload: respuesta.data
        })
        } catch (error) {
            console.log(error)
        }
    }


    const CreatePost = async (data) => {
        try {
            const Response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: {
                    userId: 1,
                    id: 101,
                    title: (data.title),
                    body: (data.body),
                    
                },
                
            }) 
            dispatch({
            type: types.create_post, payload: Response.data
        })
        console.log(Response.data)
        } catch (error) {
            console.log(error);
        }
    }

    

    

    const editPost = async (id, data) => {
        console.log(id)
        try {
            const respuesta = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
                body: {
                    userId: 1,
                    id: id,
                    title: (data.title),
                    body: (data.body),     
                }})
            
            console.log(respuesta.data);
            dispatch ({
            type: types.edit_post, payload: respuesta.data
        })
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        dispatch({type: types.logout})   
    }

    
    const deletePost = (id) => {
        console.log(id)
        try {
            const respuesta = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
              });
            console.log(respuesta);
            dispatch ({
            type: types.delete_post, payload: respuesta.data
        })
        } catch (error) {
            console.log(error)
        }
    }
    





    
    return (
        <AppContext.Provider value= {{
            Post: state.Post,
            AllPosts: state.AllPosts,
            token: state.token,
            autenticado: state.autenticado,
            AddPost: state.AddPost,
            NewPost: state.Post,
            isCreated: state.Post,
            login,
            findPosts,
            find_OnePost,
            CreatePost,
            editPost,
            logout,
            deletePost
        

         }}>
            {children}
            
        </AppContext.Provider>
    )
}

export default AppState