import * as echarts from "echarts";
import { useEffect, useRef } from "react";


const DonutChart = ({
  title,
  data,
  darkerForHigher = false,
  colors = [
    "#E9EAEB", // الأفتح
    "#E4DFF9",
    "#D9CCF6",
    "#CEB9F3",
    "#C3A6F0",
    "#B692ED",
    "#A87FEB",
    "#996BE6",
    "#8B57E0",
    "#7F56D9", // الأغمق
  ],
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data?.length) {
      let finalData = [];

      if (darkerForHigher) {
        // ترتيب تنازلي: الأعلى أولاً
        const sortedData = [...data].sort((a, b) => b.value - a.value);

        // توزيع الألوان حسب الترتيب
        const coloredData = sortedData.map((item, index) => ({
          ...item,
          itemStyle: {
            color: colors[index] || colors[colors.length - 1],
          },
        }));

        // إعادة البيانات إلى ترتيبها الأصلي
        finalData = data.map((originalItem) =>
          coloredData.find((d) => d.name === originalItem.name)
        );
      } else {
        // بدون توزيع مخصص، استخدم الألوان بترتيبها
        finalData = data.map((item, index) => ({
          ...item,
          itemStyle: {
            color: colors[index % colors.length],
          },
        }));
      }

      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: ["60%", "90%"],
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
            data: finalData,
          },
        ],
      };

      chartInstance.current = echarts.init(chartRef.current);
      chartInstance.current.setOption(option);

      return () => {
        chartInstance.current?.dispose();
      };
    }
  }, [data, title, colors, darkerForHigher]);

  return <div ref={chartRef} className="w-full h-full" />;
};

export default DonutChart;