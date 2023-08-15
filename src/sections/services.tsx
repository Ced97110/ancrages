import React, { ReactNode,useEffect,useState } from 'react';
import {styled} from 'styled-components';


const ServicesSection = styled.section`
  height: auto;
  background: transparent !important;
  min-width: 100%;
  margin:0;
  padding:0;
  position: relative;
  overflow: hidden;
  
 
  a {
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 2px;
      border-width: 0 0 .5px;
      border-style: solid;
      border-color: #cbcbcb;
    }
  }

  .overlay-wrapper {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61));
        width: 100%;
        height: 100%;
        padding: 100px;

        @media (max-width: ${props => props.theme.bp.tabletS}) {
          padding: 100px 50px;
    }
  }
  
  
  .overlay-wrapper,
  .section-wrapper {
    padding: 100px;
    @media (max-width: 900px) {
      padding: 100px 50px;
    } 
    @media (max-width: 400px) {
      padding: 100px 25px;
    } 

    
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.3em;
      line-height: 1.5em;
      @include MQ(SM) {
        font-size: 1em;
      }
    }
    .divider {
      display: block;
      margin: 30px 0px;
      width: 100px;
      height: 2px;
      background-color: $blue;
    }
    .center {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
  }
  .overlay-wrapper {
    background: linear-gradient(to bottom, rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity));
    width: 100%;
    height: 100%;
  }


  .services-wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 0;
    }
    
  }

  .service-row {
    width: 100%;
    height: 50%;

    @media (max-width: 768px) {
      height: auto;
    }

    &:nth-of-type(odd) {
      border-bottom: 1px solid ;

      @media (max-width: ${props => props.theme.tabletL}) {
        border: none;
      }
    }

    &:nth-of-type(even) {
      .service-column {
        padding-top: 40px;

        @media (max-width: ${props => props.theme.bp.tabletL}) {
          padding-top: 20px;
        }
      }
    }

    
     
    .service-column {
      display: inline-block;
      vertical-align: top;
      width: 49%;
      height: 100%;
      padding: 20px;
      overflow: hidden;
      white-space: nowrap;

      @media (max-width: 768px) {
        display: block;
        width: 100%;
        border: none;
      }

      @media (max-width: ${props => props.theme.bp.tabletS}) {
        padding: 20px 0;
      }

      &:nth-of-type(even) {
        border-left: 1px solid rgba(242,242,242,0.3);;

        @media (max-width: 768px) {
          border: none;
        }
      }

      .service-img {
        width: 40px;
        margin-right: 15px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -5px;
      }

      .sprite {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        top: -3px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;

        @media (max-width: ${props => props.theme.bp.mobileM}) {
          width: 35px;
          height: 35px;
        }

        &.webdev {
          background-image: url('../icons/html.png');
        }

        &.ui {
          background-image: url('../icons/pencil.png');
          background-size: 90%;
        }

        &.xd {
          background-image: url('../icons/ux-design.png');
        }

        &.wit {
          background-image: url('../icons/internet.png');
          background-size: 90%;
        }
      }


      
  
    
  
      .service-heading {
        text-transform: uppercase;
        margin: 0 0 30px;
        font-size: 20px;
        display: inline-block;

        @media (min-width: ${props => props.theme.bp.tabletL}) {
          font-size: 2vw;
        }

        @media (max-width: ${props => props.theme.bp.tabletS}) {
          font-size: 4vw;
        }

        @media (max-width: ${props => props.theme.bp.mobileL}) {
          font-size: 16px;
        }
      }

      .service-text {
        font-size: 1.1em;
        margin-bottom: 20px;
        white-space: initial;
      }
    }
  }
`;


const StyledBackground = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  object-fit: cover; // Remove the single quotes
  left: 0;
  background-image: url('../root.jpg');
  
`;




const Services = () => {

  const data = [
    {
      row: 'row1',
      services: [
        {
          heading: 'Web Development',
          sprite: 'webdev',
          text: 'rkkkkkkiiiuuyytreesdfghjklppoiuytrewqascvnmkjhfsdfhiyty.',
        },
        {
          heading: 'Responsive UI Design',
          sprite: 'ui',
          text: 'plement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.',
        },
      ],
    },
    {
      row: 'row2',
      services: [
        {
          heading: 'Experience Design',
          sprite: 'xd',
          text: 'ffffjdfdddggggggjyjyttirurururruryryrttrtrgdgdfdfscsscscadadwewewreretyywuwwrgggggg.',
        },
        {
          heading: 'Diversity in Tech',
          sprite: 'wit',
          text: 'helookkvjvjvjvjvvnfhyygdddtehshjjdddd.',
        },
      ],
    },
  ];

    return (
        <ServicesSection id='services'>
            <StyledBackground/>
            <div className="overlay-wrapper">
              <div className="fade-in">
               <h1>Pourquoi Nous Choisir ?</h1>
               <span className="divider"></span>
               <div className="services-wrapper">
               {data.map((row, rowIndex) => (
                <div className="service-row" key={rowIndex}>
                {row.services.map((service, serviceIndex) => (
                  <div className="service-column" key={serviceIndex}>
                   <div className={`sprite ${service.sprite}`}></div>
                   <h2 className="service-heading">{service.heading}</h2>
                   <p className="service-text" dangerouslySetInnerHTML={{ __html: service.text }}></p>
                  </div>
                ))}
             </div>
             ))}
        </div>
      </div>
    </div>
   </ServicesSection>
    )
}

export default Services;
