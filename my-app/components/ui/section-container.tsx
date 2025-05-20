"use client"

import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 bg-background text-foreground ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
