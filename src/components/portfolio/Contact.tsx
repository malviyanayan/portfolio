import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Phone, Send, Code2, Youtube, CheckCircle, Loader2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Panel } from "./Panel";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email format";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mwpkqjoy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Panel id="contact" filename="~/portfolio/contact.sh" language="bash" accent="sun" sticker="say hi! 💌">
      <div className="font-mono text-xs text-muted-foreground">#!/bin/bash — let's talk</div>
      <h2 className="mt-3 font-sans text-4xl font-bold sm:text-5xl">
        Got an idea? <br />
        <span className="font-hand text-5xl text-hot">let's build it together.</span>
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="font-mono text-xs text-muted-foreground">$ name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="your name"
              className="mt-1 w-full rounded-md border-2 border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-colors focus:border-accent"
            />
            {errors.name && <p className="mt-1 font-mono text-xs text-hot">{errors.name}</p>}
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground">$ email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@domain.com"
              className="mt-1 w-full rounded-md border-2 border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-colors focus:border-accent"
            />
            {errors.email && <p className="mt-1 font-mono text-xs text-hot">{errors.email}</p>}
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground">$ message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              placeholder="tell me about your project…"
              className="mt-1 w-full resize-none rounded-md border-2 border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-colors focus:border-accent"
            />
            {errors.message && <p className="mt-1 font-mono text-xs text-hot">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending"
                ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                : <><Send className="h-4 w-4" /> send message</>
              }
            </motion.button>

            {status === "success" && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1.5 font-mono text-xs text-neon"
              >
                <CheckCircle className="h-4 w-4" /> Message sent!
              </motion.span>
            )}
            {status === "error" && (
              <span className="font-mono text-xs text-hot">Something went wrong. Try again.</span>
            )}
          </div>
        </form>

        <div className="space-y-3">
          <div className="rounded-md border-2 border-dashed border-border p-4 font-mono text-sm">
            <div className="text-muted-foreground"># direct channels</div>
            <div className="mt-3 space-y-2">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="h-4 w-4 text-hot" /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 text-neon" /> {profile.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {[
              { href: profile.socials.github, label: "github", icon: Github, color: "hover:bg-foreground hover:text-background" },
              { href: profile.socials.linkedin, label: "linkedin", icon: Linkedin, color: "hover:bg-sky hover:text-background" },
              { href: profile.socials.leetcode, label: "leetcode", icon: Code2, color: "hover:bg-sun" },
              { href: profile.socials.instagram, label: "instagram", icon: Instagram, color: "hover:bg-hot hover:text-background" },
              { href: profile.socials.youtube, label: "youtube", icon: Youtube, color: "hover:bg-red-500 hover:text-background" },
            ].map((s) => {
              const I = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col items-center gap-2 rounded-md border-2 border-border p-4 transition-colors ${s.color}`}
                >
                  <I className="h-5 w-5" />
                  <span className="font-mono text-xs">{s.label}</span>
                </a>
              );
            })}
          </div>

          <div className="rounded-md bg-foreground p-4 font-hand text-2xl text-background">
            response time: usually within 24h ⚡
          </div>
        </div>
      </div>
    </Panel>
  );
};

export const Footer = () => (
  <footer className="mb-6 border-t border-border md:ml-14">
    <div className="container flex flex-col items-center justify-between gap-2 py-6 font-mono text-xs text-muted-foreground sm:flex-row">
      <div>© {new Date().getFullYear()} Nayan Malviya · built with <span className="text-hot">♥</span> + React</div>
      <div>$ exit 0</div>
    </div>
  </footer>
);
