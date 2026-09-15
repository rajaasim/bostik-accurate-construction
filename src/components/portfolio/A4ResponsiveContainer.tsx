"use client";

import React, { useState, useEffect, useRef } from "react";

interface A4ResponsiveContainerProps {
  children: React.ReactNode;
  zoomMode?: "fit" | "actual";
}

export const A4ResponsiveContainer: React.FC<A4ResponsiveContainerProps> = ({
  children,
  zoomMode = "fit",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // 210mm in standard 96 DPI CSS pixels is approx 793.7px (round to 794)
  // 297mm in standard 96 DPI CSS pixels is approx 1122.5px (round to 1123)
  const A4_WIDTH_PX = 794;
  const A4_HEIGHT_PX = 1123;

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 840;
      setIsMobile(mobile);

      if (mobile && zoomMode === "fit") {
        // Leave 20px padding (10px each side) on mobile
        const availableWidth = Math.max(300, windowWidth - 20);
        const newScale = Math.min(1, availableWidth / A4_WIDTH_PX);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [zoomMode]);

  // On print, scaling is always disabled
  return (
    <div
      ref={containerRef}
      className="a4-page-responsive-outer flex justify-center w-full my-4 sm:my-8 print:my-0 print:w-auto"
    >
      <div
        className="a4-page-scalable-box transition-all duration-200"
        style={{
          width: scale < 1 ? `${A4_WIDTH_PX * scale}px` : undefined,
          height: scale < 1 ? `${A4_HEIGHT_PX * scale}px` : undefined,
          overflow: scale < 1 ? "hidden" : "visible",
        }}
      >
        <div
          className="a4-page-inner-transform origin-top-left print:transform-none"
          style={{
            transform: scale < 1 ? `scale(${scale})` : undefined,
            width: `${A4_WIDTH_PX}px`,
            height: `${A4_HEIGHT_PX}px`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
