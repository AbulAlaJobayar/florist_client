import { Avatar, Button, Card, Col, Row, Spin, Typography } from "antd";
import FMForm from "../../../component/form/FMForm";
import FMInput from "../../../component/form/FMInput";
import {
  useGetMeQuery,
  useProfileUpdateMutation,
} from "../../../redux/features/seller/seller";
import { toast } from "sonner";

const { Title, Text } = Typography;

const ProfilePage = () => {
  //   const user = useAppSelector(selectCurrentUser);

  const {data:user,isLoading}= useGetMeQuery('')



  const [updateByMe] = useProfileUpdateMutation();

  const handleUpdate = async (data: any) => {
    console.log("updated data", data);
    const toastId = toast.loading("Profile Updating", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const res = await updateByMe(data).unwrap();
      console.log("res", res);
      if (res?.data) {
        toast.success("Profile Updated successfully", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
      } else {
        toast.error("Something went Wrong, Please try again", {
          id: toastId,
          duration: 3000,
          position: "top-center",
          style: { color: "red" },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 10,
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
console.log(user.data)
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[16, 16]}>
        {/* Left Side: Profile Info */}
        <Col xs={24} md={8}>
          <Card bordered style={{ textAlign: "center" }}>
            <Avatar
              size={150}
              style={{ marginBottom: 16 }}
              src={user?.data?.image || ""}
            />
            <div className="flex  flex-col justify-start ">
              <Title level={4}>Name : {user?.data?.name}</Title>
              <Text className="text-base font-medium">
                Email: {user?.data?.email}{" "}
              </Text>
              <Text className="text-base font-medium">
                Phone Number: {user?.data?.phoneNumber}{" "}
              </Text>
              <Text className="text-base font-medium">
                Address: {user?.data?.address}{" "}
              </Text>
            </div>
          </Card>
        </Col>

        {/* Right Side: Profile Update Form */}
        <Col xs={24} md={16}>
          <Card bordered>
            <Title level={4} style={{ marginBottom: 24 }}>
              Update Profile
            </Title>
            <FMForm
              defaultValues={{
                name: user?.data?.name,
                email: user?.data?.email,
                phoneNumber: user?.data?.phoneNumber,
                address: user?.data?.address,
              }}
              onSubmit={handleUpdate}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <FMInput name="name" label="Name" type="text" />
                </Col>
                <Col xs={24} md={12}>
                  <FMInput name="email" label="Email" type="email" />
                </Col>
                <Col xs={24} md={12}>
                  <FMInput
                    name="phoneNumber"
                    label="Phone Number"
                    type="text"
                  />
                </Col>
                <Col xs={24} md={12}>
                  <FMInput name="address" label="Address" type="text" />
                </Col>
              </Row>

              <Button
                htmlType="submit"
                type="text"
                className=" w-full rounded-md font-semibold bg-slate-200"
              >
                  Update
              </Button>
              {/* <Button
                type="primary"
                htmlType="submit"
                block
                style={{ marginTop: 16 }}
              >
                Update
              </Button> */}
            </FMForm>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
