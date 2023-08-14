import React from 'react';
import PropTypes from 'prop-types';
import {
  
  IconLinkedin,
} from '@icons';

interface iconProps{
  name: any;
}


const Icon = ({ name }: iconProps) => {
  switch (name) {
    case 'Linkedin':
      return <IconLinkedin />;
};

}

export default Icon;
