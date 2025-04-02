const WindowSection = ({ title, children }) => {
    return (
      <div className="m-4 p-1 border-2 border-offWhite bg-offWhite max-w-4xl mx-auto rounded-sm shadow-[4px_4px_0px_#111] overflow-hidden">
        
        {/* Retro window title bar */}
        <div className="flex justify-between items-center bg-roseQuartz text-black px-2 py-1 font-pixel text-sm border-b-2 border-black">
          <span>{title}</span>
          <span className="cursor-default">✕</span>
        </div>
  
        {/* Content area */}
        <div className="p-4 bg-white text-black font-sans text-sm md:text-base">
          {children}
        </div>
      </div>
    );
  };
  
  export default WindowSection;