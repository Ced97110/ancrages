import styled from 'styled-components';
import type { AppProps } from 'next/app'
import {Layout, Nav} from '@components'


const StyledMainContainer = styled.main`
  
`;


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
     <StyledMainContainer>
       <Component {...pageProps} />
     </StyledMainContainer>
    </Layout>
  )
}
