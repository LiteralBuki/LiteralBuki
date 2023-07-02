import {
  NotificacaoStyled,
  SeguraStyled,
} from "./style.jsx";

import Sidebar from "../../components/Siderbar/Sidebar.jsx";

// import LogoBuki from "../../assets/img/bukiLogo.svg";
import NotificacaoContent from "../../components/Notificacao/NotificacaoContent/NotificacaoContent.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function Notificacoes() {

  return (
    <SeguraStyled>
            <Sidebar tipoItem3="abaEscolhida"
                itemSidebar1={<ItemSidebar nomeItem="Meu Perfil" icon="fa-solid fa-user" />}
                itemSidebar2={<ItemSidebar nomeItem="Feed" icon="fa-solid fa-home" />}
                itemSidebar3={<ItemSidebar nomeItem="Notificações" icon="fa-solid fa-bell" />   }
                itemSidebar4={<ItemSidebar nomeItem="Meu Projeto" icon="fa-solid fa-lightbulb" />}
        
            />
    <NotificacaoStyled>
      <div className= "container">
        <div className= "notificacao">
          <div className= "headerDaNotificacao">
              <h1>NOTIFICAÇÕES</h1>
              <div className= "areaInput">
            <input
              type="text"
              name="busca"
              id="busca"
              placeholder="Pesquise aqui"
            />
                <i className= "fa-solid fa-magnifying-glass"></i>
                </div>
          </div>

          <div className= "notificacoes">
            <div className= "notNova">
              <h1>NOVAS</h1>
              <i className= "fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>

            <div className= "barrasNovas">
              <NotificacaoContent
                img="/src/assets/img/Notificacoes/dany.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/elliewilliams.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/harry.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />

              <NotificacaoContent
                img="/src/assets/img/Notificacoes/jacaerysstrong.jpeg"
                titulo="isaque"
                acao="comentou seu post: "
                tempo="15 minutos"
                texto="Olá, Isaque. Vi que começou um novo"
              />
              <NotificacaoContent
                img="/src/assets/img/Notificacoes/lucerysstrong.jpeg"
                titulo="Amanda"
                acao="comentou seu post: "
                tempo="55 minutos"
                texto="Eu amo esse livro das fadas sagazes, mal posso esperar para o próximo trabalho com voce"
              />
            </div>
          </div>

          <div className= "pausaDePag">
            <div className= "verMais">
              <h1>Ver mais</h1>
              <i className="fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>
          </div>

          <div className="notificacoes">
            <div className="notNova">
              <h1>Anteriores</h1>
              <i className="fa-sharp fa-solid fa-circle-chevron-down"></i>
            </div>
          </div>

          <div className="barrasNovas">
            <NotificacaoContent
              img="/src/assets/img/Notificacoes/dany.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />
            <NotificacaoContent
              img="/src/assets/img/Notificacoes/elliewilliams.jpeg"
              titulo="Amanda"
              acao="comentou seu post: "
              tempo="55 minutos"
              texto="Eu amo esse livro das fadas sagazes, mal posso esperar para o próximo trabalho com voce"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/jacaerysstrong.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/lucerysstrong.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />

            <NotificacaoContent
              img="/src/assets/img/Notificacoes/pedropascal.jpeg"
              titulo="isaque"
              acao="comentou seu post: "
              tempo="15 minutos"
              texto="Olá, Isaque. Vi que começou um novo"
            />
          </div>
        </div>
      </div>
      </NotificacaoStyled> 

      {/* <Link to="/">
        <div className="logo">
          <img src={LogoBuki} />
        </div>
      </Link> */}
    </SeguraStyled>
  );
}

export default Notificacoes;
