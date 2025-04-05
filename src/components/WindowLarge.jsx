import React from "react";

const WindowLarge = ({ title, children }) => {
  return (
    <section className="w-[75vw] max-w-[1920px] mx-auto my-12 rounded-lg overflow-hidden border border-black shadow-lg bg-white">
      {/* Header Bar */}
      <div className="flex justify-between items-center bg-roseQuartz text-black px-3 py-1 font-pixel text-sm border-b-2 border-black">
        <span className="text-xl font-bold tracking-wide">{title}</span>
        <div className="flex gap-2 text-black">
           {["—", "☐", "X"].map((symbol, i) => (
              <button
                key={i}
                className="w-8 h-8 text-base hover:text-white"
              >
                {symbol}
              </button>
        ))}
      </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {children}
      </div>
    </section>
  );
};

export default WindowLarge;