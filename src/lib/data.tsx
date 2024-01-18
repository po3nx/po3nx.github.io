import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: Experience[] = [
  {
    title: "Web Developer Trainee",
    company: "Innovex Academy, Bhubaneswar, India",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Learn and built responsive UI, optimizing pages for fast response
          using HTML, CSS, JavaScript, ReactJS, Bootstrap 5.
        </li>
        <li className="mb-2">
          🔄 Built reusable components, documented application changes, and
          worked on multiple projects and updates.
        </li>
      </ul>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Software Developer II",
    company: "SearchingYard Software Pvt. Ltd., Bhubaneswar, India",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Worked with advanced web development technologies like ReactJS,
          NextJS, TypeScript, ECMAScript6, JavaScript, Tailwind CSS, Material
          UI, Bootstrap 5, CSS, HTML, and JSON.
        </li>
        <li className="mb-2">
          🔄 Worked on updated versions of React, React-RouterDom, React-Hooks,
          and more.
        </li>
        <li className="mb-2">🔗 Worked on REST API and API integration.</li>
        <li className="mb-2">
          🔥 Developed dynamic applications using FIREBASE.
        </li>
        <li className="mb-2">
          🧠 Specialized in building logic for maximum performance across a vast
          array of devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Coordinated with the development team and worked on projects like
          E-COMMERCE, ERP Management System, Inventory Management System, and
          more.
        </li>
      </ul>
    ),
    icon: <FaReact />,
    date: "2021 - present",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Powershell",
  "Python",
  "Shell Script",
  "Laravel",
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "DevExtreme",
  ".NET",
  "npm",
  "Yarn",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Rest API",
  "MySQL",
  "MariaDB",
  "Ms. SQL Server",
  "MongoDB",
  "Firebase",
  "Nginx",
  "Apache",
  "Jekins",
] as const;
