import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import { usePrefersReducedMotion } from '@hooks';
import Image from 'next/image';
import { navLinks } from '@config';
import Link from 'next/link';
import { socialMedia } from '@config';
import { Icon } from '@icons';

const StyledFooter = styled.footer`
  width:100%;
  margin: 0 20px;
  text-align: center;
  height: auto;
  padding : 20px;

   
  @media (max-width: 768px) {
    margin: 0 auto 50px;
    
  }
   
  .inner {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  
  ul.nav-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
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


  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .logo {
    ${({ theme }) => theme.mixins.flexStart};

      @media (max-width: 768px) {
      margin: 0 20px;
      }


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

const StyledSocialLinks = styled.div`
 

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 10px auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;




const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

  }, [prefersReducedMotion]);

    const socialMedia = [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/murielle-manchau-80388845/',
        }
      ]


  return (
    <StyledFooter id="contact" ref={revealContainer}>
      <div className='inner'>
        <div className='logo'>
              <div className="logo-container">
                  <Image src='/logo.png' quality={90} width={140} height={140}  alt='logo-home' />
              </div>
          </div>
          <ul className="nav-list">
            {navLinks && navLinks.map(({name, url}, i) => (
              <li key={i}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
          <StyledSocialLinks>
            <ul>
              {socialMedia &&
                socialMedia.map(({ name, url }, i) => (
                  <li key={i}>
                    <a href={url} aria-label={name}>
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
            </ul>
         </StyledSocialLinks>

      </div>
    </StyledFooter>
  );
};

export default Contact;
