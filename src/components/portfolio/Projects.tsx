import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Folder, Github, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Panel } from "./Panel";

export const Projects = () => {
  const [open, setOpen] = useState<number | null>(null);
  const project = open !== null ? projects[open] : null;

  return (
    <Panel id="projects" filename="~/portfolio/projects/" language="dir" accent="hot" sticker="ship it 🚀">
      <div className="font-mono text-xs text-muted-foreground">$ ls -la projects/</div>
      <h2 className="mt-3 font-sans text-4xl font-bold sm:text-5xl">
        Things I've <span className="relative inline-block">
          <span className="text-hot">built</span>
          <span className="squiggle absolute inset-x-0 -bottom-2 text-hot" />
        </span>
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => {
          const colorRing = ["hover:border-accent", "hover:border-neon", "hover:border-hot", "hover:border-sky", "hover:border-sun"][i % 5];
          return (
            <motion.button
              key={p.title}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-lg border-2 border-border bg-card p-5 text-left transition-all ${colorRing}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Folder className="h-4 w-4 text-sun" />
                  <span>{p.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}/</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    p.status === "Completed" ? "bg-neon/20 text-neon" :
                    p.status === "Ongoing" ? "bg-accent/20 text-accent" :
                    "bg-muted text-muted-foreground"
                  }`}>{p.status}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px]">{p.year}</span>
                </div>
              </div>

              <h3 className="mt-3 font-sans text-xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px]">{s}</span>
                ))}
                {p.stack.length > 4 && <span className="font-mono text-[10px] text-muted-foreground">+{p.stack.length - 4}</span>}
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                read more →
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="panel relative w-full max-w-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-border bg-chrome/60 px-4 py-2 font-mono text-xs">
                <span className="flex items-center gap-2">
                  <Folder className="h-3.5 w-3.5 text-sun" />
                  {project.title}
                </span>
                <button onClick={() => setOpen(null)} className="grid h-6 w-6 place-items-center rounded hover:bg-secondary">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{project.year}</div>
                <h3 className="mt-1 font-sans text-3xl font-bold">{project.title}</h3>
                <p className="mt-3 text-foreground/80">{project.description}</p>

                <div className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">// highlights</div>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-neon">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">// stack</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded bg-secondary px-2 py-1 font-mono text-[11px]">{s}</span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background hover:bg-accent">
                      <ExternalLink className="h-4 w-4" /> live demo
                    </a>
                  )}
                  {project.github && (
                    <a href={`https://github.com/nayanmalviya/${project.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border-2 border-foreground px-4 py-2 text-sm hover:bg-secondary">
                      <Github className="h-4 w-4" /> source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Panel>
  );
};
