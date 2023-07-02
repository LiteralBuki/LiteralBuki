import {
    SidebarStyled,
    MenuStyled,
    MenuHamburguerStyled,
    NavegacaoOpcoesStyled,
    NavegacaoUl
} from "./style";

import { Link } from "react-router-dom";
import { useState } from 'react'; //imrs
import MenuIcon from "../../assets/img/Notificacoes/menu-icon.svg";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";

// import { useLocation } from 'react-router-dom';

export default function Sidebar(props) {

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
        console.log(show);
  };
  
  // const location = useLocation();
  // const { usuario, senha } = location.state;
  
    return (  
        <SidebarStyled>
        <div className= "perfilMenu">
          <header>
            <img
              src="/src/assets/img/Notificacoes/WhatsApp Image 2023-06-10 at 22.57.43.jpeg"
             className= "fotoPerfil" />

          <div>
              <h3>IsaqueCruz</h3>
              <p>Escritor</p>
          </div>
          </header>

          <div className= "navegacao">
            <NavegacaoOpcoesStyled show={show}>
              <NavegacaoUl>
                <Link to="/">
                  <li className= {props.tipoItem1}> {props.itemSidebar1}</li> 
                </Link>
                  
                <Link to="/feed">
                <li className= {props.tipoItem2}>{props.itemSidebar2}</li>
                </Link>

                <Link to="/notificacoes">
                  <li className= {props.tipoItem3}>{props.itemSidebar3}</li>
                </Link>
                    
                <Link to="/">
                  <li className= {props.tipoItem4}>{props.itemSidebar4}</li>
                </Link>
                 
              </NavegacaoUl>

          <div className= "final">
            <ul>
                <li><a href="#"><i className="fa-sharp fa-solid fa-gear"></i><h4>Configurações</h4></a></li>
                  <li><a href="#"><i className="fa-sharp fa-solid fa-circle-question"></i><h4>Ajuda</h4></a></li>
                <Link to='/'>
                <li><a href="#"><i className="fa-solid fa-right-from-bracket"></i><h4>Sair</h4></a></li>
                </Link>
            </ul>
          </div>
              </NavegacaoOpcoesStyled>
          </div>

          <MenuStyled onClick={handleToggle}>
              <MenuHamburguerStyled src= {MenuIcon} />
            </MenuStyled>
        </div>
      </SidebarStyled>
    );
}
