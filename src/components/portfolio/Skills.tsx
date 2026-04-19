import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Panel } from "./Panel";

const colors = [
  "bg-accent text-accent-foreground",
  "bg-neon text-rail",
  "bg-hot text-background",
  "bg-sun text-foreground",
  "bg-sky text-background",
];

export const Skills = () => {
  const groups = Object.entries(skills);
  return (
    <Panel id="skills" filename="~/portfolio/stack.json" language="json" accent="neon" sticker="my toolbox 🧰">
      <div className="font-mono text-xs text-muted-foreground">{`// the stack i build with`}</div>

      <div className="mt-6 font-mono text-sm">
        <span className="text-muted-foreground">{`{`}</span>
        <div className="mt-3 space-y-6 pl-4">
          {groups.map(([cat, list], gi) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              <div className="mb-2 flex items-baseline gap-2">
                <span className="syn-t">"{cat}"</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-muted-foreground">[</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  {list.length} items
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pl-4">
                {list.map((s, i) => (
                  <motion.span
                    key={s}
                    whileHover={{ y: -3, rotate: -2, scale: 1.05 }}
                    className={`inline-flex cursor-default select-none items-center gap-1 rounded-full px-3 py-1 font-mono text-xs shadow-sm ${
                      colors[(gi + i) % colors.length]
                    }`}
                  >
                    "{s}"
                  </motion.span>
                ))}
              </div>
              <div className="mt-1 text-muted-foreground">],</div>
            </motion.div>
          ))}
        </div>
        <span className="text-muted-foreground">{`}`}</span>
      </div>

      <div className="marquee-mask mt-10 overflow-hidden border-y-2 border-dashed border-border py-4">
        <div className="flex w-max animate-marquee gap-8 font-mono text-2xl font-semibold">
          {[...Array(2)].flatMap((_, k) =>
            ["React", "Java", "Spring Boot", "Flutter", "Dart", "Redux", "Node.js", "MongoDB", "MySQL", "Hibernate", "Tailwind", "TypeScript", "Git", "Firebase", "Gemini API"].map((t, i) => (
              <span key={`${k}-${t}`} className={i % 2 ? "text-foreground" : "text-accent"}>
                {t} <span className="text-muted-foreground">·</span>
              </span>
            ))
          )}
        </div>
      </div>
    </Panel>
  );
};
