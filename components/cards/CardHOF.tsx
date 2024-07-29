import React from "react";
import Image from "next/image";

const CardHOF = ({
  image,
  name,
  ca,
  dex,
  ath,
}: {
  image: any;
  name: string;
  ca: any;
  dex: string;
  ath: any;
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-4 bg-black/[0.3] px-4 py-2 rounded-xl">
        <div className="w-[10%] rounded-full flex justify-center items-center">
          <Image width={40} height={40} src={image} alt="icon" />
        </div>

        <div className="flex flex-col gap-1 w-[90%]">
          <div className="text-white font-semibold flex justify-between">
            <div>{name}</div>
            <div>ATH: <span>{ath}</span></div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="text-white font-semibold">
              CA: <span className="text-textColor font-semibold">{ca}</span>
            </div>
            <div className="text-white font-semibold">
              Listed: <span className="text-textColor">{dex}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHOF;
