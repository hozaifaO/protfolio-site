"use client"

import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
