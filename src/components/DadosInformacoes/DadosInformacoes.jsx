/* eslint-disable react/prop-types */
import styles from "./DadosInformacoes.module.css";

function DadosInformacoes(props) {
  return (
    <div className= {styles.seguraPostagem}>
      <div className= {styles.areaImagem}>
        <img className= {styles.iconImagem} src={props.imagem} />
      </div>
      <div className= {styles.postagem}>
      <h3 className= {styles.titulo}>{props.titulo}</h3>
        <p className= {styles.paragrafo}>
          <span className={styles.paragrafoForte}>{props.paragrafoForte}</span> <br/>{props.paragrafo}
        </p>
      </div>
    </div>
  );
}

export default DadosInformacoes;
