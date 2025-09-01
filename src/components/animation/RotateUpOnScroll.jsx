import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RotateUpOnScroll({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // ek baar animation chale
    threshold: 0.3,
  });

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 100, rotate: -15 }}
  animate={inView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 100, rotate: -15 }}
  transition={{
    duration: 1,
    delay,
    ease: "easeOut",
  }}
  style={{ display: "flex", justifyContent: "center", width: "100%" }} // <-- change here
>
  {children}
</motion.div>

  );
}
