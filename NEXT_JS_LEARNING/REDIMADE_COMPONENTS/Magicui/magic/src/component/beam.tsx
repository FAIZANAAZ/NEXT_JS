"use client";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { useRef } from "react";

const pulseAnimationStyle = {
  animation: "pulseScale 2s ease-in-out infinite",
};

export default function AnimatedBeamExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  const numberOfPoints = 5; // dono taraf same number of circles

  const leftPoints = Array(numberOfPoints)
    .fill(null)
    .map(() => React.createRef<HTMLDivElement>());

  const rightPoints = Array(numberOfPoints)
    .fill(null)
    .map(() => React.createRef<HTMLDivElement>());

  const centerToRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>
        {`
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
        `}
      </style>

      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: 600,
          height: 400,
          margin: "40px auto",
          borderRadius: 12,
          background:
            "linear-gradient(135deg, #7F7FD5 0%, #86A8E7 50%, #91EAE4 100%)",
          boxShadow: "0 0 20px rgba(0,0,0,0.15)",
          overflow: "visible",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* Left side circles */}
        {leftPoints.map((ref, i) => (
          <div
            key={"left-" + i}
            ref={ref}
            style={{
              position: "absolute",
              top: 40 + i * 65,
              left: 20,
              width: 45,
              height: 45,
              backgroundColor: "#ff9940",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              userSelect: "none",
              fontSize: "14px",
              border: "3px solid #ffa347",
              boxShadow: "0 0 10px #ff9c3b",
              ...pulseAnimationStyle,
              zIndex: 1,
            }}
          >
            F1
          </div>
        ))}

        {/* Right side circles */}
        {rightPoints.map((ref, i) => (
          <div
            key={"right-" + i}
            ref={ref}
            style={{
              position: "absolute",
              top: 40 + i * 65,
              right: 20,
              width: 45,
              height: 45,
              backgroundColor: "#ff9940",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              userSelect: "none",
              fontSize: "14px",
              border: "3px solid #ffa347",
              boxShadow: "0 0 10px #ff9c3b",
              ...pulseAnimationStyle,
              zIndex: 1,
            }}
          >
            F1
          </div>
        ))}

        {/* Center circle */}
        <div
          ref={centerToRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 90,
            height: 90,
            backgroundColor: "#9c40ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            userSelect: "none",
            fontSize: "20px",
            border: "5px solid #ffaa40",
            boxShadow:
              "0 0 15px #9c40ff, 0 0 20px #ffaa40, 0 0 30px #9c40ff",
            zIndex: 10,
            ...pulseAnimationStyle,
          }}
        >
          Center
        </div>

        {/* Beams left to center */}
        {leftPoints.map((fromRef, i) => (
          <AnimatedBeam
            key={"beam-left-" + i}
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={centerToRef}
            curvature={20 + i * 10}
            pathWidth={3}
            pathOpacity={0.5}
            gradientStartColor="#ffaa40"
            gradientStopColor="#9c40ff"
            duration={4 + i * 0.5}
            delay={i * 0.3}
            reverse={false}
          />
        ))}

        {/* Beams right to center */}
        {rightPoints.map((fromRef, i) => (
          <AnimatedBeam
            key={"beam-right-" + i}
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={centerToRef}
            curvature={20 + i * 10}
            pathWidth={3}
            pathOpacity={0.5}
            gradientStartColor="#ffaa40"
            gradientStopColor="#9c40ff"
            duration={4 + i * 0.5}
            delay={i * 0.3}
            reverse={true}
          />
        ))}
      </div>
    </>
  );
}
