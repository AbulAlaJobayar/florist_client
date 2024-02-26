
import { useState } from "react";
import { IoMdColorPalette } from "react-icons/io";
import { GiFragrance } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
import OrderModal from "./order/OrdarModal";
import { Button } from "antd";

type TCard = {
  key: any;
  item: any;
};
const Card: React.FC<TCard> = ({ item }:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className=" p-4 block mt-4 rounded-lg mb-4 shadow-sm shadow-red-100 bg-slate-100">
        <img
          alt="Home"
          src={item.image}
          className=" w-full rounded-md object-cover h-36"
        />
        <div className="mt-2 mx-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-textColor">
              Price<span className="ml-1">${item.price}</span>
            </p>
          </div>

          <div className="mt-6 flex items-center justify-around gap-4 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IoMdColorPalette />
              <div className="mt-1.5 sm:mt-0">
                <p className="font-medium capitalize">{item.color}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <GiFragrance />
              <div className="mt-1.5 sm:mt-0">
                <p className="font-medium">{item.fragrance}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <MdProductionQuantityLimits />

              <div className="mt-1.5 sm:mt-0">
                <p className="font-medium">{item.quantity}</p>
              </div>
            </div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <SlSizeActual />

              <div className="mt-1.5 sm:mt-0">
                <p className="font-medium">{item.size}</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          onClick={handleOrder}
          className="w-full  font-semibold text-textColor mt-4  rounded-md"
        >
          Sell Now
        </Button>
      </div>
      <OrderModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        item={item}
      />
     
    </>
  );
};

export default Card;
