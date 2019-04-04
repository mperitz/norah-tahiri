import Project from "src/data-structures/Project";

const photographyProjects: Array<Project> = [
  {
    name: 'Portraits',
    src: '../assets/images/photography/portrait@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
  {
    name: 'Environmental Portraits',
    src: '../assets/images/photography/environmental@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
  {
    name: 'Landscape',
    src: '../assets/images/photography/landscape@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
  {
    name: 'Habibi\'s Hutch',
    src: '../assets/images/photography/habibi@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
  {
    name: 'Musicians',
    src: '../assets/images/photography/musicians@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
  {
    name: 'Roadtrip Project',
    src: '../assets/images/photography/roadtrip@3x.jpg',
    color: '#363636',
    isDefault: false,
  },
];

export const defaultPhotographyProject: Project = {
  name: 'Default',
  src: '../assets/images/photography/default@3x.jpg',
  color: '#363636',
  isDefault: true,
};

export default photographyProjects;
