import { createGlobalStyle, DefaultTheme } from 'styled-components';
import variables from './variables';
import TransitionStyles from './TransitionStyles';



const GlobalStyle = createGlobalStyle`
  ${variables};
 

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }


  /* styles.css (or styles.scss) */

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--yellow);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--yellow);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--yellow);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--yellow);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-mauve);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  
  .overlay-wrapper {
    background: linear-gradient(to bottom, rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity), rgba(0, 0, 0, $overlayOpacity));
    width: 100%;
    height: 100%;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    margin: 0 auto;
    
   

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }


  section {
    width: 100%;
    height: auto;
    min-height: 700px;
    overflow: hidden;
    padding:0;
    position: relative;
    
   

    .overlay-wrapper,
    .section-wrapper {
      padding: 100px;
      
      @media only screen and (max-width:900px) {
        padding:100px 50px
      }
    
  
  
    .divider {
      display: block;
      margin: 30px 0px;
      width: 100px;
      height: 2px;
      background-color: var(--yellow);
    }
    .center {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
    .overlay-wrapper {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71));
    width: 100%;
    height: 100%;
  }
  }
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 400;
    color: var(--white);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 70px);
  }

 

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .wrapper{
    position:relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .center {
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;


    &:before {
      position: relative;
      bottom: 4px;
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--yellow);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }



  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--yellow);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }


  .divider {
      display: block;
      margin: 30px 0px;
      width: 100px;
      height: 2px;
      background-color: #ffffff;
    }
  

  .subtitle {
    color: var(--yellow);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .overlay-wrapper {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61));
    width: 100%;
    height: 100%;
  }
     
  #bg {
        width: 100vw;
        height: 100%;
        min-height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: -1;
        overflow: hidden;
        object-fit:'cover';
        left:0;

        background-image: url('./public/services-xl.jpg');
        
        @media ${props => props.theme.bp.SM} {
        background-image: url('./services-lg.jpg');
        }
        @media ${props => props.theme.bp.SM} { 
        background-image: url('./services-md.jpg');
        }
        @media ${props => props.theme.bp.S660} {
        background-image: url('./services-sm.jpg');
        }
        @media ${props => props.theme.bp.SM} {
        background-image: url('./services-xs.jpg');
         }
  
       }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  
  ${TransitionStyles};


`;

export default GlobalStyle;


