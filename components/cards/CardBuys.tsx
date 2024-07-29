import Image from "next/image";
import React from "react";

const CardBuys = ({
  image,
  addr,
  amt,
  name,
}: {
  image: any;
  addr: any;
  amt: any;
  name: string;
}) => {
  return (
    <div className="">
      <div className="flex items-center px-4 py-2 rounded-xl">
        <div className="rounded-full flex gap-4 justify-center items-center">
          <Image width={20} height={20} src={image} alt="icon" />
          <div className="text-white font-semibold flex gap-2">
            <div>{addr}</div>
            <div>Bought</div>
            <div>{amt}</div>
            <div>PLS</div>
            <div>of</div>
          </div>
          <div className="text-textColor font-semibold">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBuys;
