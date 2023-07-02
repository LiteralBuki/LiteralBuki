import { Link } from "react-router-dom";
import Ilustracao from "../../../assets/img/ilustracaocadastrar.png";
import QueroCadastrarStyled from "./style.jsx";
import BukiLogoBranca from "../../../assets/img/bukiBranco.png";
export default function QueroCadastrar() {
  return (
    <QueroCadastrarStyled>
      <div className="divGeral">
        <Link to="/cadastro">
        <div className= "areaTitulo">
          <h2>Quero me Cadastrar!</h2>
          </div>
          </Link>

        <div className= "divLogo">
            <img src={BukiLogoBranca} className= "bukiLogo" />
        </div>
        
        <div className= "areaPrincipal">
            <div className= "textoEBotao">
              <h3>
                Conecte-se com profissionais de qualquer lugar do mundo. Monte a
                equipe perfeita para personalizar e dar vida ao seu projeto.
                Troque experiências.
              </h3>
              <Link to="/cadastro" className= "botaoA">
                <button className= "botao">Seja BUKER!</button>
              </Link>
            </div>

            <div>
              <img src={Ilustracao} className= "img" />
            </div>
        </div>
      </div>
    </QueroCadastrarStyled>
  );
}
