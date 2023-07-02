import {
    FooterStyled
} from './style.jsx';

import LogoBuki from "../../../assets/img/bukiBranco.png";

import IconInstagram from "../../../assets/img/iconinstagram.svg";
import IconLinkedin  from "../../../assets/img/iconlinkedin.svg";
import IconLinktree from "../../../assets/img/iconlinktree.svg";


export default function Footer() {
    return (
        <FooterStyled>
            <div className= 'footerDiv'>

                <div className= 'divEsquerda'>
                    <div>
                        <img src={LogoBuki} />
                    </div>

                    <div className= 'areaTexto'>
                        <p>O lugar perfeito para  expandir horizontes, <br /> conectar-se com pessoas incríveis e aperfeiçoar <br /> sua arte para o mundo!</p>

                        <div className= 'divInput'>
                            <input type="text" id='seuemail' name='seuemail' placeholder='Seu e-mail' />
                            <button>Enviar</button>
                        </div>
                    </div>

                </div>

                <div className= 'gridInformacoes'>
                    <div>
                        <h5>Plataforma</h5>
                        <ul>
                            <li>Home</li>
                            <li>Quem somos</li>
                            <li>Parceiros</li>
                        </ul>
                    </div>

                    <div>
                        <h5>Ajuda</h5>
                        <ul>
                            <li>Como funciona?</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h5>Onde estamos</h5>
                        <ul>
                            <li>Rua tito, 54</li>
                            <li>Lapa, São Paulo</li>
                            <li>Brasil</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className= 'footerDireitos'>
                <div>
                    <p><span>&copy;</span> BUKI 2023. Todos os direitos reservados.</p>
                </div>

                <div className= 'icons'>
                    <img src= {IconInstagram} />
                    <img src= {IconLinkedin} />
                    <img src= {IconLinktree} />
                </div>
            </div>
        </FooterStyled >
    )
}