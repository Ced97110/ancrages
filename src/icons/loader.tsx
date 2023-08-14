import React from 'react';
import Image from 'next/image';


const IconLoader = () => (
  <div >
    <Image src='/logo.png' quality={80} priority={true} width={110} height={110} alt='logo' /> 
  </div>
);

export default IconLoader;
