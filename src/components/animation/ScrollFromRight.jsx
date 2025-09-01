// ScrollFromRight.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollFromRight({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // keep reanimating
    threshold: 0.2,     // trigger when 20% visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }} // start from right
      animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
