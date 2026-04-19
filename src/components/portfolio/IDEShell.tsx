import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileCode,
  User,
  Wrench,
  FolderGit2,
  GitBranch,
  Mail,
  Github,
  Instagram,
  Linkedin,
  Code2,
  Search,
  Settings,
  Play,
  Youtube,
} from "lucide-react";
import { profile } from "@/data/portfolio";

export type SectionId = "hero" | "about" | "skills" | "projects" | "journey" | "contact";

const items: { id: SectionId; label: string; file: string; icon: any; color: string }[] = [
  { id: "hero",     label: "intro",     file: "_hello.tsx",     icon: FileCode,    color: "text-sun" },
  { id: "about",    label: "about",     file: "about.md",       icon: User,        color: "text-sky" },
  { id: "skills",   label: "skills",    file: "stack.json",     icon: Wrench,      color: "text-neon" },
  { id: "projects", label: "projects",  file: "projects/",      icon: FolderGit2,  color: "text-hot" },
  { id: "journey",  label: "journey",   file: "journey.log",    icon: GitBranch,   color: "text-accent" },
  { id: "contact",  label: "contact",   file: "contact.sh",     icon: Mail,        color: "text-sun" },
];

export const SideRail = ({ active }: { active: SectionId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: SectionId) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-14 flex-col items-center justify-between border-r border-sidebar-border bg-rail py-3 text-rail-foreground md:flex">
      {/* logo */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => go("hero")}
          className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground transition-transform hover:rotate-12"
          aria-label="Home"
        >
          <span className="font-mono text-sm font-bold">N</span>
        </button>

        <div className="my-1 h-px w-6 bg-sidebar-border" />

        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <div key={it.id} className="group relative">
              <button
                onClick={() => go(it.id)}
                className={`relative grid h-10 w-10 place-items-center rounded-md transition-colors ${
                  isActive ? "bg-sidebar-accent" : "hover:bg-sidebar-accent/60"
                }`}
                aria-label={it.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="rail-indicator"
                    className="absolute -left-3 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-accent"
                  />
                )}
                <Icon className={`h-4 w-4 ${isActive ? it.color : "text-rail-foreground/70"}`} />
              </button>
              {/* tooltip */}
              <span className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 font-mono text-[10px] text-background opacity-0 shadow transition-opacity group-hover:opacity-100">
                {it.file}
              </span>
            </div>
          );
        })}
      </div>

      {/* progress + socials */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-24 w-1 overflow-hidden rounded-full bg-sidebar-accent">
          <motion.div
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-hot via-accent to-sky"
            style={{ height: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[9px] text-rail-foreground/50">{Math.round(progress)}%</span>

        <div className="my-1 h-px w-6 bg-sidebar-border" />
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-rail-foreground/70 hover:text-neon"><Github className="h-4 w-4" /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-rail-foreground/70 hover:text-sky"><Linkedin className="h-4 w-4" /></a>
        <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="text-rail-foreground/70 hover:text-sun"><Code2 className="h-4 w-4" /></a>
        <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-rail-foreground/70 hover:text-hot"><Instagram className="h-4 w-4" /></a>
        <a href={profile.socials.youtube} target="_blank" rel="noreferrer" className="text-rail-foreground/70 hover:text-red-500"><Youtube className="h-4 w-4" /></a>
      </div>
    </aside>
  );
};

export const TopTabs = ({ active }: { active: SectionId }) => {
  const go = (id: SectionId) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="sticky top-0 z-30 flex h-9 items-center gap-0 overflow-x-auto border-b border-border bg-chrome pl-0 md:pl-14 text-chrome-foreground scrollbar-none">
      {items.map((it) => {
        const Icon = it.icon;
        const isActive = active === it.id;
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className={`group flex h-full shrink-0 items-center gap-1.5 border-r border-border px-2.5 sm:px-3 font-mono text-xs transition-colors ${
              isActive ? "tab-active" : "tab-inactive hover:text-foreground"
            }`}
          >
            <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? it.color : ""}`} />
            <span className="hidden sm:inline">{it.file}</span>
            <span className="sm:hidden">{it.label}</span>
            {isActive && <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-accent" />}
          </button>
        );
      })}
      <div className="ml-auto hidden items-center gap-3 px-3 text-muted-foreground md:flex">
        <Search className="h-3.5 w-3.5" />
        <Play className="h-3.5 w-3.5 text-neon" />
        <Settings className="h-3.5 w-3.5" />
      </div>
    </div>
  );
};

export const StatusBar = ({ active }: { active: SectionId }) => {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex h-6 items-center justify-between gap-2 bg-statusbar pl-0 pr-3 font-mono text-[10px] text-statusbar-foreground md:pl-14">
      <div className="flex items-center gap-3 px-3">
        <span className="flex items-center gap-1"><GitBranch className="h-3 w-3" /> main</span>
        <span className="hidden sm:inline">● {active}</span>
        <span className="hidden md:inline">UTF-8</span>
        <span className="hidden md:inline">TSX</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline">📍 Jabalpur</span>
        <span className="sm:hidden">📍 JBP</span>
        <span>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
    </div>
  );
};

export { items as railItems };
