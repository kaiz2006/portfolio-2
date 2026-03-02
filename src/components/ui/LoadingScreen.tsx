import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isCountingFinished, setIsCountingFinished] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="text-7xl md:text-9xl font-light tabular-nums overflow-visible" style={{ fontFamily: '"Inter", system-ui, sans-serif', letterSpacing: '-0.04em' }}>
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={2}
              className="text-white inline-block"
              startWhen={true}
              onEnd={() => {
                // Add a small delay after reaching 100 before animating out
                setTimeout(() => {
                  setIsCountingFinished(true);
                  onComplete();
                }, 500);
              }}
            />
          </div>
        </div>
        
        {/* Grain overlay for the loading screen */}
        <div className="absolute inset-0 z-[-1] opacity-5 block pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      </motion.div>
    </AnimatePresence>
  );
};
