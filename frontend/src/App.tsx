import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Layout} from "./pages/Layout.tsx";
import {Home} from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import {NotFound} from "./pages/NotFound.tsx";
import Form from "./pages/Form.tsx";
import Contacts from './pages/Contacts.tsx';
import Register from './pages/Register.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/services"} element={<Services/>}/>
             <Route path={"/form"} element={<Form/>}/> 
            <Route path={"/contacts"} element={<Contacts/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"*"} element={<NotFound/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
