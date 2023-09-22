import logo from './logo.svg';
import './App.css';
import './components/Head.scss';

import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  const[compteur,setCompteur]= useState(1);
  const handleClick =()=>{
    // alert("ca marche ");
    setCompteur(compteur + 1);
  }
  return (
    <div className="App">
      <div class="header header-home">
        <img src="https://simplon.co/uploads/Site%20national/Home-site-national/Ecole-formation-gratuite-Simplon-Apprenants-Artis%20.jpg" class="header-home-bg loading" data-was-processed="true"/>
        <div class="header-home-subtitle">
          <div class="container">
            <h1 class="header-home-titles">Simplon.co en Occitanie</h1>
            <p>Rejoignez&nbsp;Simplon.co&nbsp;Occitanie, pour vous former aux métiers du numérique, Intelligence Artificielle, Administrateur Administratrice Cloud, Concepteur Conceptrice Développeur, Développeuse d'Applications&nbsp;DevOps&nbsp;, Technicien Technicienne Supérieur.e Système et Réseaux. Nos formations sont gratuites, inclusives et accessibles à tous. Diplômantes, certifiantes&nbsp;et sans-prérequis,&nbsp;nos&nbsp;formations numériques sont en présentiel ou en distanciel en fonction du parcours.</p>
            <a href="https://share.hsforms.com/1QGf7Re67QA2VGITdD5oCOQ52unr?utm_medium=email&amp;_hsmi=205701520&amp;_hsenc=p2ANqtz-9_x4NjNapqsM5hs1JD6NDk6OBZLP9MyhLArk-HOrLehzqDWEL-fY5waaqeOMMnXHjVidluY-3QY3KvDnnXS1HbjkItZA&amp;utm_content=205701520&amp;utm_source=hs_email" target="_blank" class="header-home-btn btn btn-light">
              <span data-highlightable="1" class="header-home-btn-text">En savoir plus sur nos fORMATIONS</span>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
