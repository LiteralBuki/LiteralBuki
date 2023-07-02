// import React from "react";
import ComoArtista from "../../components/Landing/ComoArtista/ComoArtista.jsx";
import FazerAntesMorrer from "../../components/Landing/FazerAntesMorrer/FazerAntesMorrer.jsx";
import Header from "../../components/Landing/Header/Header.jsx";
import Informacoes from "../../components/Landing/Informacoes/Informacoes.jsx";
import Vantagens from "../../components/Landing/Vantagens/Vantagens.jsx";
import QueroCadastrar from "../../components/Landing/QueroCadastrar/QueroCadastrar.jsx";
import SobreNos from "../../components/Landing/SobreNos/SobreNos.jsx";
import Footer from "../../components/Landing/Footer/Footer.jsx";

export default function Landing() {
  return (
    <>      
      <Header />
      <ComoArtista />
      <FazerAntesMorrer />
      <Informacoes />
      <Vantagens />
      <QueroCadastrar />
      <SobreNos />
      <Footer />
    </>
  );
}

