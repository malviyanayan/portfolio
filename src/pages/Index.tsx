import { useEffect, useState } from "react";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { SideRail, TopTabs, StatusBar, type SectionId } from "@/components/portfolio/IDEShell";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const SECTIONS: SectionId[] = ["hero", "about", "skills", "projects", "journey", "contact"];

const Index = () => {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    document.title = "Nayan Malviya — Software Engineer & Full-Stack Developer";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio of Nayan Malviya — Aspiring Software Engineer building full-stack web apps with Java, Spring Boot, and React. Based in Jabalpur, India.",
    );
    document.head.appendChild(meta);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground dot-bg">
      <CustomCursor />
      <SideRail active={active} />
      <ThemeToggle />
      <div className="md:pl-14 pb-6">
        <TopTabs active={active} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
      <StatusBar active={active} />
    </main>
  );
};

export default Index;
