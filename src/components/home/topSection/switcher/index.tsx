const Switcher = () => {
  return (
    <div className="absolute bottom-0 left-0 flex">
      <div className="py-2.5 px-[17px] bg-[#0A0A0A] cursor-pointer transform transition-transform hover:bg-[#1F1F1F]">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="py-2.5 px-[17px] bg-[#0A0A0A] cursor-pointer transform transition-transform hover:bg-[#1F1F1F]">
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Switcher;
