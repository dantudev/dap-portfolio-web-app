import { ProjectsTabEnum, type Project } from '../types/projects.types'
import RestaurappImgPreview from '@assets/images/restaurapp-preview.webp'
import DantudevPortfolioImgPreview from '@assets/images/dap-web-portfolio-preview.webp'
import {
  EteamMakerIcon,
  SchulteTableIcon,
  SCPCrudIcon,
  ProgrammedPollsIcon,
  RobotIcon,
} from '@/assets/icons'
import { GITHUB_URL } from '@/app/consts/global.consts'

const PORTFOLIO_PROJECTS_DATA: Project[] = [
  {
    title: 'Dantudev Portfolio',
    description:
      'This one is really self-explanatory, isn’t it? Built with React, TypeScript, TailwindCSS, and Vite, this portfolio website showcases my projects, experience, and skills in a clean and modern design.',
    type: ProjectsTabEnum.WEB,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'ViteJS',
      'HeroUI',
      'EmailJS',
    ],
    codeLink: `${GITHUB_URL}/dap-portfolio-web-app`,
    imageSrc: DantudevPortfolioImgPreview,
    bgColor: '#fff',
  },
  {
    title: 'Schulte Table',
    description:
      'A modern and interactive web application for training visual perception, attention, and reading speed using Schulte tables. The project is built with React, TailwindCSS, and HeroUI, with a focus on clean design, performance, and usability.',
    type: ProjectsTabEnum.WEB,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'ViteJS',
      'HeroUI',
      'EmailJS',
    ],
    codeLink: `${GITHUB_URL}/schulte-table-web-app`,
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
    codeLink: `${GITHUB_URL}/programmed-polls-backend-rest-api`,
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
    codeLink: `${GITHUB_URL}/RestaurAPP_Android`,
    webLink: `${GITHUB_URL}/RestaurAPP_Android/releases`,
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
    codeLink: `${GITHUB_URL}/eteam_mkr`,
    webLink: `${GITHUB_URL}/eteam_mkr/releases`,
    altIcon: EteamMakerIcon({ className: 'w-30 h-30 text-[#112770]' }),
    bgColor: '#FFEBA7',
  },
  {
    title: 'The SCP Foundation CRUD',
    description:
      'A web-based CRUD for managing SCP Foundation stories, built with Java, SQL, HTML, CSS, and JSP. Allows users to create, edit, and delete entries within the collaborative SCP universe.',
    type: ProjectsTabEnum.WEB,
    technologies: ['Java', 'Java Server Pages', 'SQL', 'HTML', 'Bootstrap'],
    codeLink: `${GITHUB_URL}/TheSCPFoundation-CRUD`,
    altIcon: SCPCrudIcon({ className: 'w-30 h-30 text-[#FFEAA8]' }),
    bgColor: '#1F2029',
  },
  {
    title: 'VLR Daily Digest Bot',
    description:
      'An automated backend system that tracks, filters, and ranks upcoming Valorant competitive matches using the Gemini LLM. It delivers a personalized, high-priority digest directly to Telegram daily, operating entirely serverless.',
    type: ProjectsTabEnum.BACKEND,
    technologies: [
      'Python',
      'GitHub Actions',
      'Gemini API',
      'Telegram API',
      'Ruff',
    ],
    codeLink: `${GITHUB_URL}/vlr-daily-digest-bot`,
    altIcon: RobotIcon({ className: 'w-30 h-30 text-[#FF5461]' }),
    bgColor: '#0F1923',
  },
]

export default PORTFOLIO_PROJECTS_DATA
