import React from "react";
import CardTokens from "../cards/CardTokens";

const AllTokens = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center gap-20 w-[98%] flex-wrap">
        <CardTokens
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTokens
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTokens
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTokens
          name="New Token"
          image={"/eth.svg"}
          ca={"addr..0123"}
          devaddr={"addr..0123"}
          vol={"100k"}
          mc={"200k"}
          lp={"4.85k"}
        />
        <CardTokens
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

export default AllTokens;
