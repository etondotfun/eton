"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CardHOF from "./cards/CardHOF";
import WalletsProvider from "./Wallets";

const Navbar = () => {
  const [Toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full flex justify-center sticky top-0 z-50">
      <div className="w-[95%] md:w-[98%] flex justify-between items-center bg-[#333333] p-4 my-4 rounded-2xl">
        <div className="text-secondary text-2xl font-bold md:w-[10%] flex justify-center">
          Logo
        </div>

        <div className="w-[90%] hidden md:flex overflow-hidden">
          <div className="use-section flex justify-center items-center">
            <div className="use-container flex items-center w-full">
              {/* <div className="use-text-head text-4xl font-bold bg-[rgba(0,0,0,0.4)] px-4 py-2 rounded-xl">
                <a href="#0" className="use-text-effect">
                  Hall of Fame
                </a>
              </div> */}
              <div className="use-slider flex items-center overflow-hidden">
                <div className="slide flex justify-center items-center gap-8 shrink-0 min-w-full">
                  {/* {Domains?.map((v, i) => (
                    <div key={i} className="use-text flex items-center gap-4 font-bold text-white">
                      {v.Domain}
                      <span className="">
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.97488 0.139755L8.38849 5.41724L13.7246 3.92195L14.1937 7.52824L9.32671 7.88007L12.5225 12.1314L9.26807 13.8612L7.0398 9.37536L5.0754 13.8319L1.70367 12.1314L4.87017 7.88007L0.0324707 7.49892L0.589539 3.92195L5.80839 5.41724L5.222 0.139755H8.97488Z"
                            fill="#6D9CFE"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  ))} */}
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                  <CardHOF
                    image={"/eth.svg"}
                    name="Greemly"
                    ca={"address...0123"}
                    dex="Uniswap"
                    ath={`$3000`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {Toggle ? (
          <Image
            width={100}
            height={100}
            src="/hamburger (1).png"
            alt=""
            className="z-0 md:hidden ml-4 w-[30px] h-[30px]"
            onClick={handleClick}
          />
        ) : (
          <Image
            width={100}
            height={100}
            src="/close.png"
            alt=""
            className="z-0 md:hidden ml-4 w-[30px] h-[30px]"
            onClick={handleClick}
          />
        )}

        <div
          className={`delay-300 md:hidden flex text-center gap-6 py-12 px-6 h-screen bg-black/90 w-full fixed top-[85px] text-primary  flex-col ${
            Toggle ? "right-[100%]" : "left-[100%]}"
          }`}
        >
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/profile">
            <p>Profile</p>
          </Link>
          <Link href="/referrals">
            <p>Referrals</p>
          </Link>
          <Link href="/deploy">
            <p>Deploy</p>
          </Link>

          <WalletsProvider />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
