import { useLang } from "../../../hooks/LangContext";

import { useState } from "react";

const Main = ({ setStep, step }) => {
  return (
    <section className=" flex justify-center items-center">
      {step === 1 && <Map />}
      {step === 2 && <RealEstateSiteAnalysisReport />}
    </section>
  );
};

const Map = () => {
  return (
    <div>
      <img src="/map2.webp" alt="" />
    </div>
  );
};

const regions = [
  {
    id: 1,
    name_en: "Riyadh Region",
    name_ar: "منطقة الرياض",
    values: ["الرياض"],
  },
  {
    id: 2,
    name_en: "Eastern Province",
    name_ar: "المنطقة الشرقية",
    values: ["الشرقية"],
  },
  {
    id: 3,
    name_en: "Mecca Region",
    name_ar: "منطقة مكة المكرمة",
    values: ["مكة المكرمة"],
  },
  {
    id: 4,
    name_en: "Al Qassim Province",
    name_ar: "منطقة القصيم",
    values: ["القصيم"],
  },
  {
    id: 5,
    name_en: "Ha'il Region",
    name_ar: "منطقة حائل",
    values: ["حائل"],
  },
  {
    id: 6,
    name_en: "Al Jawf Region",
    name_ar: "منطقة الجوف",
    values: ["الجوف"],
  },
  {
    id: 7,
    name_en: "Tabuk Region",
    name_ar: "منطقة تبوك",
    values: ["تبوك"],
  },
  {
    id: 8,
    name_en: "Northern Borders Region",
    name_ar: "منطقة الحدود الشمالية",
    values: ["الحدود الشمالية"],
  },
  {
    id: 9,
    name_en: "Najran Region",
    name_ar: "منطقة نجران",
    values: ["نجران"],
  },
  {
    id: 20,
    name_en: "Al Bahah Region",
    name_ar: "منطقة الباحة",
    values: ["الباحة"],
  },
  {
    id: 21,
    name_en: "Asir Region",
    name_ar: "منطقة عسير",
    values: ["عسير"],
  },
  {
    id: 22,
    name_en: "Medina Region",
    name_ar: "منطقة المدينة المنورة",
    values: ["المدينة المنورة"],
  },
  {
    id: 23,
    name_en: "Jazan Province",
    name_ar: "منطقة جازان",
    values: ["جازان"],
  },
];
const studies = [];

const propertyTypes = [
  {
    id: 1,
    name_ar: "مبنى سكني",
    name_en: "Residential building",
    values: ["مبنى سكني"],
  },
  {
    id: 2,
    name_ar: "مبنى تجاري سكني",
    name_en: "Commercial residential building",
    values: ["مبنى تجاري سكني"],
  },
  {
    id: 3,
    name_ar: "مبنى تجاري",
    name_en: "Commercial building",
    values: ["مبنى تجاري"],
  },
  {
    id: 4,
    name_ar: "مول تجاري",
    name_en: "Commercial mall",
    values: ["مول تجاري"],
  },
  {
    id: 5,
    name_ar: "فلل",
    name_en: "Villas",
    values: ["فلل"],
  },
  {
    id: 6,
    name_ar: "مجمع سكني",
    name_en: "Residential complex",
    values: ["مجمع سكني"],
  },
  {
    id: 7,
    name_ar: "مبنى إداري",
    name_en: "Administrative building",
    values: ["مبنى إداري"],
  },
  {
    id: 8,
    name_ar: "فندقى",
    name_en: "Hotel",
    values: ["فندقى"],
  },
  {
    id: 9,
    name_ar: "برج تجاري سكني",
    name_en: "Commercial residential tower",
    values: ["برج تجاري سكني"],
  },
  {
    id: 10,
    name_ar: "برج تجاري إداري",
    name_en: "Commercial administrative tower",
    values: ["برج تجاري إداري"],
  },
  {
    id: 11,
    name_ar: "برج إداري",
    name_en: "Administrative tower",
    values: ["برج إداري"],
  },
];

const RealEstateSiteAnalysisReport = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStudy, setSelectedStudy] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const { T } = useLang();
  return (
    <div
      dir={T("rtl", "ltr")}
      className="flex flex-col md:flex-row gap-y-6 md:gap-x-8 font-Cairo"
    >
      <aside className="flex w-full md:w-1/2 flex-col gap-[46px]">
        <h3 className="text-center text-[30px] font-medium">
          {T("تقرير تحليل الموقع العقاري", "Real Estate Site Analysis Report")}
        </h3>
        <p className="text-center text-[18px] font-semibold">
          {T(
            "تقرير احترافي شامل لكل البيانات العقارية والتحليل الذكي بيانات القطعة ,  الطرق , المرافق , السكان  ",
            "A comprehensive professional report for all real estate data and smart analysis of plot data, roads, facilities, and population."
          )}
        </p>
        <div
          dir={T("rtl", "ltr")}
          className="flex items-center justify-between"
        >
          <p className="text-[30px] font-medium">
            {T("التوصية", "Recommendation")}
          </p>
          <p className="text-[24px] font-semibold">
            {T("مبنى تجاري سكني", "commercial residential building")}
          </p>
          <div
            dir={T("rtl", "ltr")}
            className="flex justify-center gap-5 items-center"
          >
            <p>{T("مستوي الثقة:", "Confidence level:")}</p>
            <div className="bg-gray-300 relative rounded-[25px] w-[50px] h-[8px] overflow-hidden">
              <span
                className={`absolute top-0 ${T(
                  " right-0",
                  " left-0"
                )} h-full w-[90%] rounded-[25px] block bg-green-600`}
              ></span>
            </div>
            <p className="text-green-600">90%</p>
          </div>
        </div>
        <p>
          {T(
            "بناءً على تحليل البيانات المتاحة، يُعتبر أفضل استخدام للأرض هو إنشاء مبنى سكني تجاري متعدد الاستخدامات. هذا الخيار مناسب نظرًا للز zonning المختلط الذي يسمح بتطوير مشاريع سكنية وتجارية، مما يلبي احتياجات السكان المحليين الذين يبلغ عددهم 14529 نسمة. السوق يظهر طلبًا قويًا على الوحدات السكنية والتجارية، حيث تم تسجيل متوسط أسعار المعاملات العقارية بمعدل 2,180,832 ريال سعودي. بالإضافة إلى ذلك، هناك فرص إيجارية جيدة، حيث بلغ متوسط الإيجار 99,840 ريال سعودي. ومع ذلك، يجب مراعاة المخاطر المحتملة مثل المنافسة من المشاريع القائمة، والتغيرات في السوق. بالتالي، يُوصى بالبدء في تطوير هذا المشروع مع التركيز على تلبية احتياجات المجتمع المحلي.",
            "Based on an analysis of the available data, the best use of the land is for a mixed-use residential/commercial building. This option is suitable due to the mixed-use zoning, which allows for the development of both residential and commercial projects, catering to the needs of a local population of 14,529. The market shows strong demand for residential and commercial units, with average property transaction prices recorded at SAR 2,180,832. Additionally, there are good rental opportunities, with the average rent reaching SAR 99,840. However, potential risks such as competition from existing projects and market changes must be considered. Therefore, it is recommended to embark on the development of this project with a focus on meeting the needs of the local community."
          )}
        </p>
        <div
          dir={T("rtl", "ltr")}
          className="flex items-center justify-between "
        >
          <h3 className="text-[30px] font-medium">
            {T(" بدائل أخرى", "Other alternatives")}
          </h3>
          <p>|</p>
          <p className="text-[20px] font-semibold">
            {T("برج تجاري سكني", "Commercial residential tower")}
          </p>
          <p className="text-[20px] font-semibold">
            {T("مجمع سكني", "residential complex")}
          </p>
        </div>
        <button className="py-2 px-3 flex items-center gap-1 justify-center text-white text-[14px] font-semibold rounded-[8px] bg-[#0E7090]">
          {T("اطلع على المقترحات كاملة", "View full proposals")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M7.48515 3H7.31848C5.91835 3 5.21828 3 4.68351 3.27248C4.2131 3.51217 3.83065 3.89462 3.59097 4.36502C3.31848 4.8998 3.31848 5.59987 3.31848 7V7.16667M7.48515 18H7.31848C5.91835 18 5.21828 18 4.68351 17.7275C4.2131 17.4878 3.83065 17.1054 3.59097 16.635C3.31848 16.1002 3.31848 15.4001 3.31848 14V13.8333M18.3185 7.16667V7C18.3185 5.59987 18.3185 4.8998 18.046 4.36502C17.8063 3.89462 17.4239 3.51217 16.9535 3.27248C16.4187 3 15.7186 3 14.3185 3H14.1518M18.3185 13.8333V14C18.3185 15.4001 18.3185 16.1002 18.046 16.635C17.8063 17.1054 17.4239 17.4878 16.9535 17.7275C16.4187 18 15.7186 18 14.3185 18H14.1518"
              stroke="#D6BBFB"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </aside>

      <div className="relative hidden md:block h-[600px]">
        {/* The bracket */}
        <div className="absolute -top-[330px] -left-2 h-[1200px] w-[59px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 59 538"
            fill="none"
            className="h-full w-full text-black"
          >
            <path
              d="M58.6369 0.5H17.6369V277.5L1.36304 294.235L17.6369 304.5V537.5"
              stroke="currentColor"
            />
          </svg>
        </div>
      </div>

      <aside className="flex w-full md:w-1/2 flex-col gap-2">
        <p className="text-lg font-medium">
          {T("الأراضي المحددة", "designated lands")}
        </p>
        <p className="text-xl leading-[30px] font-medium">
          {T("النرجس بالرياض قطعة رقم 23", "Narcissus in Riyadh, Block No. 23")}
        </p>
        <p className="text-xl leading-[30px] font-medium">
          {T(
            "لموقع: حي النرجس، الرياض",
            "Location: Al Narjis District, Riyadh"
          )}
        </p>
        <p className="text-xl leading-[30px] font-medium">
          {T(
            "نوع الرخصة: مبنى تجاري سكني",
            "License Type: Commercial Residential Building"
          )}
        </p>
        <label className="block w-full">
          <p className="text-lg font-medium mb-2">
            {T("مساحة الأرض م²", "Land area m²")}
          </p>
          <input
            type="text"
            className="w-full border border-[#D5D7DA] rounded-lg py-[8px] px-[12px] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={T("مساحة الأرض", "Land area")}
          />
        </label>

        <label className="block w-full relative">
          <p className="text-lg font-medium mb-2">
            {T("نوع العقار", "Property type")}
          </p>
          <div className="relative">
            <select
              className={`w-full appearance-none rounded-lg border bg-white px-[12px] py-[8px] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                selectedPropertyType === "" ? "text-gray-400" : "text-gray-900"
              }`}
              value={selectedPropertyType}
              onChange={(e) => setSelectedPropertyType(e.target.value)}
            >
              <option value="" disabled hidden>
                {T("مبنى تجاري سكني", "Commercial residential building")}
              </option>
              {propertyTypes.map((propertyType) =>
                propertyType.values.map((val, i) => (
                  <option
                    key={`${propertyType.id}-${i}`}
                    value={val}
                    className="text-black"
                  >
                    {val}
                  </option>
                ))
              )}
            </select>

            {/* Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </label>

        <label className="block w-full relative">
          <p className="text-lg font-medium mb-2">{T("المدينة", "The city")}</p>
          <div className="relative">
            <select
              className={`w-full appearance-none rounded-lg border bg-white px-[12px] py-[8px] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                selectedCity === "" ? "text-gray-400" : "text-gray-900"
              }`}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="" disabled hidden>
                {T("الرياض", "Riyadh")}
              </option>
              {regions.map((region) =>
                region.values.map((val, i) => (
                  <option
                    key={`${region.id}-${i}`}
                    value={val}
                    className="text-black"
                  >
                    {val}
                  </option>
                ))
              )}
            </select>

            {/* Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </label>

        <label className="block w-full relative">
          <p className="text-lg font-medium mb-2">
            {T("نوع الدراسة", "Type of study")}
          </p>
          <div className="relative">
            <select
              className={`w-full appearance-none rounded-lg border bg-white px-[12px] py-[8px] shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                selectedStudy === "" ? "text-gray-400" : "text-gray-900"
              }`}
              value={selectedStudy}
              onChange={(e) => setSelectedStudy(e.target.value)}
            >
              <option value="" disabled hidden>
                {T("متقدمة", "Advanced")}
              </option>
              {studies.map((study) =>
                study.values.map((val, i) => (
                  <option
                    key={`${study.id}-${i}`}
                    value={val}
                    className="text-black"
                  >
                    {val}
                  </option>
                ))
              )}
            </select>

            {/* Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </label>
      </aside>
    </div>
  );
};

export default Main;
