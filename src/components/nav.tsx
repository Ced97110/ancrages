import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { navLinks } from '../utility/config';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@components';

interface StyledHeaderProps {
  scrollDirection: string;
  scrolledToTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(152, 33, 118, 0.75);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(152, 33, 118, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;




const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;

      .logo-container {
        position: relative;
        z-index: 1;
        @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          margin-right: 5px;
          color: var(--navy);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

`;

interface NavProps {
  isHome: boolean;

}




const Nav = ({ isHome } : NavProps) => {
  const [isMounted, setIsMounted] = useState(!isHome);
 
  const scrollDirection = useScrollDirection({
    initialDirection: 'down',
    thresholdPixels: 5,
    off: false,
  });
  
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  },);


  const timeout: number = isHome ? 2000 : 0;
  const fadeClass: string = isHome ? 'fade' : '';
  const fadeDownClass: string = isHome ? 'fadedown' : '';

  const Logo = (
    <div className="logo">
      {isHome ? (
        <Link href="/" aria-label="home">
          <div className="logo-container">
            <Image src='/logo.png' quality={80} width={70} height={70}  priority={true} sizes="(max-width: 480px) 40px" alt='logo-home' />
          </div>
        </Link>
      ) : (
        <Link href="/" aria-label="home">
          <div className="logo-container">
             <Image src='/logo.png'  width={70} height={70}  alt='logo-home' />
          </div>
        </Link>
      )}
    </div>
  );




  return (
      <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <StyledNav>
          {prefersReducedMotion ? (
            <>
              {Logo}

              <StyledLinks>
                <ol> 
                  {navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <li key={i}>
                        <Link href={url}>{name}</Link>
                      </li>
                    ))}
                </ol>
              </StyledLinks>
              <Menu />
            </>
          ) : (
            <>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <>{Logo}</>
                  </CSSTransition>
                )}
              </TransitionGroup>

              <StyledLinks>
                <ol>
                  <TransitionGroup component={null}>
                    {isMounted &&
                      navLinks &&
                      navLinks.map(({ url, name }, i) => (
                        <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                          <li key={i} style={{ transitionDelay: `${isHome ? i * 150 : 0}ms` }}>
                            <Link href={url}>{name}</Link>
                          </li>
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </ol>
              </StyledLinks>

              <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
            </>
          )}
        </StyledNav>
    </StyledHeader>
  )
};


export default Nav;
