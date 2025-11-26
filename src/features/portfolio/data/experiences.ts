import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "levigo",
    companyName: "levigo solutions gmbh",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Developer",
        employmentPeriod: {
          start: "03.2025",
        },
        employmentType: "Working Student",
        icon: "code",
        description: `- Maintain and enhance the existing codebase of Jadice, a document parsing tool.
- Migrate legacy JUnit 4 tests to JUnit 5 to improve test reliability and maintainability.
        `,
        skills: [
          "Java",
          "JUnit",
          "IntelliJ IDEA",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "Developer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Internship",
        icon: "design",
        description: `- Ensure UI/UX consistency and high-quality standards.
- Design intuitive, user-focused interfaces aligned with business goals.
- Define and establish a cohesive UI style for Simplamo.`,
        skills: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "alianz",
    companyName: "Allianz Lebensversicherung AG",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Dual Student - business informatics",
        employmentPeriod: {
          start: "03.2024",
          end: "2026",
        },
        employmentType: "Dual Study",
        icon: "code",
        description: `- Created Quaric Brand Identity.
- Created the Quaric Design System to standardize design practices and accelerate development.
`,
        skills: ["Research"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Hochschule der Medien — HdM Stuttgart",
        employmentPeriod: {
          start: "03.2025",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Information Systems.
- Language Proficiency: B1 English Level.
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
        skills: [
          "Java",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
        isExpanded: true,
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Duale Hochschule Baden-Württemberg — DHBW Stuttgart",
        employmentPeriod: {
          start: "08.2015",
          end: "06.2018",
        },
        icon: "education",
        description: `- Student of the Specialized Computer Science Program.
- Granted direct admission to university due to achieving 3rd Prize at the national level.
- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
  - 1st Prize — Can Tho City Science and Engineering Fair 2018
  - Creativity Award — Binh Duong Hackathon 2017
  - Consolation Prize — National Youth and Children's Creativity Contest 2016
  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children's Creativity Contest 2016
  - 3rd Prize — National Young Informatics Contest 2016
- Achieved the title of Outstanding Student from Grade 10-12.
- Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
- Honored on the school's "Hall of Fame" for academic achievements.
- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
- Developed websites based on Laravel framework.
- Built websites with PHP and MySQL, following the MVC architecture.`,
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Berufkolleg Sindelfingen",
        employmentPeriod: {
          start: "08.2011",
          end: "06.2015",
        },
        icon: "education",
        description: `- Recognized as the most outstanding student of the district.
- Achieved numerous awards at city and national levels:
  - Consolation Prize — National Young Informatics Contest 2015
  - Consolation Prize — National Young Informatics Contest 2014
  - 1st Prize — Can Tho City Young Informatics Contest 2014
- Achieved the title of Outstanding Student from Grade 6-9.
- Developed websites using the open-source NukeViet CMS.`,
        skills: [
          "Pascal",
          "NukeViet",
          "HTML",
          "CSS",
          "JavaScript",
          "Self-learning",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
];
