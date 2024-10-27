import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllProductQuery } from "../../redux/features/product/product.api";
import moment from "moment";
import { useState } from "react";

interface DataType {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  bloomDate: string;
  color: string;
  category: string;
  size: string;
  fragrance: string;
  image: string;
}
const DashboardTable = () => {
  const [params, setParams] = useState([]);
  const { data: allProduct } = useGetAllProductQuery(params);
  const filteredData = allProduct?.data.map(
    ({
      _id,
      name,
      price,
      quantity,
      bloomDate,
      color,
      category,
      size,
      fragrance,
      image,
    }) => ({
      _id,
      key: _id,
      name,
      price,
      quantity,
      bloomDate: moment(bloomDate).format("L"),
      color,
      category,
      size,
      fragrance,
      image,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string) => (
        <img src={image} alt="product" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: any = [];
      filters.category?.forEach((item) =>
        queryParams.push({ name: "category", value: item })
      );
      setParams(queryParams);
    }
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys: any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 3 }}
        onChange={onChange}
      />
    </>
  );
};

export default DashboardTable;
