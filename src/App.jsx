import './App.css';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from "./pages/Login/Login.jsx";
import Landing from './pages/landing/index.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import Notificacoes from './pages/Notificacoes/Notificacoes.jsx';
import Feed from "./pages/Feed/Feed.jsx";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/notificacoes' element={<Notificacoes/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App;