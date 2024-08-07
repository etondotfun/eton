"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardReferral = ({
  reflink,
  referrals,
  commission,
  refhits,
}: {
  reflink: any;
  referrals: any;
  commission: any;
  refhits: any;
}) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(reflink)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy");
      });
  };

  return (
    <div className="w-[95%] md:w-[80%] flex flex-col gap-1 abril">
      <div className="bg-tonprimary rounded-2xl py-3 px-6">
        <div className="text-center flex flex-col items-center">
          <div className="text-3xl sm:text-4xl text-primary font-bold">
            Earn{" "}
            <span className="text-5xl sm:text-6xl text-textColor font-extrabold">1%</span>{" "}
            of each trade
          </div>
          <div className="text-gray-300 font-medium text-base sm:text-xl">
            Share Referral link with your friends and earn 1% of every trade
            they make.
          </div>
        </div>
      </div>

      <div className="bg-tonprimary rounded-2xl py-3 px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <div className="text-primary text-center">{reflink}</div>
          <div className="flex gap-2">
            <button
              className="px-6 py-2 text-tonprimary rounded-xl bg-textColor"
              onClick={handleCopy}
            >
              Copy
            </button>
            <button className="px-6 py-2 text-tonprimary rounded-xl bg-textColor">
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-center text-center w-full">
        <div className="flex flex-col gap-2 w-full sm:w-[33%] bg-tonprimary rounded-2xl p-3 sm:p-6">
          <p className="text-xl text-gray-400 font-medium">Total Referrals</p>
          <p className="text-textColor text-3xl font-semibold">{referrals}</p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-[33%] bg-tonprimary rounded-2xl p-3 sm:p-6">
          <p className="text-xl text-gray-400 font-medium">Commission</p>
          <p className="text-textColor text-3xl font-semibold">${commission}</p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-[33%] bg-tonprimary rounded-2xl p-3 sm:p-6">
          <p className="text-xl text-gray-400 font-medium">Referrals Hits</p>
          <p className="text-textColor text-3xl font-semibold">{refhits}</p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CardReferral;
