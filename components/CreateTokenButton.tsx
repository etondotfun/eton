import Link from "next/link";
import React from "react";

const CreateTokenButton = () => {
  return (
    <div className="w-full flex justify-end relative">
      <Link href="/create-token">
        <button className="bg-textColor px-4 py-2 rounded-2xl text-primary font-bold">
          Create Token
        </button>
      </Link>
    </div>
  );
};

export default CreateTokenButton;
