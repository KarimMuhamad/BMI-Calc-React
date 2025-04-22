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
      <motion.div className='fixed pointer-events-none rounded-full blur-3xl'
      style={{
         width: "300px",
         height: "300px",
         background: "radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(138,43,226,0.2) 70%, transparent 100%)",
         zIndex: -1,
      }}

      animate={{
         x: position.x - 150,
         y: position.y - 150,
         transition: { type: "spring", damping: 10, stiffness: 100 },
       }}
      >

      </motion.div>
   )
}

export default MouseGlow;