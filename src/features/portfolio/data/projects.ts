import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "needs",
    title: "needs - CLI Tool",
    period: {
      start: "07.2024",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [],
    badges: [
      // hackthebox
      "https://img.shields.io/badge/Rust-fe7a15?style=for-the-badge&logo=rust&logoColor=white&logoSize=auto&labelColor=292324",
      "https://img.shields.io/crates/v/needs.svg?style=for-the-badge&logoColor=white&logoSize=auto&labelColor=292324",
      "https://img.shields.io/badge/Charm-Gum-FAA5EA?style=for-the-badge&labelColor=292324",
      "https://img.shields.io/badge/Charm-Freeze-8CFEFE?style=for-the-badge&labelColor=292324",
      "https://img.shields.io/badge/Bacon-FF8080?style=for-the-badge&labelColor=292324",
      "https://img.shields.io/badge/Just-000000?style=for-the-badge&logo=just&logoColor=white&labelColor=292324",
    ],
    description: `Check if given bin(s) are available on your system and, optionally, get their version.
    <i>...multi-threaded of course..</i>

- ⚡️ Easy installation via cargo CLI
`,
    logo: "https://github.com/NQMVD/needs/blob/master/icon.svg?raw=true",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    badges: [],
    description: `A minimal, pixel-perfect dev portfolio, component registry, and blog.

**Featured:**

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA

**Blog:**

- Supports MDX & Markdown
- Raw \`.mdx\` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

**Registry:**

- Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).
- Each entry is well-documented and includes:
  - Live preview & code snippets
  - Beautiful, readable code blocks
  - One-click command blocks (pnpm, npm, yarn, bun)`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "quaricdotcom",
    title: "quaric.com",
    period: {
      start: "03.2024",
    },
    link: "https://quaric.com",
    skills: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    badges: [],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    badges: [],
    description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension
- 80k+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 20k+ active users via Chrome Web Store (as of Sep 2025)
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "QABox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/qabox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    badges: [],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/taskbox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    badges: [],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
  {
    id: "daichat-app",
    title: "DaiChat App",
    period: {
      start: "07.2020",
      end: "07.2020",
    },
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    skills: ["University Project", "Java", "Java Swing", "Java Networking"],
    badges: [],
    description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Developed a real-time chat application using Java technologies
- Project Score: 10/10
- Source Code:
  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  },
  {
    id: "qlsv-app",
    title: "QLSV App",
    period: {
      start: "06.2020",
      end: "06.2020",
    },
    link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
    badges: [],
    description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Built a student management system with role-based functionalities using Java technologies
- Project Score: 10/10
- Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`,
  },
  {
    id: "penphy",
    title: "Penphy",
    period: {
      start: "01.2019",
      end: "08.2019",
    },
    link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    skills: ["Startup Project", "JavaScript", "React Native"],
    badges: [],
    description: "2nd Prize — Business Startup Competition 2019",
  },
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    period: {
      start: "01.2017",
      end: "08.2018",
    },
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
    badges: [],
    description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — National Young Informatics Contest 2018
- 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
- 3rd Prize — Can Tho City Young Informatics Contest 2018
- Reached 7k+ users, mainly high school students in Can Tho City
- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
    logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  },
  {
    id: "dmessage",
    title: "DMessage",
    period: {
      start: "05.2017",
      end: "05.2017",
    },
    link: "https://github.com/ncdai/DMessage",
    skills: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    badges: [],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    period: {
      start: "11.2016",
      end: "12.2017",
    },
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    badges: [],
    description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
- Consolation Prize — National Youth and Children's Creativity Contest 2016
- 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
- Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  },
];
