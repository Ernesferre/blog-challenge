import { types } from './types';

const AppReducer = (state, action) => {
  
    switch (action.type) {
    
            case types.login:
                // console.log(state.autenticado);
                localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token:  action.payload.token, 
                autenticado: true
            }



            case types.get_posts:
                console.log(action.payload)
            return {
                ...state,
                AllPosts: action.payload
            }


            case types.get_OnePost:
                console.log(action.payload)
            return {
                ...state,
                Post: action.payload
            }


            case types.create_post:
                console.log(action.payload)
            return {
                ...state,
                NewPost: action.payload,
                AddPost: true
            }

            case types.edit_post:
                console.log(action.payload)
            return {
                ...state,
                Post: action.payload
            }

            case types.logout:
                // console.log(action.payload)
                localStorage.removeItem('token')
            return {
                ...state,
                token:  null, 
                autenticado: false
                
            }



        
        default:
        return state;
        
  }
}

export default AppReducer