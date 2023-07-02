// import { Component } from 'react';
import {
  HeaderStyled,
  MenuStyled,
  MenuContentStyled,
  MenuIconStyled
} from "./style.jsx";

import menu from "../../../assets/img/iconmenu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import BukiLogo from "../../../assets/img/bukiLogo.svg";

function Header(props) {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  }
  
  return (
    <>
      <HeaderStyled>
        <Link to="/">
        <div>
          <img src={BukiLogo} alt="" />
          </div>
        </Link>
          
        <MenuStyled show={show}>
         <li className=" link">
            <a href="#" >Home</a>
          </li>
          <li className=" link">
            <a href="#">Quem somos</a>
          </li>
          <li className=" link">
            <a href="#">Contato</a>
          </li>
          <li className=" link">          
            <a href="#">Parceiros</a>
          </li>
          <Link to="/login">
            <li className= "botaoEntrar linkPaginas">  
            <a href="#">Entrar</a>
            </li>
          </Link>

          <li className= "separaLink">ou</li>
          
          <Link to="/cadastro">
            <li className= "botaoCadastro linkPaginas">  
            <a href="#">Cadastrar</a>
            </li>
          </Link>
        </MenuStyled>

        <MenuContentStyled>
          <MenuIconStyled onClick={toggleMenu} src={menu}/>
        </MenuContentStyled>
      </HeaderStyled>
    </>
  );
}
export default Header;

// { menuIsVisible, setMenuIsVisible }
