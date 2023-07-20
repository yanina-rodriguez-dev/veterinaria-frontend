import Navbar from "./components/common/Menu"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/common/Footer";
import Login from "./components/views/Login";


function App() {
 
  return (
    
    <div className="fondoGeneral">
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </div>
    
  )
}

export default App
