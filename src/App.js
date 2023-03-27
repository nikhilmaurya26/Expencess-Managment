import Login from "./component/Login";
import Expencess from "./component/Expencess";
import { BrowserRouter , Routes,Route,} from "react-router-dom";


function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Expencess" element={<Expencess/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
