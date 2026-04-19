import { type ReactNode } from "react";
import { motion } from "framer-motion";

export const Panel = ({
  id,
  filename,
  language = "tsx",
  accent = "accent",
  children,
  sticker,
}: {
  id: string;
  filename: string;
  language?: string;
  accent?: "accent" | "neon" | "hot" | "sun" | "sky";
  children: ReactNode;
  sticker?: string;
}) => {
  const accentMap: Record<string, string> = {
    accent: "bg-accent",
    neon: "bg-neon",
    hot: "bg-hot",
    sun: "bg-sun",
    sky: "bg-sky",
  };
  return (
    <section id={id} className="relative scroll-mt-12 px-4 py-12 sm:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="panel relative overflow-hidden"
        >
          {/* file header */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-chrome/60 px-4 py-2">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-hot/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-sun/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
              </span>
              <span className="ml-2 text-muted-foreground">{filename}</span>
              <span className={`ml-2 inline-block h-1.5 w-1.5 rounded-full ${accentMap[accent]}`} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{language}</span>
          </div>

          {sticker && (
            <span className="sticker absolute -top-3 right-6 z-10 bg-sun text-foreground shadow-md">
              {sticker}
            </span>
          )}

          <div className="relative grid grid-cols-1 sm:grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_1fr]">
            {/* gutter — hidden on mobile */}
            <div className="hidden sm:block select-none border-r border-border bg-chrome/30 py-6 text-right font-mono text-[10px] leading-6 text-muted-foreground/60">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="pr-2">{i + 1}</div>
              ))}
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">{children}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
