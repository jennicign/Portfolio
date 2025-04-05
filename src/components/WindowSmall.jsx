import React from "react";

const WindowSmall = ({ title, children }) => {
  return (
    <section className="w-full rounded-lg overflow-hidden border border-black shadow-md bg-white">
      {/* Header Bar */}
      <div className="flex justify-between items-center bg-serenity text-black px-3 py-1 font-pixel text-sm border-b border-black">
        <span className="text-base font-bold">{title}</span>
        <div className="flex gap-1">
          {["—", "☐", "X"].map((symbol, i) => (
            <button
              key={i}
              className="w-6 h-6 text-xs hover:text-white"
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        {children}
      </div>
    </section>
  );
};

export default WindowSmall;