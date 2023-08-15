export const email = 'cedmanchau@gmail.com';

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/ced97110',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/cedric-manchau-935627bb',
  },
];

export const navLinks = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'Nos Services',
    url: '#features',
  },
  {
    name: 'Nos Offres',
    url: '#offers',
  },
  {
    name: 'Qui sommes nous ?',
    url: '#about',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];

export const colors = {
  green: '#64ffda',
  navy: '#0a192f',
  darkNavy: '#020c1b',
};

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});
