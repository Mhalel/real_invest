import { Link } from "react-router-dom";
import { useLang } from "../hooks/LangContext";
import { useState } from "react";

const Header = () => {
  const { T, setLang, lang } = useLang();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const Links = [
    { nameEn: "Dashboard", nameAr: "لوحه التحكم", path: "/Dashboard" },
    {
      nameEn: "Project Feasibility",
      nameAr: "دراسه جدوى المشروع",
      path: "/Project_Feasibility",
    },
    { nameEn: "Data Input", nameAr: "إدخال البيانات", path: "/Data_Input" },
    {
      nameEn: "Report Generation",
      nameAr: "إنشاء التقارير",
      path: "/Report_Generation",
    },
    {
      nameEn: "Saved Projects",
      nameAr: "المشاريع المحفوظة",
      path: "/Saved_Projects",
    },
    { nameEn: "Settings", nameAr: "الاعدادات", path: "/Settings" },
  ];

  return (
    <header
      dir={T("rtl", "ltr")}
      className="px-5 py-3 text-[#121417] flex justify-between items-center bg-white border-b border-[#E5E8EB]"
    >
      <Link to={"/"} className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H12L10 6L12 12H0L2 6L0 0Z"
            fill="#121417"
          />
        </svg>
        <p className=" text-[14px] font-bold leading-[23px]">PropertyLens AI</p>
      </Link>
      <div className="flex items-center  gap-9">
        <nav className="flex gap-9 text-[14px] font-medium leading-[21px]">
          {Links.map(({ nameEn, nameAr, path }) => (
            <Link to={path}>{T(nameAr, nameEn)}</Link>
          ))}
        </nav>
        <div className="relative">
          <span
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className=" size-10 cursor-pointer hover:border-gray-500 border duration-300   flex justify-center items-center overflow-auto rounded-full"
          >
            <img src="/userImg.webp" className="object-cover" alt="userImg" />
          </span>
          {isDropDownOpen && (
            <div
              className={`bg-white flex flex-col gap-1 shadow-md absolute bottom-0 translate-y-full ${
                lang === "ar" ? "left-0" : "right-0"
              } w-[200px] p-5  rounded-md`}
            >
              <Link
                to="/profile"
                className="block relative group w-fit text-sm"
              >
                {T("الملف الشخصي", "Profile")}
                <hr className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-black transition-all duration-300" />
              </Link>

              <div className="md:hidden flex  gap-1  flex-col">
                {Links.map(({ nameEn, nameAr, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className="relative group w-fit text-sm"
                  >
                    {T(nameAr, nameEn)}
                    <hr className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-black transition-all duration-300" />
                  </Link>
                ))}
              </div>
              <ToggleLangButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const ToggleLangButton = () => {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="w-full relative h-[25px] bg-white flex justify-center items-center "
    >
      <span className="w-full h-full relative z-10 flex justify-center items-center">
        Ar
      </span>
      <span className="w-full h-full  relative z-10 flex justify-center items-center">
        En
      </span>
      <span
        className={`bg-gray-300 w-[75px] rounded-md h-[25px] right-1  absolute`}
      ></span>
    </button>
  );
};

export default Header;
