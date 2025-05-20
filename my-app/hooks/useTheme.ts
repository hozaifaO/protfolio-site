import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    
    const html = document.documentElement;
    const newTheme = html.classList.contains("dark") ? "light" : "dark";
    
    if (newTheme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    if (typeof window === "undefined") return;
    
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return { isDark, toggleTheme, mounted };
}
