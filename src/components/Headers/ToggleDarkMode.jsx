import { motion } from "motion/react";
import { useDarkMode } from "../../context/ThemeContext";

const ToggleDarkMode = () => {
   const {darkMode, setDarkMode} = useDarkMode();

   const handleToggle = () => setDarkMode(!darkMode);

   const iconVariants = {
      sun: {rotate: 0},
      moon: {rotate: 360}
   }

   return (
      <motion.button
        whileTap={{scale: 0.8}}
        onClick={handleToggle} className="px-3 py-1 rounded-md border-1 cursor-pointer hover:bg-gray-300 border-gray-700/50 bg-gray-100/30 shadow-black/30 shadow-xs dark:hover:bg-gray-500 dark:bg-gray-500/20 dark:border-gray-500/40">
         {darkMode ? <motion.i
           key="moon"
           initial="sun"
           animate="moon"
           variants={iconVariants}
           className='bx bxs-moon'/> : <motion.i
           key="sun"
           initial="moon"
           animate="sun"
           variants={iconVariants}
           className='bx bxs-sun'></motion.i>}
      </motion.button>
   )
}

export default ToggleDarkMode