import React, { useState } from "react";

const Types = () => {
  const types = [
    { name: "In Pixel", color: "accent" },
    { name: "In 3D", color: "jacarta" },
    { name: "In Digital", color: "jacarta" },
    { name: "In Animation", color: "jacarta" },
    { name: "In Generative", color: "jacarta" },
    { name: "In Random all", color: "jacarta" },
  ];

  const [activeType, setActiveType] = useState(0);

  const handleTypeClick = (index) => {
    setActiveType(index);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col border-t-[0.5px] w-full mt-2 pt-4 ">
      <div className="mb-4 text-xl font-bold">
        <h1>Types</h1>
      </div>

      {types.map((type, index) => (
        <li className="my-1 mr-2.5" key={index}>
          <button
            className={`group flex h-9 items-center rounded-lg ${
              index === activeType
                ? "border-accent bg-accent text-white border"
                : `border border-jacarta-100 bg-white text-${type.color}-500`
            } px-4 font-display text-sm font-semibold transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white`}
            onClick={() => handleTypeClick(index)}
          >
            <span>{type.name}</span>
          </button>
        </li>
      ))}
    </div>
  );
};

export default Types;
