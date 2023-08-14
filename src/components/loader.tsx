import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@icons';


interface StyledLoaderProps {
    isMounted: boolean;
  }

const StyledLoader = styled.div<StyledLoaderProps>`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-mauve);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
  }
`;

interface LoaderProps {
    finishLoading: () => void;
}

const Loader = ({ finishLoading } : LoaderProps ) => {
    const [isMounted, setIsMounted] = useState(false);
  
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
       
      });
     
      loader
        .add({
          targets: '.loader',
          duration: 2000,
          easing: 'easeInOutQuart',
          opacity: 0,
          zIndex: -1,
        });
    };
   
    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 30);
      animate();
      return () => clearTimeout(timeout);
    },);
  
    return (
      <StyledLoader className="loader" isMounted={isMounted}>       
        <div className="logo-wrapper">
          <IconLoader />
        </div>
      </StyledLoader>
    );
  };
  
  
  
  export default Loader;
  