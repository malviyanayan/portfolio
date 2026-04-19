import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-4 top-[2.75rem] z-40 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-md border-2 border-border bg-card shadow-md transition-transform hover:-translate-y-0.5"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? <Sun className="h-4 w-4 text-sun" /> : <Moon className="h-4 w-4 text-accent" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};
