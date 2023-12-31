import React, { ReactNode,useEffect,useState } from 'react';
import {styled} from 'styled-components'
import { ThemeProvider } from 'styled-components';
import  { GlobalStyle, theme } from '@styles';
import {Nav, Footer, Loader} from '@components'
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`;


interface LayoutProps {
  children: ReactNode;
  
}

const Layout = ({ children } : LayoutProps) => {

  const router = useRouter()
  const isHome = router.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1]; // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

  }, [isLoading, router.asPath]);


  return (
    <div id='root'>  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
      <StyledContent>
         <Nav isHome={isHome}/>
          <div id='content'>
             {children}
          </div>
          <Footer/>
       </StyledContent>
        )}
    </ThemeProvider>
    </div>
  );
};

export default Layout;
