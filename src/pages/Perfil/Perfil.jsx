import PerfilStyled from "./style";

import Alarmbell from "../../assets/img/perfil/alarmbell.svg";
import Bublechat from "../../assets/img/perfil/bublechat.svg";
import Configuration from "../../assets/img/perfil/configuration.svg";
import Dashboard from "../../assets/img/perfil/dashboard.svg";
import Exitlogout from "../../assets/img/perfil/exitlogout.svg";
import Helpoutline from "../../assets/img/perfil/helpoutline.svg";
import Light from "../../assets/img/perfil/light.svg";
import Userperson from "../../assets/img/perfil/userperson.svg";

import Isaque from "../../assets/img/perfil/isaque.jpg";

export default function Pefil() {
    return (
    <PerfilStyled>
      <div className= "perfil">
        <img className= "imagem" src= {Isaque} alt="foto de perfil do usuario" />
        </div>
        
      <div className= "abas">
        <ul>
          <li>
            <img src= {Userperson} alt="" />
            <h2>Meu Perfil</h2>
          </li>
          <li>
            <img
              src= {Dashboard}
              alt=""
            />
            <h2>Feed</h2>
          </li>
          <li>
            <img
              src= {Bublechat}
              alt=""
            />
            <h2>Chat</h2>
          </li>
          <li>
            <img
              src= {Alarmbell}
              alt=""
            />
            <h2>Notificações</h2>
          </li>
          <li>
            <img src= {Light} alt="" />
            <h2>Meu Projeto</h2>
          </li>
        </ul>
      </div>
      <div className= "abas-2">
        <div className= "config">
          <ul>
            <li>
              <img
                src= {Configuration}
                alt=""
              />
              <h2>Configurações</h2>
            </li>
          </ul>
        </div>
        <div className="help">
          <ul>
            <li>
              <img
                id="tamanho-icon-1"
                src= {Helpoutline}
                alt=""
              />
              <h2>Ajuda</h2>
            </li>
          </ul>
        </div>
        <div className="out">
          <ul>
            <li>
              <img
                id="tamanho-icon-2"
                src= {Exitlogout}
                alt=""
              />
              <h2>Sair</h2>
            </li>
          </ul>
        </div>
      </div>
            </PerfilStyled>
  )
}
