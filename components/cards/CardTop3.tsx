import Image from "next/image";
import React from "react";

const CardTop3 = ({
  banner,
  name,
  ca,
  dex,
  devaddr,
  vol,
  mc,
  lp,
}: {
  banner: any;
  name: string;
  ca: any;
  dex: string;
  devaddr: any;
  vol: any;
  mc: any;
  lp: any;
}) => {
  return (
    <div className="flex flex-col bg-tonprimary p-3 rounded-xl w-[31%]">
      <div className="w-full">
        <Image width={1000} height={1000} src={banner} alt="banner" className="rounded-t-lg w-full" />
      </div>
      <div className="flex flex-col gap-6 text-primary">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col items-start">
            <div>CA</div>
            <div>{ca}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>DEX</div>
            <div>{dex}</div>
          </div>
          <div className="flex flex-col items-end">
            <div>DEV</div>
            <div>{devaddr}</div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col items-start">
            <div>Volume</div>
            <div className="text-textColor font-semibold">$ {vol}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>MC</div>
            <div className="text-textColor font-semibold">$ {mc}</div>
          </div>
          <div className="flex flex-col items-end">
            <div>LP</div>
            <div className="text-textColor font-semibold">$ {lp}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTop3;
