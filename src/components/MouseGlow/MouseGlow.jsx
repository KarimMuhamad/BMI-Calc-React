import { motion } from 'motion/react';
import { useState, useEffect } from "react";

const MouseGlow = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (e) => {
         setPosition({ x: e.clientX, y: e.clientY });
      }

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
         window.removeEventListener("mousemove", handleMouseMove);
      }
   }, [])

   return (
      <motion.div className='fixed pointer-events-none rounded-full blur-3xl bg-gradient-to-r from-pink-500 to-yellow-500 opacity-50'
      style={{
         width: "200px",
         height: "200px",
         zIndex: -1,
      }}

      animate={{
         x: position.x - 100,
         y: position.y - 100,
         // transition: { type: "spring", damping: 10, stiffness: 100 },
       }}
      >

      </motion.div>
   )
}

export default MouseGlow;