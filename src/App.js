import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
