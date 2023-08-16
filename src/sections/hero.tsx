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
         
     </div>
    </div>
  </StyledHeroSection>
  );
};

export default Hero;
