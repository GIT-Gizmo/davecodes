import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Ingrid',
  lastName: 'Fei',
  initials: 'XF', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a designer and a student',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇨🇦🍁🌃',
      text: 'based in the Toronto, Canada',
    },
    {
      emoji: '🎨👨‍💻📱',
      text: 'Designer and Student at UofT',
    },
    {
      emoji: '📧📨📩',
      text: 'xuanfei0126@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://ingrid0126.com/resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://instagram.com/xxuan.i?igshid=YmMyMTA2M2Y=',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/ingrid0126fx',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/ingrid-xuan-fei/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hi there! I'm Xuan Fei, a third-year student studying Communication, Culture, Information & Technology (CCIT) at the University of Toronto. As a passionate UI/UX designer, I enjoy exploring and implementing creative design solutions that elevate user experiences. My skills include Figma, HTML/CSS, Adobe Illustrator, Adobe XD, Photoshop, and Webflow. I am always eager to learn and collaborate with others to achieve the best results. Feel free to connect with me on LinkedIn to see some of my latest design projects.",
  skills: {
    tools: ['Figma', 'Adobe Illustrator', 'Adobe XD', 'Photoshop', 'Webflow'],
    others: ['Basic HTML/CSS', 'User Reasearch', 'Usability Testing']
  },
  hobbies: [
    {
      label: 'Photography',
      emoji: '📷',
    },
    {
      label: 'Guitar',
      emoji: '🎸',
    },
    {
      label: 'Movies',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    }
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Portfolio redesign',
      live: 'https://ingrid0126.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/ingrid0126fx/ingrid-portfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://ingrid0126.com/website.jpg',
    }
  ],
};
