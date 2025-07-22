import { IoIosArrowBack } from "react-icons/io";
import { useLang } from "../../hooks/LangContext";
import { useEffect, useRef, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import ClosedPieChart from "../../components/charts/ClosedPieChart";
import Table from "../../components/tables/table";
import PicsSwiper from "./components/PicsSwiper";

const Home = () => {
  return (
    <div className="font-Cairo flex flex-col gap-[72px] px-16">
      <ResidentialBuildingDevelopmentSection />
      <BasicInformationSection />
      <AreasSection />
      <CostTableSection />
      <VariablesRatiosOnSalesSection />
      <ResidentialFloorsSection />
      <TotalRevenueSection />
      <ProfitCostChart />
      <CashFlowsFromSalesSection />
      <VariableRatiosOnRent />
      <ResidentialFloorsSection2 />
      <TotalRevenueSection2 />
      <CashFlowsFromRent />
      <BlogPostsSection />
    </div>
  );
};

const ResidentialBuildingDevelopmentSection = () => {
  const { T, lang } = useLang();
  const text = {
    ar: ` وصف للمشروع و الملخص للدراسة وصف للمشروع و الملخص للدراسة وصف للمشروع
          و الملخص للدراسة وصف للمشروع و الملخص للدراسة وصف للمشروع و الملخص
          للدراسة وصف للمشروع و الملخص للدراسة وصف للمشروع و الملخص للدراسة وصف
          للمشروع و الملخص للدراسة وصف للمشروع و الملخص للدراسة وصف للمشروع و
          الملخص للدراسة وصف للمشروع و الملخص للدراسة`,
    en: "Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study Description of the project and summary of the study",
  };
  return (
    <section dir={T("rtl", "ltr")} className="flex flex-col gap-6">
      <div className="flex items-center gap-[32px]">
        <p className="text-[36px] font-medium">
          {T("تطوير المباني السكنية", "Residential Building Development")}
        </p>
        <span className={lang === "en" ? "rotate-180" : ""}>
          <IoIosArrowBack />
        </span>
        <p className="text-[18px]">
          {T("حي الشاطئ، جازان", "Al-Shatea District, Jazan")}
        </p>
      </div>
      <PicsSwiper images={["/userImg.webp", "/userImg.webp"]} />
      <div className="flex items-center p-[10px] md:flex-row flex-col gap-[10px]">
        <p className="w-full font-Cairo font-medium text-[18px]">
          {T(text.ar, text.en)}
        </p>
        <div className="w-full h-[200px] overflow-hidden rounded-[12px]">
          <img
            src="/map.webp"
            alt="map"
            className=" object-cover rounded-[12px]"
          />
        </div>
      </div>
    </section>
  );
};

const BasicInformationSection = () => {
  const { T } = useLang();
  const dataArray = [
    { Statement: T("عدد الطوابق", "Number of floors"), number: 3 },
    { Statement: T("الطوابق السكنية", "Residential floors"), number: 2 },
    { Statement: T("الملحق العلوي", "Upper annex"), number: 1 },
    { Statement: T("الطابق الأرضي", "Ground floor"), number: 1 },
    {
      Statement: T(
        "عدد طوابق الطابق السفلي (مواقف السيارات)",
        "Number of basement floors (parking)"
      ),
      number: 1,
    },
  ];
  return (
    <section className=" flex max-w-[1080px] mx-auto   md:flex-row flex-col gap-20  lg:gap-[167px] justify-between items-center p-[10px]">
      <ClosedPieChart
        className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]"
        COLORS={["#E9EAEB", "#7F56D9", "#9E77ED", "#B692F6", "#D6BBFB"]}
        data={dataArray.map(({ Statement, number }) => ({
          name: Statement,
          value: number,
        }))}
      />
      <Table
        title={T("البيانات الأساسية", "Basic Data")}
        dir={T("rtl", "ltr")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            number: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("العدد", "number")}</span>
              </div>
            ),
          },
          body: dataArray,
        }}
      />
    </section>
  );
};

const AreasSection = () => {
  const { T } = useLang();
  const chartData = [
    { Statement: T("إجمالي مساحة الأرض", "Total Land Area"), number: 489 },
    { Statement: T("مساحة الطابق الأرضي", "Ground Floor Area"), number: 293 },
    {
      Statement: T("مساحة الطابق السكني", "Residential Floor Area"),
      number: 342,
    },
    { Statement: T("مساحة الملحق العلوي", "Upper Annex Area"), number: 171 },
    { Statement: T("مساحة الطابق السفلي", "Basement Floor Area"), number: 489 },
    { Statement: T("المساحات المشتركة", "Common Areas"), number: 195.6 },
    {
      Statement: T("مساحة البناء الإجمالية", "Total Built-up Area"),
      number: 1149.3,
    },
    {
      Statement: T("نسبة بناء الدور الأرضي", "Ground Floor Build Ratio"),
      number: 60,
    },
    {
      Statement: T("نسبة بناء الدور المتكرر", "Typical Floor Build Ratio"),
      number: 70,
    },
    {
      Statement: T("نسبة بناء الملحق العلوي", "Upper Annex Build Ratio"),
      number: 50,
    },
  ];

  return (
    <section className=" flex     md:flex-row flex-col gap-20  lg:gap-[167px] justify-center items-center p-[10px]">
      <div className=" w-full md:w-[617px]">
        <Table
          title={T("المساحات", "Areas")}
          dir={T("rtl", "ltr")}
          data={{
            header: {
              Statement: (
                <div className="flex items-center gap-1 justify-center">
                  <HiOutlineQuestionMarkCircle className="text-gray-500" />
                  <span>{T("Role", "Role")}</span>
                </div>
              ),
              number: (
                <div className="flex items-center gap-1 justify-center">
                  <HiOutlineQuestionMarkCircle className="text-gray-500" />
                  <span>{T("Role", "Role")}</span>
                </div>
              ),
            },
            body: chartData,
          }}
        />
      </div>
      <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] ">
        <DonutChart
          title="Access From"
          data={chartData.map(({ Statement, number }) => ({
            name: Statement,
            value: number,
          }))}
        />
      </div>
    </section>
  );
};

import * as echarts from "echarts";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const DonutChart = ({
  title,
  data,
  colors = ["#E9EAEB", "#7F56D9", "#9E77ED", "#B692F6", "#D6BBFB", "#E9D7FE"],
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      const option = {
        color: colors,
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
        ],
      };

      chartInstance.current.setOption(option);

      return () => {
        chartInstance.current && chartInstance.current.dispose();
      };
    }
  }, [data, title, colors]);

  return <div ref={chartRef} className="w-full h-full" />;
};

const CostTableSection = () => {
  const { T } = useLang();
  return (
    <section className=" flex  md:flex-row flex-col">
      <aside className="bg-[#0E7090] w-full rounded-r-none  rounded-[16px] p-8 flex flex-col gap-8">
        <Table
          title={T("جدول التكاليف", "Cost table")}
          textColor="text-white"
          data={{
            header: {
              Statement: (
                <div className="flex items-center gap-1 justify-center">
                  <HiOutlineQuestionMarkCircle className="text-gray-500" />
                  <span>{T("البيان", "Statement")}</span>
                </div>
              ),
              number: (
                <div className="flex items-center gap-1 justify-center">
                  <HiOutlineQuestionMarkCircle className="text-gray-500" />
                  <span>{T("ريال", "riyals")}</span>
                </div>
              ),
            },
            body: [
              {
                Statement: T("تكلفة البناء الكلية", "Total Construction Cost"),
                number: 2068753,
              },
              {
                Statement: T(
                  "تكلفة الطوابق السفلية (مواقف السيارات)",
                  "Basement Floors Cost (Parking)"
                ),
                number: 489067,
              },
              {
                Statement: T("تكلفة المساحات المشتركة", "Common Areas Cost"),
                number: 58688,
              },
              {
                Statement: T("التكاليف غير المباشرة", "Indirect Costs"),
                number: 130825,
              },
              {
                Statement: T("إجمالى تكاليف البناء", "Total Building Costs"),
                number: 2747333,
              },
            ],
          }}
        />
        <div className="border-4 text-center text-white h-[364px] f border-white rounded-[16px] flex justify-center items-center flex-col gap-4 fotn-cairo ">
          <div className="flex flex-col gap-2   ">
            <p className="text-[36px] font-semibold">
              {T("إجمالي تكاليف البناء", "Total Construction Cost")}
            </p>
            <p className="text-[16px] font-medium">
              {T("شامل سعر الأرض", "Including land price")}
            </p>
          </div>
          <p className="text-[48px] font-semibold">4,703,600</p>
        </div>
      </aside>
      <aside className="w-full border-4 border-[#0E7090] py-8 px-16 rounded-l-none rounded-[16px] flex flex-col gap-8">
        <div className="flex flex-col gap-8 ">
          <p className="text-[24px] font-bold" dir={T("rtl", "ltr")}>
            {T("جدول التكاليف", "Cost table")}
          </p>
          <div>
            <Table
              dir={T("rtl", "ltr")}
              title={T("التكلفه الثابتة", "Fixed Cost")}
              data={{
                header: {
                  Statement: (
                    <div className="flex items-center gap-1 justify-center">
                      <HiOutlineQuestionMarkCircle className="text-gray-500" />
                      <span>{T("البيان", "Statement")}</span>
                    </div>
                  ),
                  number: (
                    <div className="flex items-center gap-1 justify-center">
                      <HiOutlineQuestionMarkCircle className="text-gray-500" />
                      <span>{T("ريال/م²", "riyals/m²")}</span>
                    </div>
                  ),
                },
                body: [
                  {
                    Statement: T("سعر المتر المربع ", "Price per square meter"),
                    number: 4000,
                  },
                  {
                    Statement: T("إجمالي مساحة الأرض", "Total land area"),
                    number: 489.07,
                  },
                  {
                    Statement: T("إجمالي تكلفة الأرض", "Total land cost"),
                    number: 1956267,
                  },
                ],
              }}
            />
          </div>
        </div>
        <div>
          <Table
            dir={T("rtl", "ltr")}
            title={T("التكلفه المتغيرة", "Variable cost")}
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T("تكلفة البناء", "Construction Cost"),
                  number: 1800,
                },
                { Statement: T("تكلفة المواقف", "Parking Cost"), number: 1000 },
                {
                  Statement: T("تكلفة المساحات المشترك", "Common Area Cost"),
                  number: 300,
                },
                {
                  Statement: T("التكاليف غير المباشرة", "Indirect Costs"),
                  number: "%5",
                },
              ],
            }}
          />
        </div>
      </aside>
    </section>
  );
};

const VariablesRatiosOnSalesSection = () => {
  const { T } = useLang();
  return (
    <section className="flex flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("نسب المتغيرات على البيع", "Variables ratios on sales")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2025: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
          },
          body: [
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("عدد سنوات البناء", "Number of Construction Years"),
              number: "60%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("نسبة الضريبة", "Tax Rate"),
              number: "10%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("زيادة السعر", "Price Increase"),
              number: "5%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("عمولة المبيعات", "Sales Commission"),
              number: "5%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("الزكاة", "Zakat"),
              number: "5%",
            },
          ],
        }}
      />
    </section>
  );
};
const ResidentialFloorsSection = () => {
  const { T } = useLang();
  return (
    <section className="flex flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("الطوابق السكنية", "residential floors")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2025: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
          },
          body: [
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T(
                `المساحة الإجمالية\nالإجمالي:  685.92 م٢`,
                `Total Area\nTotal: 685.92 m²`
              ),
              number: "60%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("نسبة اكتمال البيع", "Sales Completion Rate"),
              number: "10%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("متوسط سعر البيع/م٢", "Average Selling Price/m²"),
              number: "5%",
            },
          ],
        }}
      />
    </section>
  );
};

const TotalRevenueSection = () => {
  const { T } = useLang();
  return (
    <section className="flex border-4 border-[#0E7090] rounded-[16px] overflow-hidden p-[64px] flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("إجمالي الإيرادات", "Total revenue")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            test: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
          },
          body: [
            {
              2027: 1,
              2026: 0,
              test: 3,
              Statement: T("إجمالي الإيراد السنوي", "Total Annual Revenue"),
              number: "60%",
            },
          ],
        }}
      />
    </section>
  );
};

const TotalRevenueSection2 = () => {
  const { T } = useLang();
  return (
    <section className="flex border-4 border-[#0E7090] rounded-[16px] overflow-hidden p-[64px] flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("إجمالي الإيرادات", "Total revenue")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2025: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
          },
          body: [
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("إجمالي الإيراد السنوي", "Total Annual Revenue"),
              number: "60%",
            },
          ],
        }}
      />
    </section>
  );
};

const VariableRatiosOnRent = () => {
  const { T } = useLang();
  return (
    <section className="flex flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("نسب المتغيرات على الإيجار", "Variable ratios on rent")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2025: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
          },
          body: [
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("عدد سنوات البناء", "Number of Construction Years"),
              number: "60%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("نسبة الضريبة", "Tax Rate"),
              number: "10%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("زيادة السعر", "Price Increase"),
              number: "5%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("عمولة المبيعات", "Sales Commission"),
              number: "5%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("الزكاة", "Zakat"),
              number: "5%",
            },
          ],
        }}
      />
    </section>
  );
};
const ResidentialFloorsSection2 = () => {
  const { T } = useLang();
  return (
    <section className="flex flex-col gap-8">
      <p className="text-[24px] text-center font-bold">
        {T("الطوابق السكنية", "residential floors")}
      </p>
      <Table
        dir={T("ltr", "rtl")}
        data={{
          header: {
            Statement: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>{T("البيان", "Statement")}</span>
              </div>
            ),
            2025: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2025</span>
              </div>
            ),
            2026: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2026</span>
              </div>
            ),
            2027: (
              <div className="flex items-center gap-1 justify-center">
                <HiOutlineQuestionMarkCircle className="text-gray-500" />
                <span>2027</span>
              </div>
            ),
          },
          body: [
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T(
                `المساحة الإجمالية\nالإجمالي:  685.92 م٢`,
                `Total Area\nTotal: 685.92 m²`
              ),
              number: "60%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("نسبة اكتمال البيع", "Sales Completion Rate"),
              number: "10%",
            },
            {
              2025: 3,
              2026: 0,
              2027: 1,
              Statement: T("متوسط سعر البيع/م٢", "Average Selling Price/m²"),
              number: "5%",
            },
          ],
        }}
      />
    </section>
  );
};

const CashFlowsFromSalesSection = () => {
  const { T } = useLang();
  return (
    <section className="bg-[#0E7090] w-full   rounded-[16px] p-16 flex flex-col gap-6">
      <p dir={T("rtl", "ltr")} className="text-[36px] font-medium text-white">
        {T("التدفقات النقدية من البيع", "Cash flows from sales")}
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-center   gap-16">
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] font-medium text-white ">
            {T("السنة الثالثة", "Third year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T(
                    "إجمالي التكاليف على السنة",
                    "Total Annual Costs"
                  ),
                  number: 2068753,
                },
                {
                  Statement: T("إيرادات السنة", "Annual Revenue"),
                  number: 489067,
                },
                {
                  Statement: T("تكلفة المبيعات", "Sales Cost"),
                  number: 58688,
                },
                {
                  Statement: T(
                    "صافي الإيراد بعد تكلفة المبيعات",
                    "Net Revenue After Sales Cost"
                  ),
                  number: 130825,
                },
                {
                  Statement: T("صافي الربح السنة", "Net Profit (Annual)"),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net Profit After Tax"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net Profit After Zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("صافي الربح تراكمي", "Cumulative Net Profit"),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار سنوي", "Annual ROI"),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار تراكمي", "Cumulative ROI"),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] text-white font-medium">
            {T("السنة  الثانية", "Second year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T(
                    "إجمالي التكاليف على السنة",
                    "Total Annual Costs"
                  ),
                  number: 489067,
                },
                {
                  Statement: T("إيرادات السنة", "Annual Revenue"),
                  number: 58688,
                },
                {
                  Statement: T("تكلفة المبيعات", "Sales Cost"),
                  number: 130825,
                },
                {
                  Statement: T(
                    "صافي الإيراد بعد تكلفة المبيعات",
                    "Net Revenue After Sales Cost"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("صافي الربح السنة", "Net Profit (Annual)"),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net Profit After Tax"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net Profit After Zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("صافي الربح تراكمي", "Cumulative Net Profit"),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار سنوي", "Annual ROI"),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار تراكمي", "Cumulative ROI"),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] text-white font-medium">
            {T("السنة الاولى", "First year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T(
                    "إجمالي التكاليف على السنة",
                    "Total costs for the year"
                  ),
                  number: 2068753,
                },
                {
                  Statement: T("إيرادات السنة", "Year's revenue"),
                  number: 489067,
                },
                {
                  Statement: T("تكلفة المبيعات", "cost of sales"),
                  number: 58688,
                },
                {
                  Statement: T(
                    "صافي الإيراد بعد تكلفة المبيعات",
                    "Net revenue after cost of sales"
                  ),
                  number: 130825,
                },
                {
                  Statement: T("صافي الربح السنة", "Net profit for the year"),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net profit after tax"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net profit after zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("صافي الربح تراكمي", "Cumulative net profit"),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار سنوي", "Annual ROI"),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "عائد الاستثمار تراكمي",
                    "cumulative return on investment"
                  ),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col text-white justify-between items-center text-center">
        <div className="flex w-full py-6 flex-col gap-1">
          <p className="text-[20px] font-Cairo ">
            {T(
              "العائد على الاستثمار تراكمي من المشروع",
              "Cumulative return on investment from the project"
            )}
          </p>
          <p className="text-[48px]">0 %</p>
        </div>
        <div className="flex w-full py-6 flex-col gap-1">
          <p className="text-[20px] font-Cairo ">
            {T("فترة الاسترداد", "Recovery period")}
          </p>
          <p className="text-[48px]">15.71</p>
        </div>
      </div>
    </section>
  );
};
const CashFlowsFromRent = () => {
  const { T } = useLang();
  return (
    <section className="bg-[#0E7090] w-full   rounded-[16px] p-16 flex flex-col gap-6">
      <p dir={T("rtl", "ltr")} className="text-[36px] font-medium text-white">
        {T("التدفقات النقدية من الإيجار", "cash flows from rent")}
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-center   gap-16">
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] font-medium text-white ">
            {T("السنة الثالثة", "Third year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T("إيرادات السنة", "Annual Revenue"),
                  number: 489067,
                },
                {
                  Statement: T("مصاريف الصيانة", "Maintenance Expenses"),
                  number: 58688,
                },
                {
                  Statement: T("صافي الربح السنة", "Net Profit (Annual)"),
                  number: 130825,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net Profit After Tax"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net Profit After Zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار للسنة", "Annual ROI"),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] text-white font-medium">
            {T("السنة  الثانية", "Second year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T("إيرادات السنة", "Annual Revenue"),
                  number: 489067,
                },
                {
                  Statement: T("مصاريف الصيانة", "Maintenance Expenses"),
                  number: 58688,
                },
                {
                  Statement: T("صافي الربح السنة", "Net Profit (Annual)"),
                  number: 130825,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net Profit After Tax"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net Profit After Zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار للسنة", "Annual ROI"),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-center text-[20px] text-white font-medium">
            {T("السنة الاولى", "First year")}
          </p>
          <Table
            dir={T("rtl", "ltr")}
            textColor="text-white"
            data={{
              header: {
                Statement: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("البيان", "Statement")}</span>
                  </div>
                ),
                number: (
                  <div className="flex items-center gap-1 justify-center">
                    <HiOutlineQuestionMarkCircle className="text-gray-500" />
                    <span>{T("ريال/م²", "riyals/m²")}</span>
                  </div>
                ),
              },
              body: [
                {
                  Statement: T("إيرادات السنة", "Year's Revenue"),
                  number: 2068753,
                },
                {
                  Statement: T("مصاريف الصيانة", "Maintenance Expenses"),
                  number: 489067,
                },
                {
                  Statement: T("صافي الربح السنة", "Net Profit (Annual)"),
                  number: 58688,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الضرائب",
                    "Net Profit After Tax"
                  ),
                  number: 130825,
                },
                {
                  Statement: T(
                    "صافي الربح بعد الزكاة",
                    "Net Profit After Zakat"
                  ),
                  number: 2747333,
                },
                {
                  Statement: T("عائد الاستثمار للسنة", "Annual ROI"),
                  number: 2747333,
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="flex text-white justify-between items-center text-center">
        <div className="flex w-full py-6 flex-col gap-1">
          <p className="text-[20px] font-Cairo ">
            {T("فترة الاسترداد", "Recovery period")}
          </p>
          <p className="text-[48px]">15.71</p>
        </div>
      </div>
    </section>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const profit = payload[0].value;
    const cost = payload[1].value;
    return (
      <div className="rounded-lg bg-gray-900 p-3 text-white">
        <div className="text-xl">
          {cost},{profit}
        </div>
        <div className="text-sm">{label} 10, 2025</div>
      </div>
    );
  }

  return null;
};
function ProfitCostChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeDataKey, setActiveDataKey] = useState(null);
  const chartRef = useRef(null);

  const handleMouseMove = (props) => {
    if (props && props.activeTooltipIndex !== undefined) {
      setActiveIndex(props.activeTooltipIndex);
    }
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setActiveDataKey(null);
  };

  const handleDotClick = (dataKey) => {
    setActiveDataKey(dataKey);
  };
  const data = [
    { month: "Jan", profit: 1200, cost: 900 },
    { month: "Feb", profit: 1400, cost: 950 },
    { month: "Mar", profit: 1300, cost: 980 },
    { month: "Apr", profit: 1500, cost: 1000 },
    { month: "May", profit: 1700, cost: 1050 },
    { month: "Jun", profit: 1600, cost: 1100 },
    { month: "Jul", profit: 1800, cost: 1150 },
    { month: "Aug", profit: 2200, cost: 1200 },
    { month: "Sep", profit: 1900, cost: 1250 },
    { month: "Oct", profit: 2100, cost: 1300 },
    { month: "Nov", profit: 2300, cost: 1350 },
    { month: "Dec", profit: 2500, cost: 1400 },
  ];
  return (
    <div className="relative h-64 w-full rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={chartRef}
        >
          <defs>
            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B68EE" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#7B68EE" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity={0} />
            </linearGradient>

            {/* Vertical line gradients */}
            <linearGradient id="profitVerticalLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B68EE" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#7B68EE" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="costVerticalLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <CartesianGrid horizontal={true} vertical={false} opacity={0.2} />
          <Tooltip content={<CustomTooltip />} cursor={false} />

          {/* Area for profit line - appears only on hover */}
          {activeIndex !== null && activeDataKey === "profit" && (
            <svg>
              <path
                d={`M0,${data[activeIndex].profit * 0.1} 
                      L${window.innerWidth},${data[activeIndex].profit * 0.1} 
                      L${window.innerWidth},${window.innerHeight} 
                      L0,${window.innerHeight} Z`}
                fill="url(#profitGradient)"
                opacity={0.8}
              />
            </svg>
          )}

          {/* Area for cost line - appears only on hover */}
          {activeIndex !== null && activeDataKey === "cost" && (
            <svg>
              <path
                d={`M0,${data[activeIndex].cost * 0.1} 
                      L${window.innerWidth},${data[activeIndex].cost * 0.1} 
                      L${window.innerWidth},${window.innerHeight} 
                      L0,${window.innerHeight} Z`}
                fill="url(#costGradient)"
                opacity={0.8}
              />
            </svg>
          )}

          {/* Profit Line */}
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#7B68EE"
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{
              r: 8,
              stroke: "#7B68EE",
              strokeWidth: 2,
              fill: "#FFFFFF",
              onClick: () => handleDotClick("profit"),
            }}
          />

          {/* Cost Line */}
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#FF6B6B"
            strokeWidth={3}
            dot={{ r: 0 }}
            activeDot={{
              r: 8,
              stroke: "#FF6B6B",
              strokeWidth: 2,
              fill: "#FFFFFF",
              onClick: () => handleDotClick("cost"),
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Vertical trigger line overlay */}
      {activeIndex !== null && activeDataKey === "profit" && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: `${(activeIndex / (data.length - 1)) * 100}%`,
            top: 0,
            width: "2px",
            height: "100%",
            background:
              "linear-gradient(to bottom, #7B68EE 0%, rgba(123, 104, 238, 0) 100%)",
          }}
        />
      )}

      {activeIndex !== null && activeDataKey === "cost" && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: `${(activeIndex / (data.length - 1)) * 100}%`,
            top: 0,
            width: "2px",
            height: "100%",
            background:
              "linear-gradient(to bottom, #FF6B6B 0%, rgba(255, 107, 107, 0) 100%)",
          }}
        />
      )}
    </div>
  );
}

const BlogPostsSection = () => {
  const { T } = useLang();
  return (
    <section className="flex flex-col gap-16">
      <div className="flex items-start justify-between">
        <div>
          <div>
            <p className="text-[#6941C6]">{T("مدونتنا", "Our blog")}</p>
            <p className="text-[#181D27] text-[36px]">
              {T("أحدث منشورات المدونة", "Latest blog posts")}
            </p>
          </div>
          <p className="text-[#535862]  text-[20px]">
            {T(
              "الأدوات والاستراتيجيات التي تحتاجها الفرق الحديثة لمساعدة شركاتها على النمو.",
              "Tool and strategies modern teams need to help their companies grow."
            )}
          </p>
        </div>
        <button className="bg-[#0E7090] px-[18px] py-[12px] rounded-[8px] text-[16px] text-white">
          {T("عرض جميع المشاركات", "View all posts")}
        </button>
      </div>
      <div className="flex items-center gap-[64px] md:flex-row flex-col justify-between ">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

const PostCard = () => {
  const { T } = useLang();
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <img
          src="/Cardpic.webp"
          alt="Blog Post"
          className="w-full h-[256px] object-cover rounded-lg"
        />
      </div>
      <div>
        <p className="text-[#6941C6] text-[14px]">{T("تصميم", "Design")}</p>
        <p className="text-[#181D27] text-[18px] font-semibold">
          {T("عروض مراجعة تجربة المستخدم", "UX review presentations")}
        </p>
        <p>
          {T(
            "كيف تقوم بإنشاء عروض تقديمية جذابة تبهر زملاءك وتثير إعجاب مديريك؟",
            "How do you create compelling presentations that wow your colleagues and impress your managers?"
          )}
        </p>
        <div>
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full overflow-hidden">
              <img
                src="/userImg.webp"
                alt="Blog Post"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-[14px] ">
              <p>Olivia Rhye</p>
              <p className="text-[#535862]">20 Jan 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
