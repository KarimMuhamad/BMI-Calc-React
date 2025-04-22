import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundEffect = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      const shapeTypes = ["circle", "square", "triangle"];
      const colors = [
        'rgba(77,238,234, 0.7)',
        'rgba(116,238,21, 0.7)',
        'rgba(255,231,0, 0.7)',
        'rgba(240,0,255, 0.7)',
        'rgba(0,30,255, 0.7)'
      ];

      for (let i = 0; i < 10; i++) {
        newShapes.push({
          id: i,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 100 + 50,
          left: Math.random() * 100,
          duration: Math.random() * 10 + 5,
          delay: Math.random() * 2,
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            left: shape.left + "%",
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : '0',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            zIndex: -10,
            filter: 'blur(1px)',
            boxShadow: `0 0 10px ${shape.color}, 0 0 20px ${shape.color}`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;