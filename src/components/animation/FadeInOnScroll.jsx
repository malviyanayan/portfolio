// FadeInOnScroll.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation bar-bar ho
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
