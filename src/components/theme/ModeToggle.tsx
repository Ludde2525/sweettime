"use client";

import { FiMoon } from "react-icons/fi";

export default function ModeToggle() {
  return (
    <button
      className="p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
      aria-label="Dark mode theme"
      title="Dark mode theme"
    >
      <FiMoon className="h-5 w-5" />
    </button>
  );
}
