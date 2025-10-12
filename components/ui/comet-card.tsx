"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function CometCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}