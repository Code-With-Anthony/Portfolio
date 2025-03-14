import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ["home", "projects", "about", "contact"];

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const handleScroll = (): void =>{
    // Get current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each section to find which one is in View
    sections.forEach((section)=>{
      const element = document.getElementById(section);
      if(element){
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <=0 && rect.bottom >= window.innerHeight / 2;
        if(isInView){
          setActiveSection(section);
        }
      }
    })
  }

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed left-1/2 transform -translate-x-1/2 top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`}
          onClick={() => handleSectionClick('home')}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900' : ''}`}
          onClick={() => handleSectionClick('projects')}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`}
          onClick={() => handleSectionClick('about')}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`}
          onClick={() => handleSectionClick('contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
