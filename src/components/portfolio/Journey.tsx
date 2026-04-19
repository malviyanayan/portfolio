import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/data/portfolio";
import { Panel } from "./Panel";

type Entry = { kind: "exp" | "edu"; title: string; place: string; period: string; bullets?: string[]; detail?: string };

const timeline: Entry[] = [
  ...experience.map((e) => ({ kind: "exp" as const, title: e.role, place: e.company, period: e.period, bullets: e.bullets })),
  ...education.map((e) => ({ kind: "edu" as const, title: e.title, place: e.place, period: e.period, detail: e.detail })),
];

export const Journey = () => (
  <Panel id="journey" filename="~/portfolio/journey.log" language="log" accent="accent" sticker="the path 🛤️">
    <div className="font-mono text-xs text-muted-foreground">$ tail -f journey.log</div>
    <h2 className="mt-3 font-sans text-4xl font-bold sm:text-5xl">
      The <span className="text-accent">journey</span> so far.
    </h2>

    <div className="mt-10 grid gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <ol className="relative space-y-6 border-l-2 border-dashed border-border pl-6">
          {timeline.map((t, i) => {
            const Icon = t.kind === "exp" ? Briefcase : GraduationCap;
            const dotColor = t.kind === "exp" ? "bg-hot" : "bg-sky";
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className={`absolute -left-[33px] top-1.5 grid h-5 w-5 place-items-center rounded-full ${dotColor} ring-4 ring-background`}>
                  <Icon className="h-3 w-3 text-background" />
                </span>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.period}</div>
                <div className="mt-1 font-sans text-lg font-semibold">{t.title}</div>
                <div className="text-sm text-muted-foreground">{t.place}</div>
                {t.bullets && (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-neon">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {t.detail && <div className="mt-1 font-mono text-xs text-accent">{t.detail}</div>}
              </motion.li>
            );
          })}
        </ol>
      </div>

      <div className="md:col-span-2">
        <div className="sticky top-16 rounded-lg border-2 border-foreground bg-card p-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Award className="h-4 w-4 text-sun" /> certifications
          </div>
          <ul className="mt-4 space-y-3">
            {certifications.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-l-2 border-accent/40 pl-3"
              >
                <div className="font-sans text-sm font-semibold">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.body}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Panel>
);
