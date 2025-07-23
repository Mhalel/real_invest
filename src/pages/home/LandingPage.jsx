import { useEffect, useRef, useState } from "react";
import { useLang } from "../../hooks/LangContext";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const LandingPage = () => {
  return (
    <div className="flex flex-col font-Cairo bg-white">
      <HeroSection />
      <div
        className="text-black flex flex-col items-center py-5 sm:py-10 "
        dir="rtl"
      >
        <FeasibilityStudy />
        <Service />
        <Plan />
        <Footer />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const MenuRef = useRef(null);
  const navBtn = [
    { labelEn: "Go to Studies", labelAR: "انتقل للدراسات" },
    { labelEn: "Features", labelAR: "المميزات" },
    { labelEn: "Plans", labelAR: "الخطط" },
    { labelEn: "Pricing", labelAR: "الخطط" },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { T, lang } = useLang();
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[3px]"
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(36,21,81,0.2)] z-0" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-[70px]">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-6 w-full">
          <div>
            <img
              src="investment-logo.png"
              alt="logo"
              className="w-24 sm:w-28 md:w-32 lg:w-[239px] object-cover"
            />
          </div>
          <button
            ref={MenuRef}
            onClick={() => {
              setIsDropDownOpen((prev) => !prev);
            }}
            className="md:hidden z-10 relative block text-white"
          >
            <RxHamburgerMenu />
            {isDropDownOpen && (
              <div
                dir={lang === "ar" ? "rtl" : "ltr"}
                className={`bg-white text-black flex flex-col gap-1 z-30 shadow-md absolute bottom-0 translate-y-full ${
                  lang === "ar" ? "right-0" : "left-0"
                } w-[200px] p-5  rounded-md`}
              >
                <div className="md:hidden flex  gap-1  flex-col">
                  {navBtn.map(({ labelAR, labelEn }, i) => (
                    <button
                      key={labelAR + i}
                      className="relative group w-fit text-sm"
                    >
                      {T(labelAR, labelEn)}
                      <hr className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-black transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </button>
          {navBtn.map(({ labelAR, labelEn }, index) => (
            <button
              key={labelEn + index}
              onClick={() => setActiveBtn(index)}
              className={`px-4 py-2 md:block hidden rounded-lg  transition duration-200 text-sm sm:text-base md:text-base lg:text-lg ${
                activeBtn === index
                  ? "border border-[#D5D7DA] bg-white text-black"
                  : "border border-transparent text-white"
              }`}
            >
              {T(labelAR, labelEn)}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative z-10 flex items-center justify-center h-full py-20 px-4 sm:px-8 sm:py-28 max-w-[1200px] mx-auto"
        dir="rtl"
      >
        <section className="flex flex-col lg:flex-row items-center gap-[82px] text-white">
          <div className="border rounded-lg border-white p-2 sm:p-3 w-full lg:w-auto">
            <img
              src="iframe.png"
              alt=""
              className="w-full max-w-[842px] h-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-6 text-center lg:text-right  text-2xl sm:text-3xl">
            <h2 className="font-bold">
              {" "}
              {T(
                "تحليل ذكي لمستقبل مشروعك",
                "Smart analysis of your project's future"
              )}
            </h2>
            <p className="text-lg sm:text-xl">
              {T(
                `استفد من قوة التحليل الذكي لإنشاء دراسة جدوى دقيقة وشاملة لمشروعك
              باستخدام أحدث تقنيات الذكاء الاصطناعي
              `,
                "Harness the power of intelligent analysis to create an accurate and comprehensive feasibility study for your project using the latest artificial intelligence technologies."
              )}
            </p>
            <Link
              to={"/Dashboard"}
              className="text-sm sm:text-base border rounded-lg px-6 py-2 w-fit mx-auto lg:mx-0 hover:bg-white hover:text-black transition duration-200"
            >
              {T("جرب الان", "Try Now")}
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

const FeasibilityStudy = () => {
  const [hovered, setHovered] = useState(false);
  const { T } = useLang();
  return (
    <section
      dir="ltr"
      className="w-full max-w-[1200px]  flex flex-col lg:flex-row gap-10 items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <aside className="relative w-full ">
        <div className=" p-[52px]  flex  gap-4 justify-center h-full items-center">
          <div
            className={`flex relative z-0 w-fit   drop-shadow-md duration-700  ${
              !hovered
                ? "translate-x-14 skew-x-[17deg] -rotate-45"
                : "translate-x-0 skew-x-[0deg] rotate-0"
            }  justify-center items-center`}
          >
            <img src="/basicInfo.webp" className="w-full max-w-[250px] " />
          </div>
          <div
            className={`flex w-fit  ${
              !hovered
                ? "-translate-y-28 -translate-x-20"
                : "translate-y-0 translate-x-0"
            } duration-700  flex-col gap-4`}
          >
            <div className="relative drop-shadow-md  z-10">
              <img
                src="/first.webp"
                className={`w-full 
                  duration-700  ${
                    !hovered && "translate-y-20  skew-x-[17deg] -rotate-45"
                  }
                   duration-700  max-w-[250px]`}
              />
            </div>
            <div className="relative drop-shadow-md -z-20">
              <img
                src="/profitAndCost.webp"
                className={`w-full duration-700   ${
                  !hovered && "skew-x-[17deg]  -rotate-45 "
                }  max-w-[250px]`}
              />
            </div>
          </div>
        </div>
      </aside>

      <aside className="flex w-full flex-col gap-4 max-w-md text-center lg:text-right">
        <h2 className="text-2xl sm:text-[45.707px]  font-bold leading-snug">
          {T(
            "دراسة جدوى بدقة عالية في دقائق فقط",
            "High-accuracy feasibility study in just minutes"
          )}
        </h2>
        <p className="text-base sm:text-[12.927px]">
          {T(
            "اكتشف كيف تساعدنا مشاريع مدهشة على النجاح من خلال دراسات جدوى متكاملة",
            "Discover how amazing projects help us succeed through comprehensive feasibility studies."
          )}
        </p>
        <button className="self-center lg:self-end px-6 py-2 text-sm bg-white text-black rounded-lg border-black border hover:bg-black hover:text-white transition duration-200">
          {T("جرب الآن", "Try Now")}
        </button>
      </aside>
    </section>
  );
};

const Service = () => {
  const { T } = useLang();

  return (
    <section className="mt-24 flex flex-col gap-6 items-center text-center w-full">
      <h2 className="text-2xl mb-10 sm:text-4xl font-medium">
        {T("الخدمات التي نقدمها", "Services we provide")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-[1200px] px-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("توفير المال", "Save Money")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "بدلاً من الإستعانة بخبير وتحمل\nالمزيد من التكاليف يمكنك\nالإستعانة بموقعنا",
              "Instead of hiring an expert and bearing\nmore costs, you can\nuse our platform"
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("سرعة فائقة", "High Speed")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "إنشاء دراسة في وقت قصير\nوبدقة عالية",
              "Create a study in a short time\nwith high accuracy"
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("التعديل بسهولة", "Easy Editing")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "يمكنك إنشاء وتعديل جميع\nأنواع الدراسات بناءً على\nتفضيلاتك وظروف مشروعك",
              "You can create and edit all\ntypes of studies based on\nyour preferences and project needs"
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("رضا تام", "Complete Satisfaction")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "نتائج مضمونة ومجربة تجعل\nتجربة الاستخدام مرضية لجميع\nالمستخدمين",
              "Guaranteed and proven results make\nthe user experience satisfying for all\nusers"
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("تقنية مثبتة", "Proven Technology")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "يتم إنشاء الدراسة باستخدام\nأحدث تقنيات الذكاء\nالإصطناعي",
              "Studies are generated using\nthe latest AI\ntechnologies"
            )}
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">
            {T("رفع إلى Cloud", "Cloud Upload")}
          </h2>
          <p className="text-sm font-medium text-[#656464] whitespace-pre-line">
            {T(
              "سهولة الوصول لجميع\nالدراسات مع خدمة التخزين\nالسحابي Cloud",
              "Easy access to all\nstudies with Cloud\nstorage service"
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

const Plan = () => {
  const { T } = useLang();
  return (
    <div className="mt-32 text-center flex flex-col gap-6 items-center">
      <p className="text-3xl sm:text-5xl font-semibold leading-tight">
        {T("خطط مصممة لتحقيق أهدافك", "Plans designed to achieve your goals")}
      </p>
      <p className="text-base sm:text-lg font-medium">
        {T(
          "أحصل على عدد محدود من دراسات الجدوى",
          "Get a limited number of feasibility studies"
        )}
      </p>
      <button className="text-sm sm:text-base border border-black rounded-lg px-6 py-2 hover:bg-black hover:text-white transition duration-200">
        {T("جرب الان", "Try Now")}
      </button>
    </div>
  );
};

const Footer = () => {
  const { T } = useLang();

  const Links = [
    { path: "Company", labelEn: "Company", labelAr: "الشركة" },
    { path: "Privacy", labelEn: "Privacy", labelAr: "الخصوصية" },
    {
      path: "Terms-Conditions",
      labelEn: "Terms and Conditions",
      labelAr: "الشروط والاحكام",
    },
    { path: "/Quick-Links", labelEn: "Quick Links", labelAr: "روابط سريعة" },
    { path: "/About-Us", labelEn: "About Us", labelAr: "عنا" },
    { path: "/Services", labelEn: "Services", labelAr: "الخدمات" },
    { path: "/Support", labelEn: "Support", labelAr: "الدعم" },
  ];

  return (
    <div className="mt-32 flex flex-wrap justify-center gap-4 text-sm font-medium">
      {Links.map(({ path, labelAr, labelEn }, i) => (
        <Link
          to={path}
          key={i}
          className="hover:scale-110 transition duration-200 whitespace-nowrap"
        >
          {T(labelAr, labelEn)}
        </Link>
      ))}
    </div>
  );
};

export default LandingPage;
