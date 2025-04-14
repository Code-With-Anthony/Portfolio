"use client";

import mapImage from "@/assets/images/ABDImage.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { AboutSectionConstant } from "@/constants/AboutConstant";
import { hobbies } from "@/data/AboutData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export const HobbiesCard = () => {
  const constraintRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <Card
        className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2"
        title="move hobbies freely"
      >
        <CardHeader
          title={AboutSectionConstant.HobbiesCard.title}
          description={AboutSectionConstant.HobbiesCard.description}
          className="px-6 py-6"
        />
        <div className="relative flex-1" ref={constraintRef}>
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              className={`inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ left: hobby.left, top: hobby.top }}
              drag
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              dragConstraints={constraintRef}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            >
              <span className="font-medium text-gray-950">{hobby.title}</span>
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
          <Image src={smileEmoji} alt="smiling emoji" className="size-20" />
        </div>
      </Card>
    </>
  );
};
