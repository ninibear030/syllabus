import { useState } from "react";

export const Slider = () => {
  const [mojiIndex, setMojiIndex] = useState(0);

  const mojis = [
    "😄",
    "🙂",
    "😐",
    "😑",
    "☹️",
    "😩",
    "😠",
    "😡",
    "🤢",
    "😤",
    "💩",
  ];

  const handleRangeChange = (e) => {
    setMojiIndex(e.target.value);
  };

  return (
    <div>
      <div className="w-[600px] container flex flex-col gap-4 items-center">
        <div className="moji text-9xl">{mojis[mojiIndex]}</div>
        <div className="flex gap-8 justify-between w-full">
          <span className="text-3xl text-green-500">Safe</span>
          <input
            type="range"
            value={mojiIndex}
            min="0"
            max="10"
            step="1"
            onChange={handleRangeChange}
            className="w-full"
          />
          <span className="text-3xl text-red-500">Risky</span>
        </div>
      </div>
    </div>
  );
};
