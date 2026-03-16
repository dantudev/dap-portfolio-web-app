import { ProgrammedPollsIcon } from '@/assets/icons'
import { ProjectsTabEnum, type Project } from '../types/projects.types'
import RestaurappImgPreview from '@assets/images/restaurapp_preview.webp'
import { EteamMakerIcon, SchulteTableIcon, SCPCrudIcon } from '@/assets/icons/FallbackProjectIcons'


const GITHUB_BASE_URL = 'https://github.com/DavidAntunezPerez'

const PORTFOLIO_PROJECTS_DATA: Project[] = [
  {
    title: 'Schulte Table',
    description:
      'A modern and interactive web application for training visual perception, attention, and reading speed using Schulte tables. The project is built with React, TailwindCSS, and HeroUI, with a focus on clean design, performance, and usability.',
    type: ProjectsTabEnum.WEB,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ViteJS', 'HeroUI'],
    codeLink: `${GITHUB_BASE_URL}/schulte-table-web-app`,
    webLink: 'https://tableschulte.vercel.app',
    altIcon: SchulteTableIcon({ className: 'w-30 h-30 text-[#f2f2f2]' }),
    bgColor: '#222',
  },
  {
    title: 'Programmed Polls',
    description:
      'Create, schedule, and manage polls with Programmed Polls. Enjoy features such as poll voting, results visualization, and much more, all within this project.',
    type: ProjectsTabEnum.BACKEND,
    technologies: ['NodeJS', 'ExpressJS', 'Firebase', 'TypeScript', 'Vercel'],
    codeLink: `${GITHUB_BASE_URL}/programmed-polls-backend-rest-api`,
    webLink: 'https://programmed-polls-backend-rest-api.vercel.app/',
    altIcon: ProgrammedPollsIcon({ className: 'w-30 h-30 text-[#f2f2f2]' }),
    bgColor: '#444444',
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
    imageSrc: RestaurappImgPreview,
  },
  {
    title: 'eTeam Maker',
    description:
      'Web application for creating and managing eSports leagues, providing player stats, team info, and transfer market updates. Built with Angular and Ionic Framework, it offers a seamless experience for eSports enthusiasts.',
    type: ProjectsTabEnum.WEB,
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
    altIcon: EteamMakerIcon({ className: 'w-30 h-30 text-[#112770]' }),
    bgColor: '#FFEBA7',
  },
  {
    title: 'The SCP Foundation CRUD',
    description:
      'A web-based CRUD for managing SCP Foundation stories, built with Java, SQL, HTML, CSS, and JSP. Allows users to create, edit, and delete entries within the collaborative SCP universe.',
    type: ProjectsTabEnum.WEB,
    technologies: [
      'Java',
      'Java Server Pages',
      'SQL',
      'HTML',
      'Bootstrap',
      'HTML',
      'SCSS',
    ],
    codeLink: `${GITHUB_BASE_URL}/TheSCPFoundation-CRUD`,
    altIcon: SCPCrudIcon({ className: 'w-30 h-30 text-[#FFEAA8]' }),
    bgColor: '#1F2029',
  },
]

export default PORTFOLIO_PROJECTS_DATA
