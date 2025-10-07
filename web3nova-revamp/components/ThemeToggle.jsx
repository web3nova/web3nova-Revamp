import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Prevents SSR mismatch

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-3 rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={22} />
      ) : (
        <Moon className="text-gray-700" size={22} />
      )}
    </button>
  );
}
