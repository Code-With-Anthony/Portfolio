import {
  frontend,
  javascript,
  nodejs,
  problemSolving,
  react,
  nirmaRankCertification,
} from "@/assets/certificates";
import {HackerRankIcon, NirmaIcon} from "@/assets/icons"

export const CertificationsData = [
  {
    name: "Frontend Development",
    certification: "Hacker Rank",
    description:
      "This certification validates strong proficiency in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. It demonstrates the ability to structure, style, and enhance web content effectively.",
    image: frontend,
    avatar: HackerRankIcon,
    link: "https://www.hackerrank.com/certificates/iframe/c0d4aaa992fb",
  },
  {
    name: "7th Highest Rank in Nirma",
    certification: "Nirma University",
    description:
      "This recognition was awarded for ranking among the top 7 students in the MCA program, including a perfect 10/10 CGPA in the fourth semester. It reflects consistent academic excellence and dedication to learning.",
    image: nirmaRankCertification,
    avatar: NirmaIcon,
    link: "https://www.linkedin.com/in/anthony-dourado/recent-activity/images/",
  },
  {
    name: "JavaScript",
    certification: "Hacker Rank",
    description:
      "This certification demonstrates in-depth understanding of JavaScript fundamentals and advanced concepts, such as closures, asynchronous programming, and ES6+ features used in modern development.",
    image: javascript,
    avatar: HackerRankIcon,
    link: "https://www.hackerrank.com/certificates/iframe/6ffb51b90719",
  },
  {
    name: "Problem Solving",
    certification: "Hacker Rank",
    description:
      "This certification highlights advanced problem-solving skills using algorithms and data structures. It showcases the ability to write optimized code and solve technical challenges efficiently under constraints.",
    image: problemSolving,
    avatar: HackerRankIcon,
    link: "https://www.hackerrank.com/certificates/iframe/55ce9af084f5",
  },
  {
    name: "Node JS",
    certification: "Hacker Rank",
    description:
      "This certification verifies backend development skills using Node.js, including building RESTful APIs, handling asynchronous operations, and integrating with databases to support scalable applications.",
    image: nodejs,
    avatar: HackerRankIcon,
    link: "https://www.hackerrank.com/certificates/iframe/14fca4f8d21f",
  },
  {
    name: "React",
    certification: "Hacker Rank",
    description:
      "This certification confirms the ability to build interactive, component-based UIs using React. It covers state management, hooks, and performance optimization techniques in frontend applications.",
    image: react,
    avatar: HackerRankIcon,
    link: "https://www.hackerrank.com/certificates/iframe/dfcacc7fe8f1",
  },
];