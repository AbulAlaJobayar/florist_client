import { Button, Popconfirm, Space, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllProductQuery } from "../../redux/features/product/product.api";
import moment from "moment";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface DataType {
  _id: string;
  name: string;
  price: string;
  quantity: number;
  bloomDate: string;
  color: string;
  category: string;
  size: string;
  fragrance: string;
  image: string;
}
const AllFlower = () => {
  const [params,setParams]=useState([])
  const navigate=useNavigate()
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
const handleDelete=(item)=>{
  console.log(item._id)
}
const handleEdit=(item)=>{
  navigate(`${item._id}`)
  console.log("edit",item._id)
}







 
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Fragrance",
      dataIndex: "fragrance",
    },
    {
      title: "Size",
      dataIndex: "size",
    },
    {
      title: "Bloom Date",
      dataIndex: "bloomDate",
    },
    {
      title: "Type",
      dataIndex: "category",
      
      filters:[
        {
          text:'Rose',
          value:'Rose'
        },
        {
          text:'Bulb',
          value:'Bulb'
        },
        {
          text:'Perennial',
          value:'Perennial'
        },
        {
          text:'Annual',
          value:'Annual'
        },
        {
          text:'Shrub',
          value:'Shrub'
        },
        {
          text:'Climber',
          value:'Climber'
        },
        {
          text:'Wildflower',
          value:'Wildflower'
        },
        {
          text:'Herbaceous',
          value:'Herbaceous'
        },
        {
          text:'Tree',
          value:'Tree'
        },
        {
          text:'Orchid',
          value:'Orchid'
        },
        {
          text:'Tropical',
          value:'Tropical'
        },
        {
          text:'Aquatic',
          value:'Aquatic'
        },
      ]
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    
    },
    {
      title: "Price",
      dataIndex: "price",
      render:(value)=>`$ ${value}`,
      sorter: (a, b) => Number(a.price) - Number(b.price),
    },
    {
      title: "Action",
      render: (item) =>(
        <Space>
          <Button size="small" onClick={() => handleDelete(item)}>Delete</Button>
       <Space>
       <Button size="small" onClick={() => handleEdit(item)}>Edit</Button>
       </Space>
       <Space>
       <Button size="small" onClick={() => handleEdit(item)}>Duplicate</Button>
       </Space>
       
        </Space>
      )
    },
   
  ];

 

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action==='filter'){
     const queryParams:any=[]
     filters.category?.forEach((item)=>(
      queryParams.push({name:'category',value:item})
     ))
     setParams(queryParams);
    }
  };

  
  return (
    <>
      <Table columns={columns} dataSource={filteredData} onChange={onChange} />
    </>
  );
};

export default AllFlower;
