import React from 'react'
import { styled } from 'styled-components';
import Image from 'next/image';



const StyledOfferSection = styled.section`
     
  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
      height: auto;
      padding-top: var(--nav-height);
    }

   .experience-description {
    padding: 0 100px;
    font-size: 1.2em;
    @media only screen and (max-width:1170px) {
      padding: 0;
    }
    a {
      display: inline-block;
      position: relative;
      font-weight: 500;
      transition: all 0.3s ease;
      &:after {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 2px;
        border-width: 0 0 .5px;
        border-style: solid;
        border-color: $white;
        transition: all 0.3s ease;
      }
    }
  }
  .experience-wrapper {
    padding: 30px;
    @include MQ(ML) {
      padding-left: 0;
    }
    @include MQ(S600) {
      padding: 30px 0;
    }
    #timeline {
      position: relative;
      padding: 2em 0;
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      align-items: center;
  
    }
  }
`;



const StyledOffer = styled.ul`
  padding: 30px;
`;



const StyledOfferBlock = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
 

   

  &:not(:last-of-type) {
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
      &:before {
        top: 24px;
        left: 100%;
        border-color: transparent;
        border-left-color: var(--navy);
        @include MQ(ML) {
          top: 16px;
          left: auto;
          border-color: transparent;
          border-right-color: $dark-grey;
         }
       }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 6;
    background: #1b1b1b;
    border-radius: var(--border-radius);
    margin-left: 0;
    padding: 1.5em;
    opacity: 0.75;
    transition: all 0.3s ease;
     
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    &:hover, &:focus {
      opacity: 1;
    }

    &:hover + .project-image .timeline-img,
    &:focus + .project-image .timeline-img {
        background: purple;
    }
  }



  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
  }

  .timeline-img {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 15px;
          left: 50%;
          margin-left: -25px;
          border-radius: 50%;
          background: #212121;
          transform: translateZ(0);
          backface-visibility: hidden;
          transition: all 0.3s ease;
          @include MQ(ML) {
            top: 5px;
            left: 20px;
          }
          @include MQ(SM) {
            width: 40px;
            height: 40px;
            top: 10px;
            left: 15px;
          }
          .sprite {
            display: block;
            width: 24px;
            height: 24px;
            position: relative;
            left: 50%;
            top: 50%;
            margin-left: -12px;
            margin-top: -12px;
            background-repeat: no-repeat;
            background-size: 100%;
            @include MQ(SM) {
              width: 20px;
              height: 20px;
              margin-left: -10px;
              margin-top: -10px;
            }
            &.settings {
              background-image: url('./icons/settings.png');
            }
            &.research {
              background-image: url('./icons/search.png');
            }
            &.industry {
              background-image: url('./icons/briefcase.png');
            }
            &.academic {
              background-image: url('./icons/notebook.png');
            }
          }
        }

`;








const StyledBackground = styled.div`
    min-height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    overflow: hidden;


   
  
  @media ${props => props.theme.bp.desktopS} {
    background-image: url('./experience-lg.jpg');
  }
  @media ${props => props.theme.bp.tabletL} { 
    background-image: url('./experience-md.jpg');
  }
  @media ${props => props.theme.bp.tabletS} {
    background-image: url('./experience-sm.jpg');
  }
  @media ${props => props.theme.bp.mobileL} {
    background-image: url('./experience-xs.jpg');
  }
`;




export const Offres = () => {

    const kitsData = [
        {
          title: "Kit 'Politique RH'",
          topics: [
            "La politique de rémunération, de la performance...",
            "Le bien-être au travail, la QVT",
            "La gestion des compétences et des emplois",
            "La gestion des talents et de gestion des carrières"
          ],
          sprite: 'settings'
        },
        {
          title: "Kit 'Communication RH'",
          topics: [
            "Marque employeur",
            "Plan de communication RH"
          ],
          sprite: 'industry'
        },
        {
          title: "Kit 'Accompagnement prise de poste RH' (RRH, RRS, GRH)",
          topics: [
            "Élaboration feuille de route et de plan d'action",
            "Mise en place des ajustements d'organisation"
          ],
          sprite: 'research'
        },
        {
          title: "Kit administration RH",
          topics: [
            "Accompagnement spécifique sur des problématiques internes de mise à jour de process, de réglementation ..."
          ],
          sprite: 'academic'
        }
      ];
      

      
  return (
    <StyledOfferSection>
     
      
         <div className="overlay-wrapper">
           <div className='center'>
              <h1 className="section-heading">Nos Offres RH</h1>
              <span className="divider center"></span>
              <p className="experience-description">Notre expérience de manager de collaborateurs RH notamment dans des périodes de transition, nous permet de proposer un accompagnement sur mesure aux équipes RH. Nous proposons ainsi des kits dans les domaines suivants:</p>
           </div>
           <StyledOffer>
            {kitsData.map((item,i) => (
             <StyledOfferBlock key={i}>

               <div className='project-content'>
                 <h3 className="position">{item.title}</h3>
                   <ul className='fancy-list'>
                    {item.topics.map((subitem, subkey) => (
                      <li key={subkey} >{subitem}</li>
                    ))}
                   </ul>
               </div>

               <div className='project-image'>
                  <div className='timeline-img' >
                      <div className={`sprite ${item.sprite}`}></div>
                  </div>
               </div>

               
               


          </StyledOfferBlock>

            ))}
           </StyledOffer>
         </div>
    </StyledOfferSection>
  )
}


export default Offres;