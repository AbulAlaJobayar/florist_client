/* eslint-disable no-case-declarations */
import moment from "moment";
import { useSellerSellQuery } from "../../redux/features/product/product.api";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const DashboardSellerCard = () => {
  const { data: gateData } = useSellerSellQuery("");
  console.log(gateData);

  const getCountDate = (name: string, data: any) => {
    switch (name) {
      case "daily":
        // eslint-disable-next-line no-case-declarations
        const today = data?.filter((item: any) => {
          const saleDate = moment(item.saleDate);
          const currentDate = moment();
          return saleDate.isSame(currentDate, "day");
        });
        return today;
      case "weekly":
        // eslint-disable-next-line no-case-declarations
        const firstDayOfWeek = moment().startOf('week');
        // eslint-disable-next-line no-case-declarations
        const weekly = data?.filter((item:any) => {
            const saleDate = moment(item.saleDate);
            return saleDate.isSameOrAfter(firstDayOfWeek, 'day');
        });
        return weekly;
      case "month":
        const currentMonth = moment().month();
        const monthly = data?.filter((item:any) => {
            const saleDate = moment(item.saleDate);
            return saleDate.month() === currentMonth;
        });
        return monthly;
      case "year":
        const currentYear = moment().year();
        const yearly = data?.filter((item:any) => {
            const saleDate = moment(item.saleDate);
            return saleDate.year() === currentYear;
        });
        return yearly;
      default:
        return data?.filter(() => true);
    }
  };
  const daily = getCountDate("daily", gateData?.data);
  const weekly = getCountDate("weekly", gateData?.data);
  const month = getCountDate("month", gateData?.data);
  const year = getCountDate("year", gateData?.data);
  console.log(daily);
  const data = [
    { name: "Daily Sale", value: daily?.length || 0 },
    { name: "Weekly Sale", value: weekly?.length || 0 },
    { name: " Monthly Sale", value: month?.length || 0 },
    { name: "Yearly Sale", value: year?.length || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel: React.FC<{
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }> = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            isAnimationActive={true}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data?.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardSellerCard;
