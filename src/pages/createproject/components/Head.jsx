import { useMemo } from "react";
import { useLang } from "../../../hooks/LangContext";
import { IoIosArrowBack } from "react-icons/io";

const Head = ({ step, setStep }) => {
  const { T } = useLang();

  const headOptions = useMemo(() => {
    const configMap = {
      1: {
        title: { ar: "اختر ارضك", en: "Choose your land" },
        info: { ar: "لا يمكنك ايجاد ارضك", en: "You can't find your land" },
        btn: {
          ar: "انتقل للإدخال اليدوي",
          en: "Switch to manual entry",
          fn: () => {},
        },
      },
      2: {
        title: {
          ar: "برجاء التاكد من صحة المعلومات",
          en: "Please make sure the information is correct.",
        },
        info: null,
        btn: {
          ar: "الرجوع",
          en: "Back",
          fn: () => setStep((prev) => prev - 1),
        },
      },
    };

    return configMap[step] || {};
  }, [step, setStep]);

  return (
    <section
      dir={T("rtl", "ltr")}
      className="flex  items-center justify-between  font-Cairo  gap-3 text-center "
    >
      {headOptions.title && (
        <h2 className="text-[24px] font-semibold">
          {T(headOptions.title.ar, headOptions.title.en)}
        </h2>
      )}
      <div className="flex items-center gap-[10px]">
        {headOptions.info && (
          <p className="text-[14px] font-semibold">
            {T(headOptions.info.ar, headOptions.info.en)}
          </p>
        )}
        {headOptions.btn && (
          <button
            onClick={headOptions.btn.fn}
            className=" flex items-center justify-center text-center min-w-[220px] gap-2 font-Cairo text-[14px] rounded-[8px] py-[8px] px-[12px] bg-white border border-[#D5D7DA]  text-[#414651] shadow-sm hover:bg-gray-50 duration-200  "

            // className=" flex items-center gap-2  text-[14px] rounded-[8px] py-2 px-3 bg-white border border-[#D5D7DA]  text-[#414651]   "
          >
            {T(headOptions.btn.ar, headOptions.btn.en)}
            <span>
              <IoIosArrowBack />
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Head;
