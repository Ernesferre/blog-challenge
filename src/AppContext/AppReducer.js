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
                // console.log(action.payload)
                return {
                    ...state,
                    AllPosts: action.payload

                }

        default:
        return state;
        
  }
}

export default AppReducer