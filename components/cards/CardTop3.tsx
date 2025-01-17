import Image from "next/image";
import React from "react";

const CardTop3 = ({
  name,
  image,
  ca,
  devaddr,
  vol,
  mc,
  lp,
}: {
  name: string;
  image: any;
  ca: any;
  devaddr: any;
  vol: any;
  mc: any;
  lp: any;
}) => {
  return (
    <div>
      <div className="card relative w-[260px] sm:w-[300px] h-[320px] sm:h-[340px] flex flex-col justify-between left-[50px] sm:left-[70px]">
        <div className="box relative w-full h-[85px] sm:h-[100px] bg-textColor rounded-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              width={100}
              height={100}
              src="/eton-logo.jpeg"
              alt="icon"
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="box relative w-[90%] h-[225px] sm:h-[230px] bg-tonprimary rounded-2xl">
          <div className="absolute inset-0 py-[12px] px-[8px] flex flex-col items-center gap-4 text-primary">
            <div className="text-xl sm:text-2xl font-bold text-textColor w-full pl-[70px] flex shrink">
              {name}
            </div>
            <div className="flex w-full justify-between items-center gap-2 pt-[24px]">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <div className="text-sm sm:text-base">CA</div>
                  <div className="text-[12px] sm:text-sm">{ca}</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base">Volume</div>
                  <div className="text-textColor font-semibold">$ {vol}</div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div>
                  <div className="text-sm sm:text-base">DEX</div>
                  <div className="flex gap-1 justify-center items-center">
                    <Image width={20} height={20} src="/STON.svg" alt="ston" />
                    <div className="text-[12px] sm:text-sm">STON.fi</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm sm:text-base">MC</div>
                  <div className="text-textColor font-semibold">$ {mc}</div>
                </div>
              </div>

              <div className="flex flex-col items-end text-right gap-4">
                <div>
                  <div className="text-sm sm:text-base">DEV</div>
                  <div className="text-[12px] sm:text-sm">{devaddr}</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base">LP</div>
                  <div className="text-textColor font-semibold">$ {lp}</div>
                </div>
              </div>
            </div>

            <button className="btn relative py-2 w-[90%] bg-textColor rounded-full border-none outline-none text-primary font-semibold text-lg cursor-pointer border-[5px] border-primary">
              Progress
            </button>
          </div>
        </div>

        <div className="circle absolute w-[90px] sm:w-[120px] h-[90px] sm:h-[120px] rounded-[50%] top-[45%] sm:top-[50%] left-[-50px] sm:left-[-70px] translate-y-[-85%] border-8 border-[#FBFBFB]">
          <div className="absolute inset-0 overflow-hidden rounded-[50%]">
            <Image
              width={100}
              height={100}
              src={image}
              alt="icon"
              className="absolute w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTop3;
