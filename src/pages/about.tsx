import React from 'react'
import { styled } from 'styled-components';
import Image from 'next/image';

const StyledAbout = styled.section`
  

  .section-subheading {
    width: 60%;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 1em;
    @media (max-width: 768px) {
      width: 100%;
    }
  }


  ul.nav-list {
    display: block;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 15px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }


  .about-wrapper {
    padding-right: 20px;
    @media (max-width: 900px) {
      padding: 0;
    }
    .about-text-wrapper {
      display: inline-block;
      width: 60%;
      vertical-align: top;
      @media (max-width: 900px) {
        width: 100%;
      }
      .about-text {
        margin-bottom: 10px;
        font-size: 1.15em;
      }
    }
    .headshot {
      width: 35%;
      height: auto;
      float: right;
      border-radius: 50%;
      margin-top: -100px;
      max-width: 300px;
      @media (max-width: 1000px) {
        margin-top: 0px;
      }

      @media (max-width: 900px) {
        float:none;
        margin: 10px 0 40px 0;
        width: 300px;
      }
      @media (max-width: 400px) {
        width: 250px;
      }
    }
  }
`;


 const About = () => {

  const teamMembers = [
    {
      name: "Murielle MANCHAU",
      role: "Fondatrice du cabinet RH ANCRAGES",
      education: "Diplômée en droit social",
      experience: [
        "A occupé pendant 20 ans un poste de DRH/RRH dans des groupes établis aux Antilles-Guyane.",
        
      ],
      recentExperience: [
        "Groupe LCL de juillet 2012 à mai 2021",
        "DRH lors de l’intégration de la banque BFC à LCL sa maison-mère:",
        "Préparation, organisation des travaux RH d'intégration",
        "Négociation sociale, PDV, reclassements, réorganisation des fonctions support...",
        "Accompagnement du changement, accompagnement des managers...",
      ],
    },
  ];
  


  return (
    <StyledAbout>
      <div className="section-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Murielle Manchau</h1>
          <h3 className="section-subheading">Fondatrice du cabinet RH Ancrages.</h3>
          <span className="divider"></span>
          <div className="about-wrapper">
            <Image
                src="/murielle.jpg"
                alt="Headshot"
                priority={false}
                className="headshot"
                width={320}
                height={320} // Adjust the height as needed
              />
            <div className="about-text-wrapper">
             <h5>Education :</h5>
             <ul className='fancy-list' >
               <li><p>Diplômée en droit social</p></li>
             </ul>
             <h5>Experience :</h5>
             <ul className='fancy-list'>
               <li><p>Forte d&rsquo;une expérience de plus de 20 ans de responsable des ressources humaines dans de grands groupes établis sur les Antilles-Guyane (Groupe HUYGHUES- DESPOINTES, Groupe SISB (Match, Cora),Groupe HO HIO HEN, Banque LCL (Le Crédit Lyonnais)</p></li>
             </ul>
             <h5>Quelques éléments de son expérience récente :</h5>
             <ul className='fancy-list'>
              <li><p>Groupe LCL de juillet 2012 à mai 2021.</p></li>
              <li><p>Préparation, organisation des travaux RH d&rsquo;intégration</p></li>
              <li><p>Négociation sociale, PDV, reclassements, réorganisation des fonctions support...</p></li>
              <li><p>Accompagnement du changement, accompagnement des managers...</p></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
</StyledAbout>

  
  )
}

export default About;