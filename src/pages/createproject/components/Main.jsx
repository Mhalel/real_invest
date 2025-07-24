import { useLang } from "../../../hooks/LangContext";

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

const RealEstateSiteAnalysisReport = () => {
  const { T } = useLang();
  return (
    <div dir={T("rtl", "ltr")} className="flex gap-8 font-Cairo">
      <aside className="flex w-full flex-col gap-[46px]">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="538"
        viewBox="0 0 59 538"
        fill="none"
      >
        <path
          d="M58.6369 0.5H17.6369V277.5L1.36304 294.235L17.6369 304.5V537.5"
          stroke="black"
        />
      </svg>
      <aside className="flex w-full flex-col gap-2">
        <p>{T("الأراضي المحددة", "designated lands")}</p>
        <p>
          {T("النرجس بالرياض قطعة رقم 23", "Narcissus in Riyadh, Block No. 23")}
        </p>
        <p>
          {T(
            "لموقع: حي النرجس، الرياض",
            "Location: Al Narjis District, Riyadh"
          )}
        </p>
        <p>
          {T(
            "نوع الرخصة: مبنى تجاري سكني",
            "License Type: Commercial Residential Building"
          )}
        </p>
        <label>
          <p>{T("مساحة الأرض م²", "Land area m²")}</p>
          <input type="text" placeholder={T("مساحة الأرض ", "land area")} />
        </label>
        <label>
          <p>{T("نوع العقار", "Property type")}</p>
          <input type="text" placeholder={T("مساحة الأرض ", "land area")} />
        </label>
        <label>
          <p>{T("المدينة", "The city")}</p>
          <input type="text" placeholder={T("الرياض", "Riyadh")} />
        </label>
        <label>
          <p>{T("المدينة", "The city")}</p>
          <input type="text" placeholder={T("نوع الدراسة", "Type of study")} />
        </label>
      </aside>
    </div>
  );
};

export default Main;
