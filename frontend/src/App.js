import{BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Login from './components/Login';
import { Signup } from "./components/Signup";
import { Plugin } from "./components/Plugin";
import swal from 'sweetalert2';
import Dashboard from "./components/Dashboard";
window.Swal = swal;
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route element={<Plugin></Plugin>} path="/"/>
      

         <Route element={<Login></Login>} path="/login"/>
         <Route element={<Signup></Signup>} path="/signup"/>
        
         <Route element={<Plugin></Plugin>} path="/plugin"/>
         <Route element={<Dashboard />} path="/dashboard"/>
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
   
export default App;