import "./Postagem.css";

function PostagemLateral(props) {
    return ( 
        <div className= "postagem">
            <h2>{props.titulo}</h2>
            <img src= {props.imagem} className= "imagem"/>
            <p>{props.texto}</p>
        </div>
     );
}

export default PostagemLateral;