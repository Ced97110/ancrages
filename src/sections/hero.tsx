import React, { ReactNode,useEffect,useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme, DefaultTheme } from 'styled-components';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const StyledHeroSection = styled.section<{theme: DefaultTheme}>`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  text-align: center;
  
  .overlay-wrapper{
    padding-top: 200px;
  }
 

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }


  h1 {
    margin: 0 0 30px 4px;
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
   

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }


  .scroll-down-wrapper {
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        color: white;

       .scroll-down {
          display: block;
          width: 70px;
          margin: 0 auto;
          transition: all 0.3s ease;

          &:hover, &:focus {
            transition: all 0.3s ease;
             .logo {
              opacity: 0;
            }
            .scroll-down-text {
              opacity: 1;
              visibility: visible;
            }
            
          }
          .logo {
            width: 35px;
            transition: opacity 0.5s ease, visibility 0.5s;
          }
          .scroll-down-text {
            color: white;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            height: 100%;
            opacity: 0;
            padding-top: 0.5em;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            transition: opacity 0.5s ease, visibility 0.5s;
            visibility: hidden;
            width: 100%;
            .chevron {
              transform: rotate(90deg);
              height: 20px;
              display: block;
              margin: 10px auto;
            }
          }
        }
      } 

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

`;


const Hero = () => {
  
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLElement>(null);
  const theme = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();


  useEffect(() => {
    const navDelay = 1000;
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

   const one = <h1 className='big-heading'>Cabinet Conseil RH</h1>
   const two = <h4 className="big-heading">Optimizer la performance de votre entreprise grace a notre expertise RH.</h4>;
   const three = (
    <a
      className="email-link"
      href="/contact"
      target="_blank"
      rel="noreferrer">
       Contacter-nous
    </a>
  );

   const items = [one, two, three];

   const loaderDelay: number = 2000
 


  return (
    <StyledHeroSection id='hero'>
      <div className='bg' >
        <div className='overlay-wrapper'>
          {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}30ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
         <div className="scroll-down-wrapper">
           <a title="About section" className="scroll-down">
              <span className="scroll-down-text">
                En Savoir plus
                <svg className="chevron" viewBox="0 0 57.942 105.958" enable-background="new 0 0 11.893 6.503">
                  <line fill="none" stroke="#fff" stroke-width="7" stroke-miterlimit="10" x1="2.475" y1="2.475" x2="55.467" y2="55.466" />
                  <line fill="none" stroke="#fff" stroke-width="7" stroke-miterlimit="10" x1="55.467" y1="50.492" x2="2.475" y2="103.484" />
                </svg>
              </span>
           </a>
        </div>
     </div>
    </div>
  </StyledHeroSection>
  );
};

export default Hero;
