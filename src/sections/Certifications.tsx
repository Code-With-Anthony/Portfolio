import {
  frontend,
  javascript,
  nodejs,
  problemSolving,
  react,
  nirmaRankCertification,
} from "@/assets/certificates";
import HackerRank from "@/assets/icons/hackerRankLogo.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
import nirmaLogo from "@/assets/icons/nirma.png";

const certifications = [
  {
    name: "Frontend Development",
    certification: "Hacker Rank",
    description:
      "This certification validates strong proficiency in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. It demonstrates the ability to structure, style, and enhance web content effectively.",
    image: frontend,
    avatar: HackerRank,
    link: "https://www.hackerrank.com/certificates/iframe/c0d4aaa992fb",
  },
  {
    name: "7th Highest Rank in Nirma",
    certification: "Nirma University",
    description:
      "This recognition was awarded for ranking among the top 7 students in the MCA program, including a perfect 10/10 CGPA in the fourth semester. It reflects consistent academic excellence and dedication to learning.",
    image: nirmaRankCertification,
    avatar: nirmaLogo,
    link: "https://www.linkedin.com/in/anthony-dourado/recent-activity/images/",
  },
  {
    name: "JavaScript",
    certification: "Hacker Rank",
    description:
      "This certification demonstrates in-depth understanding of JavaScript fundamentals and advanced concepts, such as closures, asynchronous programming, and ES6+ features used in modern development.",
    image: javascript,
    avatar: HackerRank,
    link: "https://www.hackerrank.com/certificates/iframe/6ffb51b90719",
  },
  {
    name: "Problem Solving",
    certification: "Hacker Rank",
    description:
      "This certification highlights advanced problem-solving skills using algorithms and data structures. It showcases the ability to write optimized code and solve technical challenges efficiently under constraints.",
    image: problemSolving,
    avatar: HackerRank,
    link: "https://www.hackerrank.com/certificates/iframe/55ce9af084f5",
  },
  {
    name: "Node JS",
    certification: "Hacker Rank",
    description:
      "This certification verifies backend development skills using Node.js, including building RESTful APIs, handling asynchronous operations, and integrating with databases to support scalable applications.",
    image: nodejs,
    avatar: HackerRank,
    link: "https://www.hackerrank.com/certificates/iframe/14fca4f8d21f",
  },
  {
    name: "React",
    certification: "Hacker Rank",
    description:
      "This certification confirms the ability to build interactive, component-based UIs using React. It covers state management, hooks, and performance optimization techniques in frontend applications.",
    image: react,
    avatar: HackerRank,
    link: "https://www.hackerrank.com/certificates/iframe/dfcacc7fe8f1",
  },
];

export const Certifications = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="CertificationContainer">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            eyebrow="Certifications"
            title="What Certification Say about me"
            description="Don't just take my word for it. See what my certification have to say about my
        work."
          />
        </motion.div>

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, ind) => (
              <Fragment key={ind}>
                {certifications.map((cert) => (
                  <a
                    key={cert.certification}
                    href={cert.link} // Navigate to the HackerRank certificate page
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security best practices
                    className="group" // Add a hover effect for the entire card
                  >
                    <Card
                      key={cert.certification}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={cert.avatar}
                            alt={cert.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{cert.name}</div>
                          <div className="text-sm text-white/40">
                            {cert.certification}
                          </div>
                        </div>
                      </div>

                      {/* Show the Description */}
                      <p className="mt-4 md:mt-6 text-sm md:text-base text-justify line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {cert.description}
                      </p>

                      {/* Show the PNG Image */}
                      <div className="mt-4 md:mt-6">
                        <Image
                          src={cert.image}
                          alt={`${cert.certification} Certificate`}
                          width={400}
                          height={200}
                          className="rounded-md border border-white/10"
                          priority
                        />
                      </div>
                    </Card>
                  </a>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
