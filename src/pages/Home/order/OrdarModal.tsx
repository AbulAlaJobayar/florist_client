import { Button, Col, Divider, Modal, Row } from "antd";
import { toast } from "sonner";
import FMForm from "../../../component/form/FMForm";
import FMInput from "../../../component/form/FMInput";
import { FieldValues } from "react-hook-form";
import { TProduct } from "../../../types";
import FMDatepicker from "../../../component/form/FMDatepicker";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAddSaleMutation } from "../../../redux/features/product/product.api";
type TProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  item: TProduct;
};
const OrderModal = ({ isModalOpen, setIsModalOpen, item }: TProps) => {
  const user = useAppSelector(selectCurrentUser);
  const defaultValue = {
    seller: user?.name,
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //   create Order
  const [crateSale] = useAddSaleMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.success("order Creating", {
      duration: 5000,
      position: "top-center",
    });
    const saleInfo = {
      productId: item._id,
      buyerName: data.buyerName,
      sell: Number(data.quantity || 1),
      sellerName: data.seller,
      saleDate: data.date,
      coupon: data.promoCode || null,
    };
    console.log(saleInfo);
    const res = (await crateSale(saleInfo)) as any;

    if (res?.error) {
      toast.error("Something went Wrong, Please try again", {
        id: toastId,
        duration: 3000,
        position: "top-center",
        style: { color: "red" },
      });
    } else {
      toast.success("Order completed", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setIsModalOpen(false);
    }
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
            <h1 className="PBGColor px-4 py-2 mx-10 rounded font-semibold text-center text-xl SFont">
              Discount and Payment
            </h1>
          </div>
          <Divider style={{ background: "red" }} />
          <FMForm onSubmit={onSubmit} defaultValues={defaultValue}>
            <Row>
              <Col span={24}>
                <FMInput type="text" name="promoCode" label={"Promo Code"} />
              </Col>
            </Row>
            <Divider style={{ background: "red" }} />
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
