import React from "react";
import CardTop3 from "../cards/CardTop3";

const Top3 = () => {
  return (
    <div className="w-full flex justify-center items-center mb-10">
      <div className="flex items-center gap-20 w-[98%] flex-wrap">
        <CardTop3
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTop3
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTop3
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
      </div>
    </div>
  );
};

export default Top3;
