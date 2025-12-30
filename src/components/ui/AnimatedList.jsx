import { motion } from "framer-motion";

export const AnimatedList = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="flex flex-col gap-4"
    >
      {children}
    </motion.div>
  );
};
