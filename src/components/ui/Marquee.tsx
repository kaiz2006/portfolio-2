import React from "react";
import "./Marquee.css";

interface MarqueeProps {
  items: { name: string; icon?: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const Marquee = ({
  items,
  direction = "left",
  speed = "normal",
  className = "",
}: MarqueeProps) => {
  return (
    <div className={`marquee-container ${className}`}>
      <div
        className={`marquee-content ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } speed-${speed}`}
      >
        {/* Render items twice to create the seamless loop effect */}
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2 px-6 py-3 mx-2 bg-muted/20 border border-border/50 text-foreground font-medium rounded-full glass whitespace-nowrap"
          >
            {item.icon && <span className="text-xl">{item.icon}</span>}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
