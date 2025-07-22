import { useRef, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

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

const CustomedlineChart = ({ data }) => {
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

  const percentageLeft =
    activeIndex !== null && data.length > 1
      ? (activeIndex / (data.length - 1)) * 100
      : 0;

  return (
    <div className="relative h-64 w-full rounded-lg">
      {activeIndex !== null && (
        <div
          className="pointer-events-none absolute h-full w-full top-0 left-0 z-0"
          style={{
            background:
              activeDataKey === "profit"
                ? `linear-gradient(to bottom, #7B68EE88 0%, transparent 100%)`
                : activeDataKey === "cost"
                ? `linear-gradient(to bottom, #FF6B6B88 0%, transparent 100%)`
                : "transparent",
            clipPath: `polygon(${percentageLeft}% 0%, 100% 0%, 100% 100%, ${percentageLeft}% 100%)`,
            transition: "clip-path 0.2s ease-in-out",
          }}
        />
      )}

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          // onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
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
          </defs>

          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <CartesianGrid horizontal={true} vertical={false} opacity={0.2} />
          <Tooltip content={<CustomTooltip />} cursor={false} />

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

      {/* Vertical gradient line */}
      {activeIndex !== null && activeDataKey && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: `${percentageLeft}%`,
            top: 0,
            width: "2px",
            height: "100%",
            background:
              activeDataKey === "profit"
                ? "linear-gradient(to bottom, #7B68EE 0%, rgba(123, 104, 238, 0) 100%)"
                : "linear-gradient(to bottom, #FF6B6B 0%, rgba(255, 107, 107, 0) 100%)",
            zIndex: 10,
            transform: "translateX(-1px)",
          }}
        />
      )}
    </div>
  );
};

export default CustomedlineChart;
