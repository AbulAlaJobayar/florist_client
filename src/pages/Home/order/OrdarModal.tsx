import React, { useState } from "react";
import { Button, Col, Divider, InputNumber, Modal, Row } from "antd";
import { toast } from "sonner";
import FMForm from "../../../component/form/FMForm";
import FMInput from "../../../component/form/FMInput";
import { FieldValues } from "react-hook-form";
import { TProduct } from "../../../types";
import FMDatepicker from "../../../component/form/FMDatepicker";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
type TProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  item: TProduct;
};
const OrderModal = ({ isModalOpen, setIsModalOpen, item }: TProps) => {
  const [productQuantity, setProductQuantity] = useState("");
  const onChange = (value: any) => {
    setProductQuantity(value);
  };
  const user = useAppSelector(selectCurrentUser);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   create Order
  // const [crateSale, error] = useSaleProductMutation();

  // console.log(error);
  // const handleOrder = (id: any) => {
  //   const toastId = toast.success("order Creating", {
  //     duration: 5000,
  //     position: "top-center",
  //   });
  //   // const saleInfo = {
  //   //   productId: id,
  //   //   purchase: Number(productQuantity || 1),
  //   // };
  //   // crateSale(saleInfo);
  //   toast.success("Order completed", {
  //     id: toastId,
  //     duration: 2000,
  //     position: "top-center",
  //   });
  //   setIsModalOpen(false);
  // };
  const onSubmit = (data: FieldValues) => {
    console.log(data, item._id);
    setIsModalOpen(false);
  };
  const defaultValue = {
    seller: user?.name,
  };

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <h1 >Discount and Payment</h1>
            {/* <div className="flex justify-between">
              <p>
                Price: <span>${item?.price}</span>
              </p>
              <p>
                Quantity: <span>{item?.quantity}</span>
              </p>
              <p>
                Color: <span>{item?.color}</span>
              </p>
              <p>
                Fragrance: <span>{item?.fragrance}</span>
              </p>
            </div> */}
          </div>
          <Divider style={{ background: "red" }} />
          <FMForm onSubmit={onSubmit} defaultValues={defaultValue}>
            <Row>
              <Col span={24}>
              <FMInput type="text" name="promoCode" label={'Promo Code'}/>
              </Col>
            </Row>
           < Divider style={{ background: "red" }}/>
            <Row gutter={12}>
              <Col span={12}>
                <FMInput type="number" name="quantity" label="Quantity" />
              </Col>
              <Col span={12}>
                <FMInput type="text" name="buyerName" label="Buyer Name" />
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
                <FMDatepicker name="date" label="Sale Date" />
              </Col>
              <Col span={12}>
                <FMInput
                  type="text"
                  name="seller"
                  label="Seller Name"
                  disable={true}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {" "}
                <Button htmlType="submit" style={{ width: "100%" }}>
                  Place Order
                </Button>
              </Col>
            </Row>
          </FMForm>
        </div>
      </Modal>
    </>
  );
};

export default OrderModal;
