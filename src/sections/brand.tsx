import React from 'react'
import styled from 'styled-components';

const StyledBrand = styled.section`
    max-width: 800px;
    margin: 0 auto;
    min-height: 500px;


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
`



const Brand = () => {
  return (
    <StyledBrand>
      <div className='section-wrapper'>
        <h2 className='title'>Decouvrez Ancrages Cabinet Conseil</h2>
            <p>
              Notre cabinet de conseil est à vos côtés afin de vous accompagner dans la réflexion et la mise en oeuvre des ajustements et changements RH nécessaires à améliorer les performances de votre entreprise.
            </p>
      </div>
    </StyledBrand>
  )
}

export default Brand;