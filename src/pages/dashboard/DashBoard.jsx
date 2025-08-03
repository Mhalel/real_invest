import { GoHomeFill } from "react-icons/go";
import { useLang } from "../../hooks/LangContext";
import { Link } from "react-router-dom";
import { CiFileOn, CiSettings } from "react-icons/ci";
import { RiDatabase2Line } from "react-icons/ri";
import { CircleQuestionMark, Settings } from "lucide-react";
import SideBar from "./components/SideBar";
const DashBoard = () => {
  const { T } = useLang();
  return (
    <div dir={T("rtl", "ltr")} className="flex ">
      <SideBar />
      <Main />
    </div>
  );
};

const Main = () => {
  const { T } = useLang();
  return (
    <div
      dir={T("rtl", "ltr")}
      className="grow w-full p-[29px] flex flex-col gap-[20px] "
    >
      <Banar />
      <div className=" w-full p-[29px] flex flex-col gap-[20px] overflow-auto h-[70vh] scroll_Bar_None">
        <h2 className="text-[32px] font-bold text-[#121417]">
          {T("لوحة التحكم", "Dashboard")}
        </h2>
        <p className="text-[22px] font-bold">
          {T("الأدلة/القوالب المميزة", "Featured Guides/Templates")}
        </p>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-4 ">
          <TempateCard />
          <TempateCard />
          <TempateCard />
          <TempateCard />
        </section>
        <h3 className="text-[22px] font-bold">
          {T(
            "خيارات/سير عمل توليد الذكاء الاصطناعي",
            "AI Generation Options/Workflow"
          )}
        </h3>
        <section className="text-[#121417] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Tag text={T("تعريف المشروع", "Define Project")} />
            <Tag text={T("تحليل البيانات", "Analyze Data")} />
          </div>
          <div className="flex items-center gap-2">
            <Tag text={T("توليد التقرير", "Generate Report")} />
            <Tag text={T("مقارنة السيناريوهات", "Compare Scenarios")} />
          </div>
        </section>
        <h3 className="text-[22px] font-bold">
          {T("المشاريع الرائجة", "Trinding Projects")}
        </h3>
        <section>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4 ">
            <TempateCard />
            <TempateCard />
            <TempateCard />
            <TempateCard />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

const Banar = () => {
  const { T } = useLang();
  return (
    <section className="w-full h-[331px] rounded-[19px]  overflow-hidden">
      <div
        className="w-full h-full bg-no-repeat flex flex-col gap-[25px] bg-cover p-11"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(7, 37, 137, 0.5), rgba(7, 37, 137, 0.5)),
            url('/banar.webp')`,
          backgroundPosition: "0px -110.926px",
          backgroundSize: "100% 164.97%",
          backgroundColor: "lightgray",
        }}
      >
        <h2 className="text-[32px] text-white font-bold">
          {T("اجعل قرارك أسهل", "Make Your Decision Easier")}
        </h2>
        <p className="text-[24px] text-white max-w-[470px]">
          {T(
            "تعرف على جميع الأرقام التي تحتاجها للحصول على استثمارات خالية من المخاطر",
            "Find out all the numbers you need to have a risk-free Investments "
          )}
        </p>
        <Link to={"/create-project"}
          className={`bg-white flex justify-center items-center  py-[10px] px-4 rounded-[8px] ${T(
            "mr-auto",
            "ml-auto"
          )}  text-[#414651] text-[16px] w-1/4`}
        >
          {T("اختر أرضك", "Choose Your Land")}
        </Link>
      </div>
    </section>
  );
};
const TempateCard = () => {
  const { T } = useLang();
  return (
    <Link to={"/"} className="flex flex-col gap-4 ">
      <div className="rounded-[12px] overflow-hidden">
        <img
          src="/Cardpic.webp"
          alt="Blog Post"
          className="w-full h-[118px] object-cover "
        />
      </div>
      <p className="text-[#121417] font-medium text-[16px]">
        {T(
          "كيف تقوم بإنشاء عروض تقديمية جذابة تبهر زملاءك وتثير إعجاب مديريك؟",
          "How do you create compelling presentations that wow your colleagues and impress your managers?"
        )}
      </p>
    </Link>
  );
};

const Tag = ({ text }) => {
  return (
    <button className="p-[16px] bg-[#D6E5F2] rounded-[12px]">{text}</button>
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
export default DashBoard;
