import Project from "src/data-structures/Project";

const photographyProjects: Array<Project> = [
  {
    id: 1,
    name: 'Portraits',
    src: '../assets/images/photography/portrait@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
  {
    id: 2,
    name: 'Environmental Portraits',
    src: '../assets/images/photography/environmental@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
  {
    id: 3,
    name: 'Landscape',
    src: '../assets/images/photography/landscape@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
  {
    id: 4,
    name: 'Habibi\'s Hutch',
    src: '../assets/images/photography/habibi@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
  {
    id: 5,
    name: 'Musicians',
    src: '../assets/images/photography/musicians@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
  {
    id: 6,
    name: 'Roadtrip Project',
    src: '../assets/images/photography/roadtrip@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
  },
];

export const defaultPhotographyProject: Project = {
  id: 0,
  name: 'Default',
  src: '../assets/images/photography/default@3x.jpg',
  color: '#363636',
  isDefault: true,
  mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
  client: 'The Obama Foundation',
};

export default photographyProjects;
