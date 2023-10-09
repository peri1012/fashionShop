//Router
import { Route, Routes } from 'react-router-dom';

//Pages
import Catalogue from "./pages/Catalogue";
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/catalogue" element={<Catalogue/>}/>
      {/* <Route path="*" element={<NotFound/>}/> */}
      <Route path="/login" element={<Login/>}/>
    </Routes>
   
  )
}

export default App
