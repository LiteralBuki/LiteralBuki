import style from './NotificacaoContent.module.css';

export default function NotificacaoContent(props) {
  return (
      <div className= {style.conteiner}>
          <img src={props.img} className= {style.imagem} />
          
          <div className= {style.conteudo}>
        <div className= {style.areaPrincipal}>
              <h2 className= {style.titulo}>{props.titulo}</h2>
              <p className= {style.acao}>{props.acao}</p>
        </div>

        <div className= {style.areaSecundaria}>                   
          <p className= {style.texto}>{props.texto} <span className= {style.verMais}>...ver mais</span></p>
              </div>   

          <p className= {style.tempo}>{props.tempo}</p>
              
              </div>      
    </div>
  );
}
