import React, { ReactNode,useEffect,useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme, DefaultTheme } from 'styled-components';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledHeroSection = styled.section<{theme: DefaultTheme}>`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  text-align: center;
   


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

  .overlay-wrapper {
    display: flex;
    align-items: center;
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


const Hero: React.FC = () => {
  
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);
  const theme = useTheme();

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
 

  const renderBelowTablet = (
    <>
    <Image src='/hero.jpg'  quality={85} fill alt='hero-image' sizes="100vw" style={{zIndex:'-1', objectFit:'cover', position:'absolute',filter:'brightness(0.4)'}}/>
    <div className='wrapper'>
      <TransitionGroup component={null}>
          {isMounted && items.map((item,i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}35ms` }}>{item}</div>
            </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
    </>
  );

  return (
    <StyledHeroSection>
      <div className='overlay-wrapper'>
        <div className='intro-wrapper'>
          <div className='intro-body'>
            {theme.bp.tabletS ? renderBelowTablet : ''}
          </div>
        </div>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
