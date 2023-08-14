import React from 'react'
import { styled } from 'styled-components';


const StyledServiceSection= styled.section`
   background-color: grey;
`

const StyledTime = styled.div`
  position:relative;
  padding: 2em 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1170px;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 1px);
        height: 100%;
        width: 2px;
        background: blue;
      }
      &:after {
        content: '';
        display: table;
        clear: both;
      }
`;

const StyledContainer = styled.div`
        position: relative;
        transition: all 0.3s ease;
        margin: 1em 0;
        &:after {
          content: "";
          display: table;
          clear: both;
        }
      
`;

 const Expertises = () => {
  return (
    <StyledServiceSection>
       <StyledTime>
         <StyledContainer>
             hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddddddddddddddddddddddd
         </StyledContainer>
       </StyledTime>
    </StyledServiceSection>
  )
}

export default Expertises;

