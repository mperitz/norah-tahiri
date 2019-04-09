import Project from "src/data-structures/Project";

const designProjects: Array<Project> = [
  {
    id: 1,
    name: 'We Are The Ones',
    src: '../assets/images/design/we-are-the-ones-home@3x.jpg',
    color: '#f9564f',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
  {
    id: 2,
    name: 'NSGRA',
    src: '../assets/images/design/nsgra-home@3x.jpg',
    color: '#c200fb',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
  {
    id: 3,
    name: 'Share The Love',
    src: '../assets/images/design/share-the-love-home@3x.jpg',
    color: '#55dde0',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
  {
    id: 4,
    name: 'Stories of Living On',
    src: '../assets/images/design/live-on-ny-home@3x.jpg',
    color: '#4848fd',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
  {
    id: 5,
    name: 'SciStarter',
    src: '../assets/images/design/scistarter-home@3x.jpg',
    color: '#f78d01',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
  {
    id: 6,
    name: 'The Bike Republic',
    src: '../assets/images/design/bike-republic-home@3x.jpg',
    color: '#fdca40',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation'
  },
];

export const defaultDesignProject: Project = {
  id: 0,
  name: 'Default',
  src: '../assets/images/design/group.svg',
  color: '#363636',
  isDefault: true,
  mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
  client: 'The Obama Foundation'
};

export default designProjects;
