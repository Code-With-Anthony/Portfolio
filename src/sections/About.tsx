"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ZodIcon from "@/assets/icons/zod.svg";
import TesseractIcon from "@/assets/icons/tesseract.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NodeJSIcon from "@/assets/icons/nodejs.svg";
import TailwindCSSIcon from "@/assets/icons/tailwind-css.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import PostManIcon from "@/assets/icons/postman-api.svg";
import ExpressJsIcon from "@/assets/icons/expressJSIcon.svg";
import TypeScriptIcon from "@/assets/icons/typescriptIcon.svg";
import MYSQLIcon from "@/assets/icons/mysql.svg";
import MUIIcon from "@/assets/icons/material-ui.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import mapImage from "@/assets/images/ABDImage.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  // Core Web Technologies
  { title: "HTML5", iconType: HTML5Icon },
  { title: "CSS3", iconType: CSS3Icon },
  { title: "JavaScript", iconType: JavascriptIcon },

  // Frontend Technologies & Frameworks
  { title: "React", iconType: ReactIcon },
  { title: "Redux", iconType: ReduxIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "Tailwind", iconType: TailwindCSSIcon },
  { title: "MUI", iconType: MUIIcon },

  // Backend Technologies & Databases
  { title: "Node.js", iconType: NodeJSIcon },
  { title: "ExpressJS", iconType: ExpressJsIcon },
  { title: "MongoDB", iconType: MongoDBIcon },
  { title: "MySQL", iconType: MYSQLIcon },

  // Tools & Libraries
  { title: "GitHub", iconType: GithubIcon },
  { title: "Postman", iconType: PostManIcon },
  { title: "Zod", iconType: ZodIcon },
  { title: "Tesseract", iconType: TesseractIcon },

  // Other Skills & Design Tools
  { title: "Python", iconType: PythonIcon },
  { title: "Figma", iconType: FigmaIcon },
];

const hobbies = [
  {
    title: "Coding",
    emoji: "💻",
    left: "5%",
    top: "5%",
  },
  {
    title: "Documentation",
    emoji: "📚",
    left: "50%",
    top: "5%",
  },
  {
    title: "Open Source Contribution",
    emoji: "🌍",
    left: "35%",
    top: "40%",
  },
  {
    title: "Web Design",
    emoji: "🌐",
    left: "10%",
    top: "35%",
  },
  {
    title: "Puzzles",
    emoji: "🧩",
    left: "70%",
    top: "45%",
  },
  {
    title: "Tech Meetups",
    emoji: "🤖",
    left: "5%",
    top: "65%",
  },
  {
    title: "Blogging",
    emoji: "✍️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse into my world"
            description="Learn more about who I am, What I do, and what inspires me."
          />
        </motion.div>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px]">
                <CardHeader
                  title="My Reads"
                  description="Explore the book shaping my perspectives"
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Image src={bookImage} alt="Book cover" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />

              <ToolboxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card
              className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2"
              title="move hobbies freely"
            >
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileEmoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
