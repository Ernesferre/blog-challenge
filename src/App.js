import AppRouter from "./routers/AppRouter";
import AppState from "./AppContext/AppState"

import './App.css';

// import authReducer from "./auth/authReducer";

// const init = () => {
//  return JSON.parse(localStorage.getItem('user')) || {logged: false};
// }

function App() {

    // const [user, dispatch] = useReducer(authReducer, {}, init)


  return (

    <div className="">

      {/* <AuthContext.Provider value = {{ user, dispatch }}> */}

        <AppState>

          <AppRouter/>

        </AppState>

      {/* </AuthContext.Provider> */}

    </div>
  );
}

export default App;
