import { motion } from "framer-motion";
import { Coffee, Heart, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Panel } from "./Panel";

export const About = () => (
  <Panel id="about" filename="~/portfolio/about.md" language="markdown" accent="sky" sticker="who? 🤔">
    <div className="font-mono text-xs text-muted-foreground"># about.md</div>
    <h2 className="mt-3 font-sans text-4xl font-bold sm:text-5xl">
      Hey, I'm <span className="text-accent">Nayan</span>.
      <span className="font-hand text-3xl text-hot"> nice to meet you!</span>
    </h2>

    <div className="mt-8 grid gap-8 md:grid-cols-5">
      <div className="space-y-4 text-base text-foreground/85 md:col-span-3">
        {profile.about.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      <div className="space-y-3 md:col-span-2">
        <div className="rounded-md border-2 border-dashed border-accent/50 bg-accent/5 p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">// quick facts</div>
          <ul className="mt-2 space-y-2 font-mono text-sm">
            <li><span className="syn-k">location:</span> <span className="syn-s">"{profile.location}"</span></li>
            <li><span className="syn-k">grad:</span> <span className="syn-n">2026</span></li>
            <li><span className="syn-k">stack:</span> <span className="syn-s">"Java + React"</span></li>
            <li><span className="syn-k">fuel:</span> <Coffee className="inline h-3.5 w-3.5 text-sun" /> <span className="syn-s">"chai &amp; code"</span></li>
          </ul>
        </div>

        <div className="rounded-md bg-foreground p-4 text-background">
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">$ whoami --motto</div>
          <p className="mt-2 font-hand text-2xl">
            ship readable code, respect the user's attention. <Heart className="inline h-5 w-5 text-hot" />
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-md bg-secondary p-3 text-xs">
          <MapPin className="h-4 w-4 text-hot" />
          {profile.location} · UTC+5:30
        </div>
      </div>
    </div>
  </Panel>
);
