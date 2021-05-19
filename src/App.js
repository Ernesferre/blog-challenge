import DetailScreen from "./components/DetailScreen";
import FormScreen from "./components/FormScreen";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import AppRouter from "./routers/AppRouter";
import './App.css';


function App() {
  return (
    <div className="container">
      <AppRouter/>
    </div>
  );
}

export default App;
