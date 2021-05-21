import AppRouter from "./routers/AppRouter";
import AppState from "./AppContext/AppState"
import './App.css';


function App() {
  return (
    <div className="">
    <AppState>
      <AppRouter/>
    </AppState>
    </div>
  );
}

export default App;
