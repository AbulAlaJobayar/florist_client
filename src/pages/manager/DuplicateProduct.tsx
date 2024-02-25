// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddProductMutation,
  useGetSingleProductQuery,
} from "../../redux/features/product/product.api";
import { Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import FMForm from "../../component/form/FMForm";
import { Button, Col, Form, Input, Row } from "antd";
import FMInput from "../../component/form/FMInput";
import PMSelect from "../../component/form/FMSelect";
import {
  flowerCategoryOptions,
  flowerColorOptions,
  flowerFragranceOptions,
  flowerSizeOptions,
} from "../../constant/golbal";
import FMDatepicker from "../../component/form/FMDatepicker";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageHosting } from "../../utils/imageHosting";

const EditProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { data: singlePData } = useGetSingleProductQuery(id);
  console.log(singlePData?.data.name);
  const [productData] = useAddProductMutation();
  const defaultValue = {
    name: singlePData?.data.name,
    image: singlePData?.data.image,
    price: singlePData?.data.price,
    quantity: singlePData?.data.quantity,
    bloomDate: "",
    color: singlePData?.data.color,
    category: singlePData?.data.category,
    size: singlePData?.data.size,
    fragrance: singlePData?.data.fragrance,
  };
  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    const toastId = toast.loading("Product Adding", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    let imageUrl;
    if (data?.image) {
      imageUrl = data?.image;
    }
    try {
      const hostImage = await imageHosting(imageUrl);
      const productInfo = {
        name: data.name || singlePData?.data.name,
        image: hostImage || singlePData?.data.image,
        price: Number(data.price) || singlePData?.data.price,
        quantity: Number(data.quantity) || singlePData?.data.quantity,
        bloomDate: data.bloomDate || singlePData?.data.bloomDate,
        color: data.color || singlePData?.data.color,
        category: data.category || singlePData?.data.category,
        size: data.size || singlePData?.data.size,
        fragrance: data.fragrance || singlePData?.data.fragrance,
      };
      // send data in server
      const res = (await productData(productInfo)) as any;
      if (res.error) {
        toast.error("Something went Wrong, Please try again", {
          id: toastId,
          duration: 3000,
          position: "top-center",
          style: { color: "red" },
        });
        setLoading(false);
      } else {
        toast.success("Product Added successfully", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error("something went wrong!", {
        id: toastId,
        duration: 2000,
        style: { color: "red" },
      });
      setLoading(false);
    }
  };

  return (
    <div className=" w-4/5 mx-auto my-auto">
      <div className=" text-center font-semibold  my-2">
        <h1 className="capitalize text-textColor text-2xl">Add your Product</h1>
      </div>
      <div className="mt-5">
        <FMForm onSubmit={onSubmit} defaultValues={defaultValue}>
          <Row gutter={12}>
            <Col span={12}>
              <FMInput type="text" name="name" label="Flower Name" />
            </Col>
            <Col span={12}>
              <Controller
                name="image"
                render={({
                  field: { onChange, value, ...field },
                  fieldState: { error },
                }) => (
                  <Form.Item label={"Image"}>
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                    {error && (
                      <small style={{ color: "red" }}>{error.message}</small>
                    )}
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FMInput type="number" name="price" label="Flower Price" />
            </Col>
            <Col span={12}>
              <FMInput type="number" name="quantity" label="Flower Quantity" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12}>
              <FMDatepicker name="bloomDate" label="Bloom Date" />
            </Col>

            <Col span={12}>
              <PMSelect
                name="color"
                label="Flower Color"
                options={flowerColorOptions}
              />
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <PMSelect
                name="category"
                label="Flower Category"
                options={flowerCategoryOptions}
              />
            </Col>
            <Col span={12}>
              <PMSelect
                name="size"
                label="Flower Size"
                options={flowerSizeOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <PMSelect
                name="fragrance"
                label="Flower Fragrance"
                options={flowerFragranceOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button
                htmlType="submit"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )}
              </Button>
            </Col>
          </Row>
        </FMForm>
      </div>
    </div>
  );
};

export default EditProduct;
