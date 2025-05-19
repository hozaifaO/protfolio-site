import React, { useState } from "react";

interface LightSwitchProps {
  onToggle: () => void;
  isDark: boolean;
  visible: boolean;
}

export function LightSwitch({ onToggle, isDark, visible }: LightSwitchProps) {
  // Only render if visible
  if (!visible) return null;

  return (
    <button
      aria-label="Toggle light/dark mode"
      onClick={onToggle}
      className="p-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
    >
      <span className="text-lg">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}
