import styles from "./FazerAntesMorrer.module.css";
import ImagemSection from "../../ImagemSection/ImagemSection.jsx";
import VetorArvore from "../../../assets/img/vetorarvore.svg";
import VetorBebe from "../../../assets/img/vetorbebe.svg";
import VetorPublicar from "../../../assets/img/vetorpublicar.svg";

import { Link } from "react-router-dom"; 

function FazerAntesMorrer() {
  return (
    <section className= {styles.conhecaBuki}>
      <div className= {styles.conhecaBukiGrid}>
        <h2>Segundo o ditado<br />popular, <br />há três coisas para fazer antes de morrer:</h2>
          <div className= {styles.imgGrid}>
            <ImagemSection foto={ VetorArvore } alt="emoji de uma árvore." texto="Plantar uma árvore"/>
          <ImagemSection foto={VetorBebe} alt="emoji de um bebê." texto="Ter um bebê" />
          <Link to="/cadastro">
            <ImagemSection foto={ VetorPublicar } alt="emoji de um livro." texto="Publicar um livro"/>
            </Link>
          </div>
      </div>
    </section>
  );
}

export default FazerAntesMorrer;
