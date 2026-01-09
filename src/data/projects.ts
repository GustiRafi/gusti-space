export type ProjectStatus = 'merged' | 'shipped' | 'archived' | 'wip';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'ata-tour-backoffice',
    description:
      'Core back-office system for managing tour packages, transactions, reports, and partner integrations.',
    stack: 'Laravel, Nuxt 3, Vue 3, Tailwind, mySql',
    status: 'shipped',
    statusLabel: 'live',
    year: '2023',
  },
  {
    id: '2',
    title: 'pergiyuks-transactions',
    description:
      'Customer-facing travel booking platform powering PergiYuks, Jaditerbang, and SAP CBO.',
    stack: 'Nuxt 3, Vue 3, Bootstrap, REST API',
    status: 'shipped',
    statusLabel: 'live',
    year: '2023',
  },
  {
    id: '3',
    title: 'whatsapp-blaster-api',
    description:
      'Bulk WhatsApp messaging service supporting text, images, and file delivery via web interface.',
    stack: 'Node.js, Express, Venom Bot, PostgreSQL',
    status: 'merged',
    statusLabel: 'completed',
    year: '2024',
    github: 'https://github.com/GustiRafi/MessageBlast',
  },
  {
    id: '4',
    title: 'restaurant-reservation-system',
    description:
      'Restaurant reservation system with date blocking, booking validation, and admin management.',
    stack: 'Laravel, Bootstrap, jQuery, MySQL',
    status: 'shipped',
    statusLabel: 'client delivery',
    year: '2023',
  },
  {
    id: '5',
    title: 'wisata-jogja-directory',
    description:
      'Tourism directory website for Yogyakarta with search, comments, and content management.',
    stack: 'Laravel, Bootstrap, jQuery',
    status: 'merged',
    statusLabel: 'internship project',
    year: '2022',
    github: 'https://github.com/GustiRafi/wisatajogja',
  },
  {
    id: '6',
    title: 'otakudesu-unofficial-api',
    description:
      'Unofficial anime API built via web scraping to fetch anime data and streaming links.',
    stack: 'Node.js, Axios, Cheerio',
    status: 'archived',
    statusLabel: 'side project',
    year: '2023',
    github: 'https://github.com/GustiRafi/otakudesuApi',
  },
];
