import { motion } from "framer-motion";

const HorizonBar = ({ bmi }) => {
  const min = 10;
  const max = 40;
  const clampedBMI = Math.max(min, Math.min(bmi, max));
  const position = ((clampedBMI - min) / (max - min)) * 100;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto py-4 px-4">
      <motion.div
        className="absolute z-10 -translate-x-1/2 top-1.5"
        animate={{ left: `${position}%`}}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <p className="text-white font-bold text-4xl">I</p>
      </motion.div>

      <div className="relative flex w-full h-5 rounded-xl overflow-hidden">
         <div className="h-full bg-sky-600" style={{ flex: 8.5 }} />
         <div className="h-full bg-green-600" style={{ flex: 6.4 }} />
         <div className="h-full bg-red-600" style={{ flex: 15 }} />
      </div>
    </div>
  );
};

export default HorizonBar;
