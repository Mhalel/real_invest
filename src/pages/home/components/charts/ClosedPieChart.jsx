import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function getTotal(data) {
  return data.reduce((acc, item) => acc + item.value, 0);
}
function ClosedPieChart({
  data = [],
  COLORS = ["#E9EAEB", "#7F56D9", "#9E77ED", "#B692F6", "#D6BBFB"],
  className = "w-[400px] h-[400px]",
}) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            formatter={(value, name, props) => [
              `${value} (${((value / getTotal(data)) * 100).toFixed(0)}%)`,
              name,
            ]}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ClosedPieChart;
