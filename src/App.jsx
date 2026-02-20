import {BrowserRouter,Route,Routes} from "react-router"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import AppLayout from "./layouts/AppLayout"
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" element={<Login/>}/> 
            <Route path="/login" element={<Login/>}/> 
            <Route path="/dashboard" element={<Dashboard/>}/> 
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
