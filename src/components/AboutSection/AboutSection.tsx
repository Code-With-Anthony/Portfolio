"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { MyReadsCard } from "./MyReadsCard";
import { ToolboxCard } from "./ToolBoxCard";
import { HobbiesCard } from "./HobbiesCard";
import { motion } from "framer-motion";
import { AboutSectionConstant } from "@/constants/AboutConstant";

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            eyebrow={AboutSectionConstant.AboutSectionHeader.about.eyebrow}
            title={AboutSectionConstant.AboutSectionHeader.about.title}
            description={
              AboutSectionConstant.AboutSectionHeader.about.description
            }
          />
        </motion.div>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <MyReadsCard />
            <ToolboxCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <HobbiesCard />
          </div>
        </div>
      </div>
    </div>
  );
};
