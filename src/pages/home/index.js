import React from 'react';
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../componentes/BannerMain'
import Carousel from '../../componentes/Carousel'
import Footer from '../../componentes/Footer'

function home() {
  return (
    <div  style={{backgroundColor: "#141414"}}>
      <Menu />

      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      {
        dadosIniciais.categorias.map((categoria, index) => {
          return <Carousel 
            key={index}
            category={categoria}
          />
        })
      }

      <Footer/>
      
    </div> 
  );
}

export default home;
