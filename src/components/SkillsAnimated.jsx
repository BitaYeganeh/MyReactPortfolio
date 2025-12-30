import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaPalette,
  FaVial,
  FaGithub,
  FaCheckCircle,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaPhp,
} from "react-icons/fa";
import { AnimatedList } from "./ui/AnimatedList";

// Define skills with icon + vibrant gradient colors
const skills = [
  {
    name: "HTML & CSS",
    icon: FaHtml5,
    color: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "from-yellow-300 via-yellow-500 to-yellow-600",
  },
  {
    name: "React",
    icon: FaReact,
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "from-indigo-400 via-violet-500 to-purple-600",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    name: "UI / UX Design",
    icon: FaPalette,
    color: "from-fuchsia-400 via-purple-500 to-indigo-500",
  },
  {
    name: "Testing",
    icon: FaVial,
    color: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
    color: "from-gray-600 via-slate-700 to-gray-900",
  },

  {
    name: "Quality Control",
    icon: FaCheckCircle,
    color: "from-green-400 via-lime-500 to-emerald-500",
  },
];

// Single skill card with gradient glow effect
const SkillItem = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group mx-auto w-full max-w-md rounded-2xl p-[2px] transition-all duration-300 hover:scale-105 hover:rotate-[1deg] hover:shadow-2xl"
    >
      {/* Gradient card */}
      <div
        className={`
          rounded-2xl bg-gradient-to-br ${color} p-[2px]
          shadow-lg transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]
        `}
      >
        {/* Inner glass effect */}
        <div className="rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-md p-4 flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          >
            <Icon size={28} />
          </motion.div>
          <span className="text-base font-semibold text-black dark:text-white">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Animated list container
const SkillsAnimated = () => {
  return (
    <div className="relative h-[380px] overflow-hidden">
      <AnimatedList>
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </AnimatedList>

      {/* Subtle fade at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-black" />
    </div>
  );
};

export default SkillsAnimated;
