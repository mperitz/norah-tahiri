import Project from "src/data-structures/Project";

function getRatio(width, height) {
  return width / height;
}

const photographyProjects: Array<Project> = [
  {
    id: 1,
    name: 'Portraits',
    src: '../assets/images/photography/portrait@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'People I\'ve met along the way.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/12/IMG_2479.jpg',
        ratio: getRatio(324, 405),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/07/IMG_6913.jpg',
        ratio: getRatio(324, 486),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/07/MG_5696.jpg',
        ratio: getRatio(324, 215),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/07/MG_1742a.jpg',
        ratio: getRatio(294, 441),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/07/Dad-Camping-2015.jpg',
        ratio: getRatio(294, 194),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/07/KennySuit_721.jpg',
        ratio: getRatio(508, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/12/people__010a.jpg',
        ratio: getRatio(294, 441),
      },
    ]
  },
  {
    id: 2,
    name: 'Landscape',
    src: '../assets/images/photography/landscape@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'A collection of moments.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/JoshuaTree_reducedsize.jpg',
        ratio: getRatio(767, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/Raleigh-NC.jpg',
        ratio: getRatio(1023, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/IMG_9892.jpeg',
        ratio: getRatio(767, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/Rehoboth-Beach.jpg',
        ratio: getRatio(613, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/02/2014-12479.jpg',
        ratio: getRatio(767, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/MG_0345_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/MG_6543_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/SantaMonicaSunset.jpg',
        ratio: getRatio(767, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/places_001.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/03/home_17.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/11/MG_9205_72.jpg',
        ratio: getRatio(511, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/10/home_11_blue.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/11/IMG_0674.jpg',
        ratio: getRatio(925, 767),
      },
    ],
  },
  {
    id: 3,
    name: 'People in Town',
    src: '../assets/images/photography/environmental@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: ' A collection of portraits of the people in town. Each person has a unique story as to what brought them here - some are immigrants, some are from a town nearby, some have been here most of their lives, most all plan to stay.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/MG_5221_bw_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/Harut_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/people__014a_bw.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/MG_0935_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/MG_1112_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/MG_3763_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/12/people__001.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/12/DrycleaningLady_72.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2014/12/people__003.jpg',
        ratio: getRatio(1074, 715),
      },
    ],
  },
  {
    id: 4,
    name: 'Habibi\'s Hutch',
    src: '../assets/images/photography/habibi@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'Habibi\'s Hutch, located in South Austin, is an untraditional preschool that runs on the belief that children learn through art and experience.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_013-2.jpg',
        ratio: getRatio(1074, 698),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_014-2.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_015-2.jpg',
        ratio: getRatio(474, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_016-2.jpg',
        ratio: getRatio(1074, 675),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_017-2.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_018-2.jpg',
        ratio: getRatio(1074, 637),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_019-2.jpg',
        ratio: getRatio(1030, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2015/01/stories_020-2.jpg',
        ratio: getRatio(1074, 716),
      },
    ],
  },
  {
    id: 5,
    name: 'Musicians',
    src: '../assets/images/photography/musicians@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'An ongoing project documenting the live music scene in New York.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/IMG_7568.jpg',
        ratio: getRatio(1023, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/IMG_7730.jpg',
        ratio: getRatio(614, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/MG_1577_72.jpg',
        ratio: getRatio(581, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/IMG_2892.jpg',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/MG_5000.png',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/MG_0530-1.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/D893EBEB-7B22-41E4-953C-EBE82954A44D.jpg',
        ratio: getRatio(511, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/MG_0378.png',
        ratio: getRatio(1074, 715),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/MG_0519.jpg',
        ratio: getRatio(511, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/MG_0400.jpg',
        ratio: getRatio(1074, 716),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2018/05/IMG_0185.png',
        ratio: getRatio(1022, 767),
      },
      {
        src: 'http://www.norahtahiri.com/wp-content/uploads/2016/02/IMG_5738.jpg',
        ratio: getRatio(995, 767),
      },
    ],
  },
  {
    id: 6,
    name: 'Wild Geese',
    src: '../assets/images/photography/roadtrip@3x.jpg',
    color: '#363636',
    isDefault: false,
    mainDescription: 'This project is about finding beauty and purpose in abandoned, desolate, and solitary moments.',
    client: '',
    team: [],
    role: '',
    photos: [
      {
        src: '../assets/images/photography/roadtrip@3x.jpg',
        ratio: getRatio(2049, 2304),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-1.JPG',
        ratio: getRatio(2000, 1348),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-2.JPG',
        ratio: getRatio(2000, 1333),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-3.JPG',
        ratio: getRatio(2000, 1362),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-4.JPG',
        ratio: getRatio(1426, 950),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-5.JPG',
        ratio: getRatio(2000, 1333),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-6.JPG',
        ratio: getRatio(2000, 1500),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-7.JPG',
        ratio: getRatio(2000, 1500),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-8.JPG',
        ratio: getRatio(1333, 2000),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-9.JPG',
        ratio: getRatio(2000, 1333),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-10.JPG',
        ratio: getRatio(2000, 1333),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-11.JPG',
        ratio: getRatio(2000, 1333),
      },
      {
        src: '../assets/images/wild-geese/wildgeese-12.jpg',
        ratio: getRatio(2403, 3004),
      },
    ],
  },
];

export const defaultPhotographyProject: Project = {
  id: 0,
  name: 'Default',
  src: '../assets/images/photography/default@3x.jpg',
  color: '#363636',
  isDefault: true,
  mainDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  client: '',
  team: [],
  role:'',
};

export default photographyProjects;
