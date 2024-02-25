import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useDelateMultipleProductMutation, useDelateSingleProductMutation, useGetAllProductQuery } from "../../redux/features/product/product.api";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
const AllFlower = () => {
  const [params,setParams]=useState([])
  const navigate=useNavigate()
  const { data: allProduct } = useGetAllProductQuery(params);
  const [deleteSingleProduct]=useDelateSingleProductMutation()
  const [bulkDelete]=useDelateMultipleProductMutation()
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

const handleDelete=(item:string)=>{
  const toastId = toast.loading("product Deleting", {
    position: "top-center",
    style: {
      color: "#8ed1a3",
    },
    duration: 5000,
  })
  deleteSingleProduct(item)
  toast.success("Deleted successfully", {
    id: toastId,
    duration: 2000,
    position: "top-center",
  })
}
const handleEdit=(item:string)=>{
  navigate(`${item}`)
  console.log("edit",item)
}
const handleDuplicate=(item:string)=>{
   navigate(`../duplicate/${item}`)
  // const toastId = toast.loading("product Deleting", {
  //   position: "top-center",
  //   style: {
  //     color: "#8ed1a3",
  //   },
  //   duration: 5000,
  // })
  // deleteSingleProduct(item)
  // toast.success("Deleted successfully", {
  //   id: toastId,
  //   duration: 2000,
  //   position: "top-center",
  // })
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
          <Button size="small" onClick={() => handleDelete(item._id)}>Delete</Button>
       <Space>
       <Button size="small" onClick={() => handleEdit(item._id)}>Edit</Button>
       </Space>
       <Space>
       <Button size="small" onClick={() => handleDuplicate(item._id)}>Duplicate</Button>
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys:any) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // bulk delete
  const handleBulkDelete=()=>{
    const toastId = toast.loading("product Deleting", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 5000,
    })
    bulkDelete(selectedRowKeys)
    toast.success("Deleted successfully", {
      id: toastId,
      duration: 2000,
      position: "top-center",
    })
  }
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
     <div style={{marginBottom:16}}>
        <Button type="default" onClick={handleBulkDelete} disabled={!hasSelected} >
          Bulk Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table  rowSelection={rowSelection} columns={columns} dataSource={filteredData} onChange={onChange} />
    </>
  );
};

export default AllFlower;
