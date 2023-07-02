import styles from "./Informacoes.module.css";
import Pessoas1 from "../../../assets/img/pessoas1.png";
import Pessoas2 from "../../../assets/img/pessoas2.png";

export default function Informacoes() {
  return (
    <section>
      <div className= {styles.divInformacoes}>
        <img src={Pessoas1} className= { styles.pessoas1 }/>
        <h2 className= {styles.texto}>
        Pra você que é: Autor <br /> Capista <br /> Marketeiro <br /> Designer <br /> Editor <br /> Redator
        </h2>
      </div>

      <div className= {styles.divInformacoes}>
        <h2 className={styles.texto2}>
          A BUKI foi feita para todos os profissionais que trazem <br /> uma história à vida.
        </h2> 
              <img src={Pessoas2} className= { styles.pessoas2 } />
      </div>
    </section>
  );
}
