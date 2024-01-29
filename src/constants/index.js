import { meta, shopify, starbucks, tesla, vinci, tractebel,istya } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "SAP Full Stack Developer",
        company_name: "Vinci Construction S.I",
        icon: vinci,
        iconBg: "#ffffff ",
        date: "May 2023 - November 2023",
        points: [
            "Participate in SAP projects from the design phase to deployment, including unit test development.",
            "Modules covered: SAP HR, SAP FI, SAP CO, SAP SD",
        ],
    },
    {
        title: "BIM Developer",
        company_name: "Tractebel - ENGIE Group",
        icon: tractebel,
        iconBg: "#accbe1",
        date: "Avp 2022 - Aug 2022",
        points: [
            "Setting up an SQL database for Civil Engineering execution study projects.",
            "Attached to the GCR Unit (Civil Engineering of Reactors)",
            "Nuclear & Industry Unit Directorate. Data processing in C# and use of MS SQL.",
        ],
    },
    {
        title: "Project Manager and developer",
        company_name: "Istya",
        icon: istya,
        iconBg: "#b7e4c7",
        date: "Sep 2021 - Feb 2022",
        points: [
            "Create a prediction algorithm to combat pollution episodes.",
            "Use of jupyter notebook for python scripts and Angular for the frontend part.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'threejsportfolio/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/srikanthsc',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/srikanth-collaty-9343a520b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Development of a direct sales application for local products',
        description: 'Created a prototype on Figma for a mobile application, utilized Flutter for development, all while aligning with the client\'s feedback.',
        link: 'https://github.com/srikanthsc/Capprojet',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Big Data Project (Creating a big data architecture)',
        description: 'Utilized Scrapy, a Python web scraping framework, to efficiently extract data from a website. Employed Hadoop HDFS, a distributed file system, for robust and scalable data storage. Performed comprehensive data cleaning and transformation using Apache Hive, leveraging its SQL-like capabilities. Employed Hadoop MapReduce for data analysis, enabling aggregations, calculations, and large-scale data processing. Created insightful visualizations with Plotly and Dash to provide clear data representation. Developed an interactive dashboard using Grafana to deliver an engaging and user-friendly interface for data exploration and visualization.',
        link: 'https://github.com/srikanthsc/bigdatascript',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'R project (Manipulating data)',
        description: 'We need to populate an Excel sheet with variousdata (informations about manga’s characters) on a chosen topic in order, to manipulate the R language and demonstrate different possible cases.',
        link: 'https://github.com/srikanthsc/R-project',
    }
];