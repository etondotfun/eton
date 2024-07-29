import React from "react";
import CardTop3 from "../cards/CardTop3";

const Top3 = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-between items-center w-[98%]">
        <CardTop3
          banner={"/background2.jpg"}
          name="My Meme"
          ca={"address...0123"}
          dex="Uniswap"
          devaddr={"address...0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTop3
          banner={"/background2.jpg"}
          name="My Meme"
          ca={"address...0123"}
          dex="Uniswap"
          devaddr={"address...0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTop3
          banner={"/background2.jpg"}
          name="My Meme"
          ca={"address...0123"}
          dex="Uniswap"
          devaddr={"address...0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
      </div>
    </div>
  );
};

export default Top3;
