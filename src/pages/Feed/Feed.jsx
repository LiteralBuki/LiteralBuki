import { FeedStyled, AreaPrincipalStyled, LateralStyled, LateralDireitaStyled } from "./style.jsx";

import Sidebar from "../../components/Siderbar/Sidebar.jsx";
import ItemSidebar from "../../components/ItemSidebar/ItemSidebar.jsx";
import BackgroundFeed1 from "../../assets/img/Notificacoes/publicação.svg";
import BackgroundFeed2 from "../../assets/img/Notificacoes/publicacao2.jpg";
import BackgroundFeed3 from "../../assets/img/Notificacoes/publicacao3.jpg";

import FotoPerfil1 from "../../assets/img/Notificacoes/Elizabeth-bennet-miss-elizabeth.webp";
import FotoPerfil2 from "../../assets/img/Notificacoes/elliewilliams.jpeg";
import FotoPerfil3 from "../../assets/img/Notificacoes/harry.jpeg";

import PulicacaoFeed from "../../components/PublicacaoFeed/PublicacaoFeed.jsx";
import PostagemLateral from "../../components/PostagemLateral/PostagemLateral.jsx";

import SvgFeed from "../../assets/img/svgFeed.svg";
import EstatisticaFeed from "../../assets/img/estatisticaFeed.svg";

export default function Feed() {
  const usuario = "Andre Santana";

  return (
    <FeedStyled>
      <Sidebar
        tipoItem2="abaEscolhida"
        itemSidebar1={
          <ItemSidebar nomeItem="Meu Perfil" icon="fa-solid fa-user" />
        }
        itemSidebar2={
          <ItemSidebar
            nomeItem="Feed"
            icon="fa-solid fa-home"
            tipoItem="abaEscolhida"
          />
        }
        itemSidebar3={
          <ItemSidebar nomeItem="Notificações" icon="fa-solid fa-bell" />
        }
        itemSidebar4={
          <ItemSidebar nomeItem="Meu Projeto" icon="fa-solid fa-lightbulb" />
        }
      />

      <AreaPrincipalStyled>
        <div className="procurar">
          <input type="text" name="" id="" placeholder="Pesquisar" />
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="publicar">
          <div className="principal">
            <div className="imagemPerfilPublicar">
              <img src={FotoPerfil1} />
            </div>
            <div className="inputPublicar">
              <input
                type="text"
                name=""
                id=""
                placeholder="Compartilhe sua próxima ideia..."
              />
            </div>
            <div className="inputFile">
              <label htmlFor="file">
                <i className="fa-solid fa-link"></i>
              </label>
              <input type="file" name="file" id="file" />
            </div>
          </div>
          <div className="botaoPublicar">
            <button>Publicar</button>
          </div>
        </div>

        <div className="artigos">
          <PulicacaoFeed
            usuario={usuario}
            fotoPerfil={FotoPerfil1}
            imagemPubli={BackgroundFeed1}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla dignissim, sapien justo lacinia risus, eu feugiat nulla ante eu neque. "
          />

          <PulicacaoFeed
            usuario="Iago Angel"
            fotoPerfil={FotoPerfil2}
            imagemPubli={BackgroundFeed2}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla dignissim, sapien justo lacinia risus, eu feugiat nulla ante eu neque. "
          />

          <PulicacaoFeed
            usuario="Isaque Cruz"
            fotoPerfil={FotoPerfil3}
            imagemPubli={BackgroundFeed3}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a fringilla dignissim, sapien justo lacinia risus, eu feugiat nulla ante eu neque. "
          />
        </div>
      </AreaPrincipalStyled>

      <LateralDireitaStyled>
        <LateralStyled>
          <PostagemLateral
            titulo="Anne Lannister"
            imagem=""
            texto="”É incrível o talento dessa 
            garota!!!”"
          />

          <PostagemLateral
            titulo="Olá, Camilla! Aqui estão as dicas de hoje para o seu perfil!"
            imagem={SvgFeed}
            texto="É só clicar e aproveitar ;)"
          />

          <PostagemLateral
            titulo="Dam Makson"
            imagem=""
            texto="🔔 Notificação 🔔"
          />

          <PostagemLateral
            titulo="Nossa equipe tem trabalhado arduamente para trazer a vocês algumas melhorias incríveis na plataforma."
            imagem={EstatisticaFeed}
            texto=""
          />

          <PostagemLateral
            titulo="organizaremos um evento especial no próximo fim de semana."
            imagem=""
            texto="
                É só clicar e aproveitar! ;)"
          />
          
        </LateralStyled>
      </LateralDireitaStyled>
      {/* 
        <div className= "sidebar-left">
            <div className= "teste1">
                <div className="sidetotal">
                    <div className="content-live">
                        <div className="noticia1">
                            <h4>Anne Lannister</h4>
                            <h4>”É incrível o talento dessa
                                garota!!! </h4>
                        </div>
                    </div>
                    <div className="content-live">
                        <div className="noticia1">
                            <h4>Olá, Camilla! Aqui estão as dicas de hoje para o seu perfil!</h4>
                            <img src="img/Advanced customization-pana 1.svg" alt="" />
                            <h4> É só clicar e aproveitar!</h4>
                        </div>
                    </div>
                    <div className="content-live">
                        <div className="noticia1">
                            <h4>Dam Makson</h4>
                            <h4>🔔 Notificação 🔔</h4>
                        </div>
                    </div>
                    <div className="content-live">
                        <div className="noticia1">
                            <h4>Nossa equipe tem trabalhado arduamente para trazer a vocês algumas melhorias incríveis na plataforma.</h4>
                            <img src="img/image 1.svg" alt="" />
                        </div>
                    </div>
                    <div className="content-live">
                        <div className="noticia1">
                            <h4>Organizaremos um evento especial no próximo fim de semana.</h4>
                            <h4>É só clicar e aproveitar!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </FeedStyled>
  );
}
