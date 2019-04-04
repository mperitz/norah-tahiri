import Project from "src/data-structures/Project";

const designProjects: Array<Project> = [
  {
    name: 'We Are The Ones',
    src: '../assets/images/design/we-are-the-ones-home@3x.jpg',
    color: '#f9564f',
    isDefault: false,
  },
  {
    name: 'NSGRA',
    src: '../assets/images/design/nsgra-home@3x.jpg',
    color: '#c200fb',
    isDefault: false,
  },
  {
    name: 'Share The Love',
    src: '../assets/images/design/share-the-love-home@3x.jpg',
    color: '#55dde0',
    isDefault: false,
  },
  {
    name: 'Stories of Living On',
    src: '../assets/images/design/live-on-ny-home@3x.jpg',
    color: '#4848fd',
    isDefault: false,
  },
  {
    name: 'SciStarter',
    src: '../assets/images/design/scistarter-home@3x.jpg',
    color: '#f78d01',
    isDefault: false,
  },
  {
    name: 'The Bike Republic',
    src: '../assets/images/design/bike-republic-home@3x.jpg',
    color: '#fdca40',
    isDefault: false,
  },
];

export const defaultDesignProject: Project = {
  name: 'Default',
  src: '../assets/images/design/group.svg',
  color: '#363636',
  isDefault: true,
};

export default designProjects;
