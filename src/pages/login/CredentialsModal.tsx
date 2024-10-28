import { Modal, Button } from "antd";

const CredentialsModal: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isModalOpen, setIsModalOpen }) => {
 

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
      <Modal
        title={
          <h2 className="text-2xl font-bold text-[#387a62]">
            Login Credentials
          </h2>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="close"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400"
          >
            Close
          </Button>,
        ]}
        centered
        className="p-5"
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-[#387a62]">Manager:</h3>
            <p className="text-sm text-gray-700">
              Email: abulalajobayar@gmail.com
            </p>
            <p className="text-sm text-gray-700">Password: 12345</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-[#387a62]">Seller:</h3>
            <p className="text-sm text-gray-700">Email: jobayar59@gmail.com</p>
            <p className="text-sm text-gray-700">Password: 12345</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-[#387a62]">Coupon:</h3>
            <p className="text-sm text-gray-700">borno25</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CredentialsModal;
