import {
  SobreNosStyled,
  SobreNosDivStyled,
  EquipeBukiStyled,
  SobreNosTextStyled,
  AreaFotoStyled,
  ApoioStyled,
} from "./style.jsx";

import equipeBuki from "../../../assets/img/equipeBuki.png";
import ApoioProa from "../../../assets/img/apoioproa.png";
import ApoioSenac from "../../../assets/img/apoiosenac.png";
import ApoioSiseb from "../../../assets/img/apoiosiseb.png";


export default function SobreNos() {
  return (
    <SobreNosStyled>
      <SobreNosDivStyled>
        <h2>Quem são as personagens por trás da BUKI?</h2>
        <SobreNosTextStyled>
          <p>
            {" "}
            <span>
              A BUKI foi escrita a partir da colaboração de oito jovens
              fascinados por tecnologia e leitura.
              <br />
              Alunos do Instituto PROA,
            </span>{" "}
            viram em suas mãos a oportunidade de devolver a comunidade todo o
            incentivo que receberam. Daí, surgiu a ideia de uma plataforma
            pioneira no Brasil, feita especialmente para que autores pudessem se
            conectar com profissionais da área criativa que levarão sua arte a
            outro patamar. De uma forma dinâmica e com total controle de suas
            obras, ao inseri-los no mercado editorial para torna-los
            profissionais muito mais completos e atrativos, com bagagem e
            experiência de negócio, ao proporcionar independência e poder de
            escolha.
          </p>

          <AreaFotoStyled>
            <EquipeBukiStyled src={equipeBuki} />
            <p>
              Da esquerda para a direita: Matheus, Amanda, Isaque, Leonardo,
              Guilherme, Raquel. <br /> Embaixo: Arthur e Lucas.
            </p>
          </AreaFotoStyled>
        </SobreNosTextStyled>
      </SobreNosDivStyled>

          <ApoioStyled>
              <h3>APOIO:</h3>

              <div>
                  
                    <div>
                      <img src={ApoioProa} />
                  </div>

                  <div>
                      <img src={ApoioSenac} />
                  </div>
                  
                  <div>
                      <img src={ApoioSiseb} />
                  </div>    

                  <div>
                    <h4>Biblioteca Mário Shenberg</h4>
                  </div>

              </div>
      </ApoioStyled>
    </SobreNosStyled>
  );
}
