
import "./Publicacao.css";

export default function PublicacaoFeed(props) {
    return ( 
        <>
            <div className= "conteudo-artigo">
                <div className= "header-artigo">
                    
                    <div className= "perfil-nome">
                        
                        <div className= "perfil-artigo">
                            <img src= {props.fotoPerfil} />
                        </div> 
                        
                        <div className= "nome-artigo">
                            <p>{props.usuario}</p>
                        </div>
                        
                    </div>
                    
                    <div className= "botao-artigo">
                        <button>Conectar</button>
                    </div>
                    
                </div>
                
                        <div className= "imagem-artigo">
                            <img src={props.imagemPubli} />
                        </div>
                        <div className= "footer-artigo">
                            <div className= "interacoes">
                            <i className ="fa-solid fa-heart"></i>
                                <i className ="fa-sharp fa-regular fa-comment"></i>
                                <i className ="fa-solid fa-book-open"></i>
                            </div>
                            <div className= "descricao">
                                <h3>{props.usuario}</h3>
                                <p>{props.texto}</p>
                            </div>
                            <div className= "comentarios">
                                <input type="text" placeholder="Escrever comentario..." />
                            </div>
                        </div>
            </div>
        </>
     );
}
