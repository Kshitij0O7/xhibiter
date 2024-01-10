import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

export default function Button() {
  const [expanded, setExpanded] = useState(true); // Keeping it always expanded
  const router = useRouter(); // Create an instance of useRouter

  const handleNavigate = (path) => {
    router.push(path);
  };

  return expanded ? (
    <div
      className="flex justify-center items-center mx-auto mt-8 bg-white border rounded-full shadow-lg"
      style={{ maxWidth: "300px" }}
    >
      <button
        className="flex-grow text-xs md:text-sm text-gray-700 flex justify-center items-center font-semibold py-2 rounded-full transition-colors duration-200 ease-in-out dark:bg-transparent dark:text-black hover:bg-[#e2e2e2] focus:bg-[#e2e2e2]"
        style={{ backgroundColor: "" }} // Default background color
        aria-label="Third Option"
        onClick={() => handleNavigate("/")}
      >
        <img src="/images/home.svg" className="w-4 mr-2" />
      </button>
      <button
        className="flex-grow text-xs md:text-sm text-gray-700 flex justify-center items-center gap-1 font-semibold py-2 rounded-full transition-colors duration-200 ease-in-out dark:bg-transparent dark:text-black hover:bg-[#e2e2e2] focus:bg-[#e2e2e2]"
        style={{ backgroundColor: "#" }}
        aria-label="Mix Collections"
        onClick={() => handleNavigate("/mix-collection")}
      >
        <img src="/images/four-dots.svg" className="w-4 mr-2" />
        Mix Collections
      </button>
    </div>
  ) : null;
}
