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
};

export default CustomedlineChart;
