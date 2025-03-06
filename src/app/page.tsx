"use client"
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { motion} from "framer-motion";

export default function Home() {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2} },
  };

  return (
    <div>
      <Header />    
      <motion.section 
        id="home" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.section>
      <motion.section 
        id="projects" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ProjectsSection />
      </motion.section>
      <motion.section 
        id="clients" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
      <TapeSection />
        <TestimonialsSection />
      </motion.section>
      <motion.section 
        id="about" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.section>
      <motion.section 
        id="contact" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.section>
      <Footer />
    </div>
  );
}
