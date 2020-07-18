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
        type: Type.Text,
        text: [
          {
            type: TextType.Body,
            value: 'As Art Director, my role was to come up with a visual identity for the campaign; work with multiple photographers to direct photo shoots and capture the art direction; and design an interactive website, posters, digital and print marketing collateral. It also included designing  an exhibit for the Obama Summit. I also worked directly with the Director of Strategy to develop the Keepers Code.',
          },
          {
            type: TextType.Body,
            value: 'The Keepers Code was a set of principles that was created to help inspire a movement. We wanted them to spark deep conversations and interactions, to drive people to take action, and to encourage other BIPOC to submit their own codes so that they had a direct hand in its evolution. The Keepers Code was built to evolve. We wanted the code to reflect what was happening in the world, highlighting the progress we’ve made and the work we still have left to do.',
          },
        ],
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
            value: 'A Transformative Design',
          },
          {
            type: TextType.Body,
            value: 'The strategy behind the Keepers Code directly influenced my design direction. I wanted to create a visual identity that could support the movement’s growth and evolution. Functionally, I wanted it to be capable of transforming so that it could fit in any space, work on any platform, in any context.',
          },
          {
            type: TextType.Body,
            value: 'I designed a simple but bold identity that used black and white frames to create versatile, modular layouts that could be used on any platform – in print or digital form, in a vertical or horizontal space.',
          },
          {
            type: TextType.Body,
            value: 'I chose black and white because they are colors associated with truth and because I wanted to use high contrast colors to keep the focus on the powerful codes written by the young men of color. While handwritten typography would have been more visually appealing, I decided to use a bold typeface instead so that the design was accessible to everyone and could be easily replicated by those interested in participating in the movement.',
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
            value: 'The website was built using modular cards that contained various types of media associated with the campaign - photos, videos, interactive elements, ways to get involved, shareable assets, etc.',
          },
          {
            type: TextType.Body,
            value: 'Having the cards in a modular layout encouraged exploration and allowed the Obama Foundation to continue adding content as the movement progressed without disrupting the user experience. The cards were designed so that each user could choose their own level of participation with the content. You could view online, share directly to your own social media networks or download the asset to customize or build upon it.',
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
    name: 'Benny',
    src: '../assets/images/design/benny-header-home@3x.jpg',
    color: '#a81b8d',
    isDefault: false,
    mainDescription: 'Benny was created to give travelers a community where they can share and benefit from their passion for hotels. The platform allows travelers to become agents for the most sought-after hotels and share their hotel recommendations with their friends and family, allowing them to book at exclusive rates. ',
    client: 'Benny',
    href: 'https://www.itsbenny.com',
    team: [
      'Lehua Chong - Art Director',
      'Jeff Michels - Developer',
      'Skillhire - Development Team',
    ],
    role: 'UX / UI Designer',
    content: [
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Body,
            value: 'I was hired by One Night to design and consult on the development of Benny, a travel product which included a website, app and individual portals for agents, hotels and admin. I built out the site architecture for all 5 platforms, completed the UX/UI Design, and was the lead design and product strategist.',
          },
        ],
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'The Problem',
          },
          {
            type: TextType.Body,
            value: 'The project entailed a lot of ideas that needed integration into a cohesive product with a seamless user experience. There was also no user research or testing done to measure product viability.',
          },
          {
            type: TextType.Body,
            value: 'What made this product design particularly difficult is that there were three main user experiences to consider - guest, agent, and hotel. Each user’s interaction with the product would be very different. We had to consider not only how these roles were integrated but also how to incorporate features for each into one product without having a disjointed user experience. There was an added layer of complexity with the hotel component because the back-end of Benny had to seamlessly integrate with each hotel’s automated or manually controlled property management system.',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/home-updated@3x.jpg',
        paddingPercentage: 52,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'The Process',
          },
          {
            type: TextType.Body,
            value: 'Steps I took:',
          },
          {
            type: TextType.ListItem,
            value: '• Conduct an audit of the existing product',
          },
          {
            type: TextType.ListItem,
            value: '• Review an outline of the product and an extensive list of desired features',
          },
          {
            type: TextType.ListItem,
            value: '• Discuss the business’ goals, growth strategies and current operating practices with founder',
          },
          {
            type: TextType.ListItem,
            value: '• Conduct internal stakeholder interviews',
          },
          {
            type: TextType.Body,
            value: '',
          },
          {
            type: TextType.Body,
            value: '',
          },
          {
            type: TextType.Body,
            value: 'Also conducted:',
          },
          {
            type: TextType.ListItem,
            value: '• Extensive market and user research based on their pre-established target audience',
          },
          {
            type: TextType.ListItem,
            value: '• User research interviews with travelers, travel agents, and hotels to flesh out the list of needed features and establish a core product that we could move forward with in development and testing',
          },
          {
            type: TextType.Body,
            value: '',
          },
          {
            type: TextType.Body,
            value: '',
          },
          {
            type: TextType.Body,
            value: 'I used this research to then create three user flows and the initial site architecture.'
          }
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/group-6@3x.jpg',
        paddingPercentage: 40,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/group-7@3x.jpg',
        paddingPercentage: 40,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/group-8@3x.jpg',
        paddingPercentage: 40,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/group-4@3x.png',
        paddingPercentage: 53,
      },
      {
        type: Type.Text,
        text: [
          {
            type: TextType.Header,
            value: 'Refining the Vision',
          },
          {
            type: TextType.Body,
            value: 'As I built out the wireframes it was clear that the product was becoming too complex. After conducting two different user-testing sessions, we decided to further simplify and refine the product. This ultimately led to a shift in the business model as well. I worked directly with the CEO to identify the changes that needed to be made that would support both the new business model and the research and strategy already in place.',
          },
          {
            type: TextType.Body,
            value: 'We ultimately landed on the following product: ',
          },
        ]
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/group-5@3x.png',
        paddingPercentage: 58,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/home-expanded@3x.jpg',
        paddingPercentage: 190,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/hotel-search-1@3x.jpg',
        paddingPercentage: 73,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/search-rec@3x.jpg',
        paddingPercentage: 73,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/search-filter@3x.jpg',
        paddingPercentage: 73,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/review-pop-up@3x.jpg',
        paddingPercentage: 73,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/hotel-profile-1@3x.jpg',
        paddingPercentage: 126,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/check-out-copy@3x.jpg',
        paddingPercentage: 71,
      },
      {
        type: Type.Image,
        src: '../assets/images/benny/Body/commissions@3x.jpg',
        paddingPercentage: 80,
      },
    ],
    carouselImages: [
      {
        src: '../assets/images/benny/Carousel/Color_Pallette_Benny.png',
        width: getScaledWidth(956, 601, 450),
        mobileWidth: getScaledWidth(956, 601, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Fonts.png',
        width: getScaledWidth(766, 900, 450),
        mobileWidth: getScaledWidth(766, 900, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Mobile_Climb.jpg',
        width: getScaledWidth(756, 684, 450),
        mobileWidth: getScaledWidth(756, 684, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Mobile_Fins.jpg',
        width: getScaledWidth(756, 684, 450),
        mobileWidth: getScaledWidth(756, 684, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Mobile_Bathtub.jpg',
        width: getScaledWidth(756, 684, 450),
        mobileWidth: getScaledWidth(756, 684, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Mobile_Mirror.jpg',
        width: getScaledWidth(756, 684, 450),
        mobileWidth: getScaledWidth(756, 684, 250),
      },
      {
        src: '../assets/images/benny/Carousel/Benny_Snorkel_HR.jpg',
        width: getScaledWidth(2000, 2499, 450),
        mobileWidth: getScaledWidth(2000, 2499, 250),
      },
    ],
  },
  {
    id: 3,
    name: 'Share The Love',
    src: '../assets/images/design/share-the-love-home@3x.jpg',
    color: '#55dde0',
    isDefault: false,
    mainDescription: 'To help increase organ donor enrollment, Matter Unlimited partnered with LiveOnNY to create a fun, catchy anthem and animated spot encouraging Americans to share the ❤️ by signing up to become an organ donor. The spot and its accompanying marketing campaign launched on LiveOnNY’s annual Organ Donor Enrollment Day.',
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
            value: 'As the Art Director, my job was to oversee the entire visual direction for the video as well as design all digital and print assets for the campaign. I was in charge of storyboarding the entire script, sourcing the illustration and animation team and working with them to ensure my vision for the spot was brought to life.',
          },
          {
            type: TextType.Body,
            value: 'To mitigate the “ick factor” that is often associated with organ donation, I wanted to use friendly animated characters of organs for the video. We wanted people to have a warm, positive association with organs so that they felt comfortable discussing organ donation with their loved ones. The cute, chubby organs paired with cheeky lyrics made this spot appealing to all ages.',
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
    id: 5,
    name: 'Stories of Living On',
    src: '../assets/images/design/live-on-ny-home@3x.jpg',
    color: '#4848fd',
    isDefault: false,
    mainDescription: 'Matter Unlimited was tasked with redesigning the LiveOnNY website and developing new media content to establish LiveOnNY as the trusted organizational authority on organ donation.',
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
        type: Type.Text,
        text: [
          {
            type: TextType.Body,
            value: 'As the Art Director for this project, I led the creative development of all new media content for the new website. I worked directly with Maddy Talias to create a new video and photo series chronicling the life-changing impact of organ donation. We featured real-life stories from organ donation recipients, donors, and people waiting for an organ donation.',
          },
          {
            type: TextType.Body,
            value: 'We then used these stories, along with impactful data-driven infographics, to create new engaging content to populate the new website. I also completed the UI design for the website.',
          },
        ],
      },
      {
        type: Type.Video,
        videoId: 'YHMYcYJ-RBc',
      },
      {
        type: Type.Video,
        videoId: '1HfytvbHxfM',
      },
      {
        type: Type.Video,
        videoId: 'mx3JGVuU4GA',
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
            value: 'Utility-driven Structure',
          },
          {
            type: TextType.Body,
            value: 'We created a modular website with a utility-driven structure and new, supportive hierarchy for content to facilitate exploration and inspiration.',
          },
          {
            type: TextType.Body,
            value: 'By building the site in modules, the client is able to build customized layouts for each page to best support the narrative being presented – whether that be using videos, long form articles, infographics, etc. The featured story or content leads the page and additional supporting info is contextualized to support a clear, narrative voice. We created persistent CTA’s throughout the page and introduced “launch points” for further exploration.',
          },
          {
            type: TextType.Body,
            value: 'The single page scroll gives a direct structure for ease of content consumption. The emphasis is placed on needed information and the sub navigation structure surfaces relevant content.',
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
