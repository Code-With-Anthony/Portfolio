import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import { HeroOrbit } from "@/components/HeroOrbit";
import {
  HeroConnectButtonText,
  HeroDescription,
  HeroExploreButtonText,
  HeroTagLine,
} from "@/constants/HeroConstant";
import { changingTextArray } from "@/data/HeroData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleNavigateToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      // Smooth scroll to the projects section
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % changingTextArray.length
      );
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="Person Peeking from behind laptop"
            />
          </motion.div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new {""}
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.2, 1], // Typing effect with scaling
                  rotate: [10, -10, 0], // Slight rotation for dynamic effect
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                className="text-emerald-300"
              >
                {changingTextArray[currentWordIndex]}
              </motion.span>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <motion.h1
            className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {HeroTagLine}
          </motion.h1>
          <motion.p
            className="mt-4 text-center text-white/60 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {HeroDescription}
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <motion.button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10"
            onClick={handleNavigateToProjects}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-semibold">{HeroExploreButtonText}</span>
            <ArrowDown className="size-4" />
          </motion.button>
          <a
            href="https://www.linkedin.com/in/anthony-dourado/"
            target="_blank"
            // rel="noopener noreferrer"
            className="z-10"
          >
            <motion.button
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <span>👋</span>
              <span className="font-semibold">{HeroConnectButtonText}</span>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};
