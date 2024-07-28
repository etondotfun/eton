import CreateTokenForm from "@/components/CreateTokenForm";
import Navbar from "@/components/Navbar";
import React from "react";

const createToken = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        // style={{ backgroundImage: "url('/background.jpg')" }}
        // style={{ backgroundImage: "url('/background1.jpg')" }}
        style={{ backgroundImage: "url('/background2.jpg')" }}
      />
      <Navbar />
      <CreateTokenForm />
    </div>
  );
};

export default createToken;
