import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import  DashBoard from './containers/DashBoard';
import PageRoutes from "./containers/PageRoutes";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <DashBoard></DashBoard>
          <PageRoutes></PageRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
