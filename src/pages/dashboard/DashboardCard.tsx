import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  useGetAllSellQuery,
  useTotalProductQuery,
} from "../../redux/features/product/product.api";
import moment from "moment";
import { RiUser3Line } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";
// import { AiOutlineProject } from "react-icons/ai";
import { CgProductHunt } from "react-icons/cg";
import { useTotalSellerQuery } from "../../redux/features/seller/seller";
import { useGetTotalCustomerQuery } from "../../redux/features/customer/customer";
import { useTotalCouponQuery } from "../../redux/features/coupon/coupon.api";
import { IoCartOutline } from "react-icons/io5";
import DashboardTable from "./DashboardTable";

interface SaleItem {
  saleDate: string;
}

// Define the type for the data used in charts
interface ChartData {
  name: string;
  value: number;
}

const DashboardCard: React.FC = () => {
  const { data: gateData } = useGetAllSellQuery("");
  const { data: total_Seller, isLoading } = useTotalSellerQuery("");
  const { data: totalCustomer, isLoading: isCustomerLoading } =
    useGetTotalCustomerQuery("");
  const { data: totalCoupon, isLoading: isCouponLoading } =
    useTotalCouponQuery("");
  const { data: totalProduct, isLoading: isTotalProductLoading } =
    useTotalProductQuery("");
  // Function to filter data based on a specific period

  const getCountDate = (
    name: string,
    data: SaleItem[] | undefined
  ): SaleItem[] => {
    if (!data) return [];

    switch (name) {
      case "daily": {
        const today = data.filter((item) =>
          moment(item.saleDate).isSame(moment(), "day")
        );
        return today;
      }
      case "weekly": {
        const firstDayOfWeek: moment.Moment = moment().startOf("week");
        const weekly = data.filter((item) =>
          moment(item.saleDate).isSameOrAfter(firstDayOfWeek, "day")
        );
        return weekly;
      }
      case "month": {
        const currentMonth = moment().month();
        const monthly = data.filter(
          (item) => moment(item.saleDate).month() === currentMonth
        );
        return monthly;
      }
      case "year": {
        const currentYear = moment().year();
        const yearly = data.filter(
          (item) => moment(item.saleDate).year() === currentYear
        );
        return yearly;
      }
      default:
        return data;
    }
  };

  // Get filtered data for each period
  const daily = getCountDate("daily", gateData?.data);
  const weekly = getCountDate("weekly", gateData?.data);
  const month = getCountDate("month", gateData?.data);
  const year = getCountDate("year", gateData?.data);

  // Prepare data for the charts
  const data: ChartData[] = [
    { name: "Daily Sale", value: daily.length },
    { name: "Weekly Sale", value: weekly.length },
    { name: "Monthly Sale", value: month.length },
    { name: "Yearly Sale", value: year.length },
  ];

  return (
    <>
      <div className=" flex justify-between mb-20">
        <div className="flex justify-between items-center bg-[#FF9F43] p-5 gap rounded">
          <div className="font-semibold text-xl mr-16 text-white">
            <p className="font-semibold text-2xl ">
              {isCustomerLoading ? <LoadingOutlined /> : totalCustomer.data}
            </p>
            <p className="font-semibold text-xl">customers</p>
          </div>
          <RiUser3Line size={50} color="white" />
        </div>
        <div className="flex justify-between items-center bg-[#00CFE8] p-5 gap rounded">
          <div className="font-semibold text-xl mr-16 text-white">
            <p className="font-semibold text-2xl ">
              {isLoading ? <LoadingOutlined /> : total_Seller.data}
            </p>
            <p className="font-semibold text-xl">Sellers</p>
          </div>
          <FiUserCheck size={50} color="white" />
        </div>
        <div className="flex justify-between items-center bg-[#1B2850] p-5 gap rounded">
          <div className="font-semibold text-xl mr-16 text-white">
            <p className="font-semibold text-2xl ">
              {isCouponLoading ? <LoadingOutlined /> : totalCoupon.data}
            </p>
            <p className="font-semibold text-xl">Coupons</p>
          </div>
          <IoCartOutline size={50} color="white" />
        </div>
        <div className="flex justify-between items-center bg-[#28C76F] p-5 gap rounded">
          <div className="font-semibold text-xl mr-16 text-white">
            <p className="font-semibold text-2xl ">
              {isTotalProductLoading ? <LoadingOutlined /> : totalProduct.data}
            </p>
            <p className="font-semibold text-xl">Products</p>
          </div>
          <CgProductHunt size={50} color="white" />

          {/* <RiUser3Line size={50} color="white" /> */}
        </div>
      </div>
      {/* ------------------------- */}
      <div className="flex justify-between">
        <div style={{ width: "50%", height: 350, marginLeft: -50 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: "50%" }}>
          <DashboardTable />
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
