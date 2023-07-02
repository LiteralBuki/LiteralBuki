import styles from "./ComoArtista.module.css";
import PngComoArtista from "../../../assets/img/pngcomoartista.png";
import VetorLivro1 from "../../../assets/img/vetorlivro1.svg";
import VetorLivro2 from "../../../assets/img/vetorlivro2.svg";
import VetorLivro3 from "../../../assets/img/vetorlivro3.svg";

import { Link } from "react-router-dom";

function ComoArtista() {
  return (
    <>
      <section className={styles.comoArtista}>
        <div className={styles.areaComoArtista}>
          <div className={styles.divComoArtista}>
            <div className={styles.areaTexto}>
              <h2>Artista,</h2>
              <p>
                paixão, criatividade e imaginação te inspiram. A{" "}
                <span>Buki é motivada</span> pelo desejo de{" "}
                <span>abrir o seu caminho até o sucesso</span>
                <br /> e te oferecer <span>independência e poder</span> de
                decisão.
              </p>

              <div className={styles.areaBotao}>
                <Link to="/cadastro">
                  <button type="button">Faça parte!</button>
                </Link>
              </div>
            </div>
            <div className={styles.comoArtistaDivImg}>
              <img src={PngComoArtista} className= {styles.imagemPng} alt="" />
            </div>
            <div className= {styles.vetorLivro1}>
              <img src={VetorLivro1} alt="" />
            </div>

            <div className= {styles.vetorLivro2}>
              <img src={VetorLivro2} alt="" />
            </div>

            <div className= {styles.vetorLivro3}>
              <img src={VetorLivro3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComoArtista;
