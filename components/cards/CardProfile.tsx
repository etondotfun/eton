"use client";
import Image from "next/image";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProfile = ({
  img,
  user,
  reflink,
  earned,
  withdraw,
  referrals,
  tokensCreated,
  transaction,
}: {
  img: any;
  user: string;
  reflink: any;
  earned: any;
  withdraw: any;
  referrals: any;
  tokensCreated: any;
  transaction: any;
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
    <div className="flex flex-col items-center gap-3 w-[95%] md:w-[75%] bg-tonprimary p-4 rounded-2xl">
      <div className="w-full">
        <div className="w-[80px] h-[80px]">
          <Image
            width={100}
            height={100}
            src={img}
            alt="profile-icon"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-400 text-lg">{user}</p>
      </div>

      <div className="flex flex-col gap-3 w-full bg-black/[0.3] p-4 rounded-xl">
        <div className="flex justify-between text-textColor font-bold">
          <p>Invite your friends</p>
          <p>earn 20%</p>
        </div>

        <div className="flex justify-center items-center text-center gap-4">
          <div className="flex flex-col">
            <p className="text-2xl text-textColor font-bold">{earned} TON</p>
            <p className="text-sm text-gray-500">You Earned</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl text-textColor font-bold">{withdraw} TON</p>
            <p className="text-sm text-gray-500">Withdrawn</p>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Send an invitation link for your token to your friends and{" "}
            <span className="text-textColor font-bold">earn 20%</span> from each
            transaction. People invited: {referrals}, tokens created:{" "}
            {tokensCreated}, transaction amount: {transaction} TON
          </p>
        </div>

        <div className="w-full border border-textColor/[0.2] p-2 rounded-lg">
          <p className="text-primary text-sm overflow-auto">{reflink}</p>
        </div>

        <button
          className="w-full flex gap-2 justify-center items-center py-2 bg-textColor text-primary text-lg rounded-lg"
          onClick={handleCopy}
        >
          <IoCopyOutline />
          Copy Link
        </button>
      </div>

      <button className="flex gap-2 justify-center items-center py-3 bg-textColor text-primary w-full rounded-lg">
        Exit from profile
      </button>
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

export default CardProfile;
