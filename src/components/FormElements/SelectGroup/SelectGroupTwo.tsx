"use client";
import React, { useState } from "react";

const SelectGroupTwo: React.FC<{ disabled?: boolean, options: { text: string, value: string, selected?: boolean }[], handleSelect: (value: string) => void }> = ({ disabled, options, handleSelect }: { disabled?: boolean; options: { text: string, value: string, selected?: boolean }[], handleSelect: (value: string) => void }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div>
      <div className="relative rounded-[7px] max-w-56 min-w-25 bg-white dark:bg-dark-2 flex gap-2 p-2 items-center">
        <select
          disabled={disabled}
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            handleSelect(e.target.value)
            changeTextColor();
          }}
          className={`${disabled && "cursor-not-allowed"} relative z-10 w-full appearance-none rounded-[7px] bg-transparent px-3 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${isOptionSelected ? "text-dark dark:text-white" : ""
            }`}
        >
          {options.map((item, index) => {
            return <option key={index} value={item.value} selected={item.selected ? true : false} className="text-dark-5 dark:text-dark-6">
              {item.text}
            </option>
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectGroupTwo;
