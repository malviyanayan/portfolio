import { motion } from "framer-motion";
import { Download, Mail, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Typewriter } from "./Typewriter";
import { Panel } from "./Panel";

export const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <Panel id="hero" filename="~/portfolio/_hello.tsx" language="tsx" accent="sun" sticker="hi! 👋">
      <div className="font-mono text-sm leading-7 overflow-x-auto">
        <div className="syn-c min-w-0">{`// boot sequence — v.2026`}</div>
        <div className="whitespace-nowrap">
          <span className="syn-k">const</span> <span className="syn-v">me</span> <span className="text-muted-foreground">=</span>{" "}
          <span className="text-muted-foreground">{`{`}</span>
        </div>
        <div className="pl-4 sm:pl-6 whitespace-nowrap">
          <span className="syn-t">name</span><span className="text-muted-foreground">:</span>{" "}
          <span className="syn-s">"Nayan Malviya"</span><span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4 sm:pl-6 whitespace-nowrap">
          <span className="syn-t">role</span><span className="text-muted-foreground">:</span>{" "}
          <span className="syn-s">
            "<Typewriter words={profile.typewriter} className="syn-s" />"
          </span><span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4 sm:pl-6 whitespace-nowrap">
          <span className="syn-t">based_in</span><span className="text-muted-foreground">:</span>{" "}
          <span className="syn-s">"Jabalpur, India"</span><span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4 sm:pl-6 whitespace-nowrap">
          <span className="syn-t">status</span><span className="text-muted-foreground">:</span>{" "}
          <span className="syn-s">"open to opportunities"</span> <span className="syn-c hidden sm:inline">{`// 🟢 available`}</span>
        </div>
        <div className="text-muted-foreground">{`}`};</div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 font-sans text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
      >
        Building <span className="relative inline-block">
          <span className="text-accent">delightful</span>
          <span className="absolute inset-x-0 -bottom-1 h-3 -z-10 bg-sun/60" />
        </span>{" "}
        <br className="hidden sm:block" />
        software, <span className="font-hand text-[1.05em] text-hot">one</span> commit at a time.
      </motion.h1>

      <p className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">{profile.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resumeUrl}
          download
          className="group relative inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          resume.pdf
          <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-neon text-[10px] font-bold text-rail">↓</span>
        </a>
        <button
          onClick={() => go("contact")}
          className="group inline-flex items-center gap-2 rounded-md border-2 border-foreground bg-background px-5 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
        >
          <Mail className="h-4 w-4" />
          say hi →
        </button>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-3 text-sm transition-colors hover:bg-secondary/70"
        >
          <Terminal className="h-4 w-4" />
          <span className="font-mono text-xs">$ git clone</span>
        </a>
      </div>

      {/* sticky-note style stats */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { k: "300+", v: "DSA solved", color: "bg-sun", rot: "-rotate-2" },
          { k: "10+", v: "Projects shipped", color: "bg-neon", rot: "rotate-1" },
          { k: "7.80", v: "CGPA / 10", color: "bg-hot text-background", rot: "-rotate-1" },
          { k: "2026", v: "Graduating", color: "bg-sky text-background", rot: "rotate-2" },
        ].map((s) => (
          <motion.div
            key={s.v}
            whileHover={{ rotate: 0, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`${s.color} ${s.rot} rounded-md p-4 shadow-md`}
          >
            <div className="font-sans text-2xl font-bold">{s.k}</div>
            <div className="font-mono text-[11px] opacity-80">{s.v}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        scroll, hover, click — everything's a little playful.
      </div>
    </Panel>
  );
};
