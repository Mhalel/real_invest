import { useState } from "react";
import { useLang } from "../../../hooks/LangContext";
import YouLookStuck from "./YouLookStuck";
import { IoIosArrowBack } from "react-icons/io";
const Foot = ({ setStep, step }) => {
  const [isYouLookStuckOpen, setIsYouLookStuckOpen] = useState(false);
  const { T } = useLang();
  return (
    <section
      className="flex items-center justify-between"
      dir={T("rtl", "ltr")}
    >
      <YouLookStuck
        isOpen={isYouLookStuckOpen}
        setIsOpen={setIsYouLookStuckOpen}
      />
      <button
        onClick={() => setStep((prev) => prev + 1)}
        className=" flex items-center justify-center text-center min-w-[220px] gap-2 font-Cairo text-[14px] rounded-[8px] py-[8px] px-[12px] bg-white border border-[#D5D7DA]  text-[#414651] shadow-sm hover:bg-gray-50 duration-200  "
      >
        {T("التالي", "Next")}
        <span>
          <IoIosArrowBack />
        </span>
      </button>
    </section>
  );
};

export default Foot;
