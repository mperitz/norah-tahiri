import Project from 'src/data-structures/Project';
import { Type, TextType } from 'src/data-structures/Content';

function calcRatio(width, height) {
  return 100 * (width / height);
}

function getScaledWidth(width, height, factor) {
  return (width / height) * factor;
}

const designProjects: Array<Project> = [
  {
    id: 1,
    name: 'We Are The Ones',
    src: '../assets/images/design/we-are-the-ones-home@3x.jpg',
    color: '#f9564f',
    isDefault: false,
    mainDescription: 'Matter Unlimited partnered with ESPN and the Obama Foundation / MBKA to create a campaign urging young Americans to become allies and join the fight against the injustices our boys and young men of color face. We launched a spot “We Are The Ones” with an accompanying digital campaign introducing the “The Keepers’ Code”, a guide created by young men of color around the nation for allies to live by.',
    client: 'The Obama Foundation',
    href: 'https://www.obama.org/mbka/mentor/',
    team: [
      'Matter Unlimited - Agency',
      'Omar Silwany - Creative Director',
      'Shabazz Larkin - Creative Director',
      'Aina Abiodun - Director of Strategy & Innovation',
      'J.M. Harper - Director',
      'Lonely Leap - Production Company',
    ],
    role: 'Art Director & Lead Designer',
    content: [
      {
        type: Type.Video,
        videoId: 'zSJs-DE6mSE',
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_9.png',
        paddingPercentage: 69,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'Modular Frames',
          },
          {
            type: TextType.Body,
            value: 'I designed a simple but bold identity that used black and white frames to create versatile, modular layouts that could be used on any platform – in print or digital form, in a vertical or horizontal space, and as an interactive website.',
          },
          {
            type: TextType.Body,
            value: 'I wanted to keep the focus on the powerful codes written by the young men of color, but still provide an opportunity to build upon them with supporting materials such as portraits of the young men of color who inspired the codes, videos, interactive pieces, shareable assets, ways to get involved, etc.',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_10.png',
        paddingPercentage: 133.2,
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_11.png',
        paddingPercentage: 68.4,
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_12.png',
        paddingPercentage: 66.7,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'Interactive Website',
          },
          {
            type: TextType.Body,
            value: 'The modular cards allows both the client and target audience to participate in the code’s evolution. Anyone who interacts with the Keepers Code chooses how they share the code within their networks - you can share one individual code that resonates with you or the entire list. The Obama Foundation used these interactive cards to further develop the narrative of the campaign by embedding supporting media within the frames (videos, pdfs, supporting content, etc).',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_13.png',
        paddingPercentage: 52.1,
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_14.png',
        paddingPercentage: 55.5,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'The Obama Foundation Summit',
          },
          {
            type: TextType.Body,
            value: 'The Obama Foundation launched its first annual Summit and we were invited to put together an interactive exhibit for The Keeper’s Code. ',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_15.png',
        paddingPercentage: 31.2,
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_16.png',
        paddingPercentage: 50.7,
      },
      {
        type: Type.Image,
        src: '../assets/images/we-are-the-ones/Body/wearetheones_17.png',
        paddingPercentage: 43,
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_1.png',
        width: getScaledWidth(675, 450, 450),
        mobileWidth: getScaledWidth(675, 450, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_2.png',
        width: getScaledWidth(400, 450, 450),
        mobileWidth: getScaledWidth(400, 450, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_3.jpg',
        width: getScaledWidth(2000, 2848, 450),
        mobileWidth: getScaledWidth(2000, 2848, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_4.jpg',
        width: getScaledWidth(1799, 2000, 450),
        mobileWidth: getScaledWidth(1799, 2000, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_5.jpg',
        width: getScaledWidth(1404, 2000, 450),
        mobileWidth: getScaledWidth(1404, 2000, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_6.jpg',
        width: getScaledWidth(1404, 2000, 450),
        mobileWidth: getScaledWidth(1404, 2000, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_7.jpg',
        width: getScaledWidth(2000, 1627, 450),
        mobileWidth: getScaledWidth(2000, 1627, 250),
      },
      {
        src: '../assets/images/we-are-the-ones/Carousel/wearetheones_8.jpg',
        width: getScaledWidth(1405, 2000, 450),
        mobileWidth: getScaledWidth(1405, 2000, 250),
      },
    ],
  },
  {
    id: 2,
    name: 'NSGRA',
    src: '../assets/images/design/nsgra-home@3x.jpg',
    color: '#c200fb',
    isDefault: false,
    mainDescription: 'The redesign of Scholastic’s Next Step Guided Reading Assessment software was an opportunity to transform a well-loved but outdated resource that numerious teachers considered vital to understanding and supporting their students’ ELA skills.',
    client: 'Scholastic',
    href: 'http://teacher.scholastic.com/products/Next-Step-Guided-Reading-Assessment/',
    team: [
      'Backpack Interactive - Studio',
      'Miriam Kassel - Art Director',
      'Rebecca Behrens - UX Designer',
    ],
    role: 'UI Designer',
    content: [
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_4.png',
        paddingPercentage: 59,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_5.png',
        paddingPercentage: 62.5,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_6.png',
        paddingPercentage: 90.6,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'Creating Actionable Data Visualizations',
          },
          {
            type: TextType.Body,
            value: 'Once a teacher has entered their data, visualizations and reports are instantly available. The visual presentation is at once friendly and powerful. Teachers and administrators can effortlessly discover class-wide performance trends and personalize their instruction for learners needing additional attention or challenges.',
          },
          {
            type: TextType.Body,
            value: 'Teachers can also use the data to sort and segment their learners into targeted groups and customize the areas of concentration based on that their common challenges.',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_7.png',
        paddingPercentage: 57.2,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_8.png',
        paddingPercentage: 59,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_9.png',
        paddingPercentage: 69.8,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_10.png',
        paddingPercentage: 105.2,
      },
      {
        type: Type.Image,
        src: '../assets/images/NSGRA/Body/nsgra_11.png',
        paddingPercentage: 57.7,
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/NSGRA/Carousel/nsgra_1.png',
        width: getScaledWidth(716, 450, 450),
        mobileWidth: getScaledWidth(716, 450, 250),
      },
      {
        src: '../assets/images/NSGRA/Carousel/nsgra_2.png',
        width: getScaledWidth(361, 450, 450),
        mobileWidth: getScaledWidth(361, 450, 250),
      },
      {
        src: '../assets/images/NSGRA/Carousel/nsgra_3.png',
        width: getScaledWidth(764, 450, 450),
        mobileWidth: getScaledWidth(764, 450, 250),
      },
    ],
  },
  {
    id: 3,
    name: 'Share The Love',
    src: '../assets/images/design/share-the-love-home@3x.jpg',
    color: '#55dde0',
    isDefault: false,
    mainDescription: 'Matter Unlimited created a fun, animated spot for LiveOnNY encouraging people to share the      by signing up to become an organ donor. We wrote a catchy anthem and created unique, animated organs to drive the campaign and help mitigate the “ick” factor that so often taints conversations about organ donation.',
    client: 'LIVEONNY',
    href: 'https://www.facebook.com/LiveOnNewYork/',
    team: [
      'Matter Unlimited - Agency',
      'Gordei - Illustration & Animation',
      'Duotone Studios - Music',
    ],
    role: 'Art Director & Lead Designer',
    content: [
      {
        type: Type.Video,
        videoId: 'gf8il4eJJR4',
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'Social Media & OOH Campaign',
          },
          {
            type: TextType.Body,
            value: 'In addition to the spot, we rolled out a social media campaign and put up billboards in NYC reminding people that in the end, its sharing what’s inside that really counts.',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_6.png',
        paddingPercentage: calcRatio(524, 1001),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_7.png',
        paddingPercentage: calcRatio(523, 999),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_8.png',
        paddingPercentage: calcRatio(708, 952),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_9.png',
        paddingPercentage: calcRatio(600, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_10.png',
        paddingPercentage: calcRatio(540, 976),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_11.png',
        paddingPercentage: calcRatio(562, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_12.png',
        paddingPercentage: calcRatio(644, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_13.png',
        paddingPercentage: calcRatio(344, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_14.png',
        paddingPercentage: calcRatio(344, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/share-the-love/Body/sharethelove_15.png',
        paddingPercentage: calcRatio(344, 1000),
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/share-the-love/Carousel/sharethelove_1.png',
        width: getScaledWidth(716, 450, 450),
        mobileWidth: getScaledWidth(716, 450, 250),
      },
      {
        src: '../assets/images/share-the-love/Carousel/sharethelove_2.png',
        width: getScaledWidth(764, 450, 450),
        mobileWidth: getScaledWidth(764, 450, 250),
      },
      {
        src: '../assets/images/share-the-love/Carousel/sharethelove_3.png',
        width: getScaledWidth(860, 450, 450),
        mobileWidth: getScaledWidth(860, 450, 250),
      },
      {
        src: '../assets/images/share-the-love/Carousel/sharethelove_4.png',
        width: getScaledWidth(860, 450, 450),
        mobileWidth: getScaledWidth(860, 450, 250),
      },
      {
        src: '../assets/images/share-the-love/Carousel/sharethelove_5.png',
        width: getScaledWidth(860, 450, 450),
        mobileWidth: getScaledWidth(860, 450, 250),
      },
    ],
  },
  {
    id: 4,
    name: 'Stories of Living On',
    src: '../assets/images/design/live-on-ny-home@3x.jpg',
    color: '#4848fd',
    isDefault: false,
    mainDescription: 'Matter Unlimited was tasked with redesigning the LiveOnNY website and developing new media content to establish LiveOnNY as the trusted organizational authority on organ donation. We designed a new modular website with a narrative-driven structure to faciliate exploration and inspiration. We also created a new video series, infographics, and photos for the site. ',
    client: 'LIVEONNY',
    href: 'https://www.liveonny.org/',
    team: [
      'Matter Unlimited - Agency',
      'Maddy Talias - Director/Photographer',
      'Ryan Topham - Producer',
    ],
    role: 'Art Director & UI Designer',
    content: [
      {
        type: Type.Video,
        videoId: 'YHMYcYJ-RBc',
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'New Site Architecture ',
          },
          {
            type: TextType.Body,
            value: 'LiveOnNY’s old website was lacking cohesion and structure. There was no clear user journey or hierarchy given to the mass amount of content and no prominent CTAs leading the user to sign up to become an organ donor.',
          },
          {
            type: TextType.Body,
            value: 'So the first thing we did was take a deep dive in to the site architecture to restructure and define our key user journeys. We then re-built our framework around three priority audiences:',
          },
          {
            type: TextType.Body,
            value: '• Unregistered New Yorkers'
          },
          {
            type: TextType.ListItem,
            value: '• Donor Families / Recipients / Volunteers'
          },
          {
            type: TextType.ListItem,
            value: '• Medical Professionals',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/stories-of-living-on/Body/storiesLiveOn-7.png',
        paddingPercentage: calcRatio(657, 988),
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'New Site Architecture',
          },
          {
            type: TextType.Body,
            value: 'We created a modular website with a utility-driven structure and new, supportive hierarchy for content to facilitate exploration and inspiration.',
          },
          {
            type: TextType.Body,
            value: 'By building the site in modules, the client is able to build customized layouts for each page to best support the narrative being presented – whether that be using videos, long form articles, infographics, etc. The featured story or content leads the page and additional supporting info is contextualized to support the narrative voice. We created persistent CTA’s throughout the page and introduced “launch points” for further exploration.',
          },
          {
            type: TextType.Body,
            value: 'The single page scroll gives a direct structure for ease of content consumption. The emphasis is placed on need to know information and the subnav structure surfaces relevant content.',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/stories-of-living-on/Body/storiesLiveOn-8.png',
        paddingPercentage: calcRatio(672, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/stories-of-living-on/Body/storiesLiveOn-9.png',
        paddingPercentage: calcRatio(672, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/stories-of-living-on/Body/storiesLiveOn-10.png',
        paddingPercentage: calcRatio(672, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/stories-of-living-on/Body/storiesLiveOn-11.png',
        paddingPercentage: calcRatio(672, 1000),
      },
      {
        type: Type.Video,
        videoId: '1HfytvbHxfM',
      },
      {
        type: Type.Video,
        videoId: 'mx3JGVuU4GA',
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-1.png',
        width: getScaledWidth(675, 450, 450),
        mobileWidth: getScaledWidth(675, 450, 250),
      },
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-2.png',
        width: getScaledWidth(383, 450, 450),
        mobileWidth: getScaledWidth(383, 450, 250),
      },
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-3.png',
        width: getScaledWidth(750, 500, 450),
        mobileWidth: getScaledWidth(750, 500, 250),
      },
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-4.png',
        width: getScaledWidth(333, 500, 450),
        mobileWidth: getScaledWidth(333, 500, 250),
      },
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-5.png',
        width: getScaledWidth(750, 500, 450),
        mobileWidth: getScaledWidth(750, 500, 250),
      },
      {
        src: '../assets/images/stories-of-living-on/Carousel/storiesLiveOn-6.png',
        width: getScaledWidth(333, 500, 450),
        mobileWidth: getScaledWidth(333, 500, 250),
      },
    ],
  },
];

// Projects removed from view at Norah's request.
const deprecatedProjects = [
  {
    id: 5,
    name: 'SciStarter',
    src: '../assets/images/design/scistarter-home@3x.jpg',
    color: '#f78d01',
    isDefault: false,
    mainDescription: 'SciStarter is an online community platform that provides thousands of formal and informal science and research projects for citizens to take part in. They asked us to help design a new portal where their institutional partners could integrate SciStarter projects in to their curriculum, club activities and events.',
    client: 'SCISTARTER',
    href: 'https://scistarter.org/dashboard',
    team: ['Backpack Interactive - Agency'],
    role: 'UX / UI Designer',
    content: [
      {
        type: Type.Image,
        src: '../assets/images/SciStarter/Body/scistarter-4.png',
        paddingPercentage: calcRatio(667, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/SciStarter/Body/scistarter-5.png',
        paddingPercentage: calcRatio(730, 1043),
      },
      {
        type: Type.Image,
        src: '../assets/images/SciStarter/Body/scistarter-6.png',
        paddingPercentage: calcRatio(650, 1030),
      },
      {
        type: Type.Image,
        src: '../assets/images/SciStarter/Body/scistarter-7.png',
        paddingPercentage: calcRatio(742, 800),
      },
      {
        type: Type.Image,
        src: '../assets/images/SciStarter/Body/scistarter-8.png',
        paddingPercentage: calcRatio(445, 1032),
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/SciStarter/Carousel/scistarter-1.png',
        width: getScaledWidth(716, 450, 450),
        mobileWidth: getScaledWidth(716, 450, 250),
      },
      {
        src: '../assets/images/SciStarter/Carousel/scistarter-2.png',
        width: getScaledWidth(383, 450, 450),
        mobileWidth: getScaledWidth(383, 450, 250),
      },
      {
        src: '../assets/images/SciStarter/Carousel/scistarter-3.png',
        width: getScaledWidth(383, 450, 450),
        mobileWidth: getScaledWidth(383, 450, 250),
      },
    ]
  },
  {
    id: 6,
    name: 'The Bike Republic',
    src: '../assets/images/design/bike-republic-home@3x.jpg',
    color: '#fdca40',
    isDefault: false,
    mainDescription: ' I designed a new logo and visual identity for a small, northwestern bike shop called The Bike Republic. I was also tasked with designing a new app for their shop.',
    client: 'THE BIKE REPUBLIC',
    href: '',
    team: ['Norah Tahiri Design'],
    role: 'Art Director & UX/UI Designer',
    content: [
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-4.png',
        paddingPercentage: calcRatio(599, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-5.png',
        paddingPercentage: calcRatio(750, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-6.png',
        paddingPercentage: calcRatio(800, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-7.png',
        paddingPercentage: calcRatio(667, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-8.png',
        paddingPercentage: calcRatio(600, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-9.png',
        paddingPercentage: calcRatio(600, 1000),
      },
      {
        type: Type.Image,
        src: '../assets/images/bike-republic/Body/bikerepublic-10.png',
        paddingPercentage: calcRatio(600, 1000),
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/bike-republic/Carousel/bikerepublic-1.png',
        width: getScaledWidth(675, 450, 450),
        mobileWidth: getScaledWidth(675, 450, 250),
      },
      {
        src: '../assets/images/bike-republic/Carousel/bikerepublic-2.png',
        width: getScaledWidth(300, 450, 450),
        mobileWidth: getScaledWidth(300, 450, 250),
      },
      {
        src: '../assets/images/bike-republic/Carousel/bikerepublic-3.png',
        width: getScaledWidth(715, 450, 450),
        mobileWidth: getScaledWidth(715, 450, 250),
      },
    ]
  },
]

export const defaultDesignProject: Project = {
  id: 0,
  name: 'Default',
  src: '../assets/images/design/abstract-dark.png',
  color: '#363636',
  isDefault: true,
  mainDescription: '',
  client: '',
  href: '',
  team: [],
  role: '',
};

export default designProjects;
