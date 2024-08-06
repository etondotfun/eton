import React from "react";
import { FaGripLinesVertical } from "react-icons/fa";
import CardBuys from "../cards/CardBuys";
import Link from "next/link";

const Buys = () => {
  return (
    <div className="flex items-center justify-center w-full bg-tonprimary p-2 rounded-2xl">
      <div className="w-[25%] sm:w-[20%] md:w-[10%] text-2xl md:text-3xl font-semibold md:font-bold text-center text-primary p-2 bg-textColor rounded-xl">
        Buys
      </div>
      <div className="w-[75%] sm:w-[80%] md:w-[90%] bg-tonprimary">
        <div className="use-section flex justify-center items-center">
          <div className="use-container flex items-center w-full">
            <div className="use-slider flex items-center overflow-hidden">
              <div className="slide flex justify-center items-center gap-2 shrink-0 min-w-full text-white">
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
                <CardBuys
                  image={"/eth.svg"}
                  addr={0x9923}
                  amt={100000}
                  name="Tonfun"
                />
                <FaGripLinesVertical />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buys;
