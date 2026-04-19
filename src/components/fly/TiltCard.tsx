"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

export default function TiltCard({ children, className = "", intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTransform(
        `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02,1.02,1)`
      );
    },
    [intensity]
  );

  const onLeave = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: "transform 0.18s ease-out, box-shadow 0.25s ease" }}
      className={className}
    >
      {children}
    </div>
  );
}
