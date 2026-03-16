import { ProjectsTabEnum, type Project } from '../types/projects.types'

const GITHUB_BASE_URL = 'https://github.com/DavidAntunezPerez'

const PORTFOLIO_PROJECTS_DATA: Project[] = [
  {
    title: 'Schulte Table',
    description:
      'Interactive Web Application app to boost concentration, eye movement efficiency, and reading skills with Schulte Tables.',
    type: ProjectsTabEnum.WEB,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ViteJS', 'HeroUI'],
    codeLink: `${GITHUB_BASE_URL}/schulte-table-web-app`,
    webLink: 'https://tableschulte.vercel.app',
    imageSrc: '',
  },
  {
    title: 'Programmed Polls',
    description:
      'Create, schedule, and manage polls with Programmed Polls. Enjoy features such as poll voting, results visualization, and much more, all within this project.',
    type: ProjectsTabEnum.BACKEND,
    technologies: ['NodeJS', 'ExpressJS', 'Firebase', 'TypeScript', 'Vercel'],
    codeLink: `${GITHUB_BASE_URL}/programmed-polls-backend-rest-api`,
    webLink: 'https://programmed-polls-backend-rest-api.vercel.app/',
    imageSrc: '',
  },
  {
    title: 'RestaurAPP',
    description:
      'Native Android APP for managing restaurant tables and orders, built with Kotlin and integrated Python for CSV export. Includes authentication, search/filtering, multilingual support, and customizable restaurant profiles.',
    type: ProjectsTabEnum.MOBILE,
    technologies: [
      'Kotlin',
      'Firebase',
      'Figma',
      'TypeScript',
      'Jira',
      'Python',
    ],
    codeLink: `${GITHUB_BASE_URL}/RestaurAPP_Android`,
    webLink: 'https://github.com/DavidAntunezPerez/RestaurAPP_Android/releases',
    imageSrc: '',
  },
  {
    title: 'eTeam Maker',
    description:
      'eTeam Maker is an app for creating and managing eSports leagues, providing player stats, team info, and transfer market updates. Built with Angular and Ionic Framework, it offers a seamless experience for eSports enthusiasts.',
    type: ProjectsTabEnum.MOBILE,
    technologies: [
      'Angular',
      'Ionic Framework',
      'TypeScript',
      'Firebase',
      'HTML',
      'SCSS',
    ],
    codeLink: `${GITHUB_BASE_URL}/eteam_mkr`,
    webLink: 'https://github.com/DavidAntunezPerez/eteam_mkr/releases',
    imageSrc: '',
  },
  {
    title: 'The SCP Foundation CRUD',
    description:
      'A web-based CRUD for managing SCP Foundation stories, built with Java, SQL, HTML, CSS, and JavaScript. Allows users to create, edit, and delete entries within the collaborative SCP universe.',
    type: ProjectsTabEnum.MOBILE,
    technologies: [
      'Java',
      'Java Server Pages (JSP)',
      'SQL',
      'HTML',
      'Bootstrap',
      'HTML',
      'SCSS',
    ],
    codeLink: `${GITHUB_BASE_URL}/TheSCPFoundation-CRUD`,
    imageSrc: '',
  },
]

export default PORTFOLIO_PROJECTS_DATA
