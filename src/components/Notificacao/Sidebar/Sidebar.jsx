import Sidebar from './style.jsx';


function App() {

  
  return (
    <Sidebar>
      <div className="sidebar">
        <div className="menuLateral">
          <header>
            <img src="/src/assets/img/Notificacoes/WhatsApp Image 2023-06-10 at 22.57.43.jpeg" alt="" />
          </header>

          <nav>
            <button>
              <span>
              <i className="fa-solid fa-user"></i>
               <span>Meu Perfil</span>
              </span>
            </button>

            <button>
                <span>
                <i className="fa-solid fa-home"></i>
                <span>Feed</span>
                </span>
            </button>

            <button>
                <span>
                <i className="fa-solid fa-comment"></i>
                    <span>Chat</span>
                </span>
            </button>

            <button className="abaEscolhida">
                <span>
                <i className="fa-solid fa-bell"></i>
                    <span>Notificações</span>
                </span>
            </button>

            <button>
                <span>
                <i className="fa-solid fa-lightbulb"></i>
                    <span>Meu Projeto</span>
                </span>
            </button>
        </nav>

        <div className="final">
            <ul>
                <li><a href="#"><i className="fa-sharp fa-solid fa-gear"></i><h4>Configurações</h4></a></li>
                <li><a href="#"><i className="fa-sharp fa-solid fa-circle-question"></i><h4>Ajuda</h4></a></li>
                <li><a href="#"><i className="fa-solid fa-right-from-bracket"></i><h4>Sair</h4></a></li>
            </ul>
        </div>

        </div>
      </div>
    </Sidebar>
  );
}

export default App;
