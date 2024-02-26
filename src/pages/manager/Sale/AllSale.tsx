import { Table, TableColumnsType } from "antd";
import { useGetAllSellQuery } from "../../../redux/features/product/product.api";
import moment from "moment";

interface DataType {
        key: string;
        productName: string;
        productPrice: number;
        buyerName: string;
        sellerName: string;
        quantity: number;
        totalPrice: number;
        discountPrice: number;
        saleDate: Date;
      }
const AllSale = () => {
  //
  const { data: allProduct } = useGetAllSellQuery("");
  const filteredData = allProduct?.data.map((item: any) => ({
    _id: item?._id,
    key: item?._id,
    productName: item?.productId?.name,
    productPrice: item?.productId?.price,
    buyerName: item?.buyerName,
    sellerName: item?.sellerName,
    quantity: item?.sell,
    totalPrice: item?.totalPrice,
    discountPrice: item?.discountPrice,
    saleDate: moment(item?.saleDate).format("L"),
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Price",
      dataIndex: "productPrice",
    },
    {
      title: "Buyer Name",
      dataIndex: "buyerName",
    },
    {
      title: "Seller Name",
      dataIndex: "sellerName",
    },
    {
      title: " Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Discount Price",
      dataIndex: "discountPrice",
    },
    {
      title: "Sale Date",
      dataIndex: "saleDate",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={filteredData} />
    </>
  );
};

export default AllSale;
