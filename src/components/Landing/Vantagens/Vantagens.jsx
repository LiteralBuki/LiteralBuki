import styles from "./Vantagens.module.css";
import VantagensComponent from "../../VantagensComponent/VantagensComponent.jsx";
import PassosSvg from "../../../assets/img/passossvg.svg";
import TempoSvg from "../../../assets/img/temposvg.svg";
import EspecialistasSVG from "../../../assets/img/especialistassvg.svg";

export default function Valores() {
  return (
    <section className= {styles.vantagensSection}>
      <h3 className= {styles.tituloVantagens}>Confira as vantagens: </h3>
      <div className={styles.vantagensDiv}>
        <VantagensComponent
          largura="30rem"
          altura="35rem"
          img={PassosSvg}
          titulo="O primeiro passo para sua 
          independência"
          texto="encurte seu caminho para o sucesso e receba o retorno que merece."
        />
        <VantagensComponent
          largura="35rem"
          altura="38rem"
          img={TempoSvg}
          titulo="Menos tempo da ideia à execução"
          texto="do esboço até a versão final, todos os passos numa única plataforma."
        />
        <VantagensComponent
          largura="30rem"
          altura="35rem"
          img={EspecialistasSVG}
          titulo="Especialistas"
          texto="a um toque de distância.
          os melhores de cada segmento."
        />
      </div>
    </section>
  );
}
