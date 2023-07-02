import { LoginStyled, InformacoesLoginStyled } from "./style.jsx";
import { Link } from "react-router-dom";
import BukiLogo from "../../assets/img/bukiLogo.svg";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
    console.log(e.target.value)
  }

  // const logar = () => {
  //   fetch('http://localhost:8080/api/v1/hello',{
  //     method:'post',
  //     body:JSON.stringify(login),
  //     headers:{
  //       'Content-type':'application/json',
  //       'Accept':'application/json'
  //     } 
  //   })
  //   // {.then(retorno = retorno.json())
  //   // .then(retorno_convertido => {
  //   //   console.log(retorno_convertido);
  //   // } 
  // }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(`E-mail: ${login.email}`);
      console.log(`Senha: ${login.senha}`);
      try {
        const response = await axios.post('http://localhost:8080/usuario/login', {
          email: login.email,
          senha: login.senha
        });
          console.log(response.data);
          alert("Usuário identificado!")
          navigate("/feed")
      } catch (error) {
          alert("Dados incorretos!")
          console.log(error.response.data);
          navigate("/login");
    }
  }

  return (
    <LoginStyled>
      <InformacoesLoginStyled>
        <div className="mensagem">
          <p>
            Mergulhe em uma experiência repleta de oportunidades para 
            <span>transformar suas ideias em obras-primas. </span>
          </p>
        </div>
      </InformacoesLoginStyled>

      <div className= "areaCadastrar">
        <p className= "textoCadastrar">
          Já é membro da comunidade?
          <Link to="/cadastro">
            <span className= "botaoEntrar"> Cadastrar</span>
          </Link>
        </p>
      </div>

      <div className= "areaLogin">
        <h2>Que bom te ver de novo!</h2>
        <h1>Entrar</h1>

        <div className= "divFormulario">
          <form action="post" onSubmit={handleSubmit}>
            <div className= "inputDuplo">
              <div>
                <label htmlFor="usuario">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className= "input"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  required
                  className= "input"
                  onChange={handleChange}
                />
                <Link to="/">
                  <p className= "esqueciSenha">Esqueci minha senha</p>
                </Link>
              </div>
            </div>
              <button className="botao">Entrar</button>
          </form>
        </div>
      </div>

      <span className= "bukiHome">
        <Link to="/">
          <img src={BukiLogo} alt="" />
        </Link>
      </span>
    </LoginStyled>
  );
  }
