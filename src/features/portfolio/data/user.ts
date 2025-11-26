import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Noah",
  lastName: "Buergler",
  displayName: "Noah",
  username: "noahb",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Open Source Enthusiast",
  ],
  address: "Stuttgart, Germany",
  phoneNumber: "KzQ5IDE3MiAyNTkyNDk3", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bm9haGJAaGV5LmNvbQ==", // base64 encoded
  website: "https://noah.stardive.live",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Developer",
      company: "levigo solutions gmbh",
      website: "https://levigo.de",
    },
    {
      title: "Student",
      company: "HdM Stuttgart",
      website: "https://hdm-stuttgart.de",
    },
  ],
  about: `
- **Software Developer** with **7+ years of experience**, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Java**, **Rust**, **Lua**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through thoughtfully crafted personal projects.
- Creator of [STARDIVE](https://stardive.space) (2023): creating developer tools for everyone
  - **HIGHLY WIP** on [Github](https://github.com/NQMVD/stardive)
  - **10+ Apps** planned and in the Workings
`,
  avatar: "https://avatars.githubusercontent.com/u/99403507?v=4",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1763205174",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Europe/Berlin",
  keywords: [
    "noah",
    "needs",
    "boss",
    "warp",
    "scord",
    "luatask",
    "love track",
    "loveui",
  ],
  dateCreated: "2025-11-25", // YYYY-MM-DD
};
